import { aiLabItems, notes, workProjects } from "@/lib/site-data";

export type WorkProject = {
  name: string;
  scene: string;
  role: string;
  outcome: string;
  url?: string;
  sort?: number;
};

export type AILabEntry = {
  title: string;
  body: string;
  url?: string;
  sort?: number;
};

export type NoteEntry = {
  title: string;
  topic?: string;
  url?: string;
  sort?: number;
};

type NotionPage = {
  properties?: Record<string, NotionProperty>;
};

type NotionProperty = {
  type?: string;
  title?: Array<{ plain_text?: string }>;
  rich_text?: Array<{ plain_text?: string }>;
  select?: { name?: string } | null;
  status?: { name?: string } | null;
  url?: string | null;
  number?: number | null;
  checkbox?: boolean;
};

const notionVersion = "2022-06-28";

const fallbackProjects: WorkProject[] = workProjects;
const fallbackAILab: AILabEntry[] = aiLabItems.map(({ title, body }) => ({ title, body }));
const fallbackNotes: NoteEntry[] = notes.map((title, index) => ({ title, sort: index + 1 }));

export async function getCmsContent() {
  const unifiedCms = await getUnifiedCmsContent();
  if (unifiedCms) return unifiedCms;

  const [projects, aiLab, noteItems] = await Promise.all([
    getWorkProjects(),
    getAILabEntries(),
    getNotes(),
  ]);

  return {
    projects,
    aiLab,
    notes: noteItems,
  };
}

async function getUnifiedCmsContent() {
  const pages = await queryDatabase(process.env.NOTION_CMS_DATABASE_ID);
  if (!pages) return null;

  const publishedPages = pages.filter(isPublished);
  const projects = publishedPages
    .filter((page) => getSection(page) === "Projects")
    .map(mapWorkProject)
    .sort(sortByOrder);
  const aiLab = publishedPages
    .filter((page) => getSection(page) === "AI Lab")
    .map(mapAILabEntry)
    .sort(sortByOrder);
  const noteItems = publishedPages
    .filter((page) => getSection(page) === "Notes")
    .map(mapNoteEntry)
    .sort(sortByOrder);

  return {
    projects: projects.length ? projects : fallbackProjects,
    aiLab: aiLab.length ? aiLab : fallbackAILab,
    notes: noteItems.length ? noteItems : fallbackNotes,
  };
}

async function getWorkProjects(): Promise<WorkProject[]> {
  const pages = await queryDatabase(process.env.NOTION_PROJECTS_DATABASE_ID);
  if (!pages) return fallbackProjects;

  const projects = pages
    .filter(isPublished)
    .map(mapWorkProject)
    .sort(sortByOrder);

  return projects.length ? projects : fallbackProjects;
}

async function getAILabEntries(): Promise<AILabEntry[]> {
  const pages = await queryDatabase(process.env.NOTION_AI_LAB_DATABASE_ID);
  if (!pages) return fallbackAILab;

  const entries = pages
    .filter(isPublished)
    .map(mapAILabEntry)
    .sort(sortByOrder);

  return entries.length ? entries : fallbackAILab;
}

async function getNotes(): Promise<NoteEntry[]> {
  const pages = await queryDatabase(process.env.NOTION_NOTES_DATABASE_ID);
  if (!pages) return fallbackNotes;

  const noteItems = pages
    .filter(isPublished)
    .map(mapNoteEntry)
    .sort(sortByOrder);

  return noteItems.length ? noteItems : fallbackNotes;
}

function mapWorkProject(page: NotionPage): WorkProject {
  const properties = page.properties || {};
  return {
    name: getText(properties, ["Name", "Project", "Title"]) || "Untitled Project",
    scene: getText(properties, ["Scene", "Business Scene", "Summary"]) || "TODO: 业务场景",
    role: getText(properties, ["Role", "Action", "Contribution"]) || "TODO: 负责动作",
    outcome: getText(properties, ["Outcome", "Result", "Impact"]) || "TODO: 结果指标",
    url: getUrl(properties, ["URL", "userDefined:URL", "Public URL", "Link"]),
    sort: getNumber(properties, ["Sort", "Sort Order", "Order"]),
  };
}

function mapAILabEntry(page: NotionPage): AILabEntry {
  const properties = page.properties || {};
  return {
    title: getText(properties, ["Title", "Name"]) || "Untitled Experiment",
    body: getText(properties, ["Body", "Workflow", "Summary", "Result"]) || "TODO: 工作流说明",
    url: getUrl(properties, ["URL", "userDefined:URL", "Public URL", "Link"]),
    sort: getNumber(properties, ["Sort", "Sort Order", "Order"]),
  };
}

function mapNoteEntry(page: NotionPage): NoteEntry {
  const properties = page.properties || {};
  return {
    title: getText(properties, ["Title", "Name"]) || "Untitled Note",
    topic: getText(properties, ["Topic", "Category", "Summary"]),
    url: getUrl(properties, ["URL", "userDefined:URL", "Public URL", "Link"]),
    sort: getNumber(properties, ["Sort", "Sort Order", "Order"]),
  };
}

async function queryDatabase(databaseId?: string): Promise<NotionPage[] | null> {
  const token = process.env.NOTION_TOKEN;
  if (!token || !databaseId) return null;

  try {
    const response = await fetch(`https://api.notion.com/v1/databases/${databaseId}/query`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
        "Notion-Version": notionVersion,
      },
      body: JSON.stringify({ page_size: 50 }),
      next: { revalidate: 300 },
    });

    if (!response.ok) {
      console.warn(`Notion query failed for ${databaseId}: ${response.status}`);
      return null;
    }

    const data = (await response.json()) as { results?: NotionPage[] };
    return data.results || [];
  } catch (error) {
    console.warn("Notion query failed", error);
    return null;
  }
}

function isPublished(page: NotionPage) {
  const properties = page.properties || {};
  const published = findProperty(properties, ["Published", "Public", "Visible"]);
  return published?.type === "checkbox" ? published.checkbox === true : true;
}

function getSection(page: NotionPage) {
  return getText(page.properties || {}, ["Section"]);
}

function getText(properties: Record<string, NotionProperty>, names: string[]) {
  const property = findProperty(properties, names);
  if (!property) return undefined;

  if (property.type === "title") return plainText(property.title);
  if (property.type === "rich_text") return plainText(property.rich_text);
  if (property.type === "select") return property.select?.name;
  if (property.type === "status") return property.status?.name;

  return undefined;
}

function getUrl(properties: Record<string, NotionProperty>, names: string[]) {
  const property = findProperty(properties, names);
  return property?.type === "url" ? property.url || undefined : undefined;
}

function getNumber(properties: Record<string, NotionProperty>, names: string[]) {
  const property = findProperty(properties, names);
  return property?.type === "number" ? property.number || undefined : undefined;
}

function findProperty(properties: Record<string, NotionProperty>, names: string[]) {
  return names.map((name) => properties[name]).find(Boolean);
}

function plainText(parts?: Array<{ plain_text?: string }>) {
  return parts?.map((part) => part.plain_text || "").join("").trim() || undefined;
}

function sortByOrder(a: { sort?: number }, b: { sort?: number }) {
  return (a.sort ?? 999) - (b.sort ?? 999);
}
