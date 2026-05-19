# Notion CMS Setup

This site can read Projects, AI Lab, and Notes from Notion. The recommended
setup is one Notion database with a `Section` property. If the Notion
environment variables are missing or invalid, the site falls back to
`lib/site-data.ts`.

## Environment Variables

Add these variables in Vercel Project Settings > Environment Variables:

```txt
NOTION_TOKEN=
NOTION_CMS_DATABASE_ID=
NOTION_PROJECTS_DATABASE_ID=
NOTION_AI_LAB_DATABASE_ID=
NOTION_NOTES_DATABASE_ID=
```

Use the same values locally in `.env.local` when testing.

`NOTION_CMS_DATABASE_ID` is preferred. The three section-specific database IDs
are supported as a fallback for an older three-database setup.

## Recommended Single CMS Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Name | Title | Card title |
| Section | Select | `Projects`, `AI Lab`, or `Notes` |
| Scene | Text | Project business scene |
| Role | Text | What you did |
| Outcome | Text | Result, metric, or TODO |
| Body | Text | AI Lab workflow summary |
| Topic | Text | Note topic label |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Suggested sort ranges:

- Projects: `1` to `99`
- AI Lab: `101` to `199`
- Notes: `201` to `299`

## Projects Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Name | Title | Project name |
| Scene | Text | Business scene |
| Role | Text | What you did |
| Outcome | Text | Result, metric, or TODO |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Project` or `Title` for `Name`
- `Business Scene` or `Summary` for `Scene`
- `Action` or `Contribution` for `Role`
- `Result` or `Impact` for `Outcome`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## AI Lab Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Title | Title | Experiment title |
| Body | Text | Workflow or result summary |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Name` for `Title`
- `Workflow`, `Summary`, or `Result` for `Body`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## Notes Database

Recommended properties:

| Property | Type | Purpose |
| --- | --- | --- |
| Title | Title | Note title |
| Topic | Select or Text | Topic label |
| Published | Checkbox | Show only when checked |
| Sort | Number | Display order |
| URL | URL | Optional public link |

Also supported aliases:

- `Name` for `Title`
- `Category` or `Summary` for `Topic`
- `Public` or `Visible` for `Published`
- `Sort Order` or `Order` for `Sort`
- `Public URL` or `Link` for `URL`

## Notion Integration Checklist

1. Create an internal Notion integration.
2. Copy its secret as `NOTION_TOKEN`.
3. Share the CMS database with that integration.
4. Copy the database ID from the database URL.
5. Add `NOTION_TOKEN` and `NOTION_CMS_DATABASE_ID` in Vercel.
6. Redeploy once, or wait for the next deployment.

The homepage revalidates every 5 minutes.
