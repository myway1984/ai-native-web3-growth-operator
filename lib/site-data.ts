import {
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Cable,
  ChartCandlestick,
  DatabaseZap,
  FileText,
  Fingerprint,
  Gauge,
  Mail,
  MessageSquareText,
  Network,
  NotebookTabs,
  Rocket,
  Search,
  Target,
  UsersRound,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Notes", href: "#notes" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "AI-Native Web3 Growth Operator",
  statement: "用 AI 重构 运营（内容/社区/增长）",
  subtitle: "专注 Web3、财经内容、用户增长与 AI 工作流。",
  actions: [
    { label: "View Work", href: "#work", icon: BriefcaseBusiness },
    { label: "Open AI Lab", href: "#ai-lab", icon: BrainCircuit },
  ],
};

export const heroSignals = [
  { label: "Web3 Content", value: "财经资讯 / 交易叙事", icon: FileText },
  { label: "Growth Ops", value: "社区 / 用户生命周期", icon: UsersRound },
  { label: "Market Research", value: "链上 / 宏观 / 热点", icon: ChartCandlestick },
  { label: "AI Workflow", value: "Codex / 自动化原型", icon: Bot },
];

export const capabilityModules = [
  {
    id: "about",
    title: "About",
    subtitle: "复合型运营背景",
    body: "把内容判断、用户运营、产品意识与工具化能力放进同一个工作台。",
    icon: Fingerprint,
    status: "PROFILE",
  },
  {
    id: "work",
    title: "Work / Projects",
    subtitle: "项目与业务证据",
    body: "以 Web3、财经内容、社区增长和用户运营为核心展示项目样本。",
    icon: BriefcaseBusiness,
    status: "CASES",
  },
  {
    id: "ai-lab",
    title: "AI Lab",
    subtitle: "工具与工作流",
    body: "用 Codex 与 AI 工具搭建内容生产、研究沉淀和产品原型流程。",
    icon: BrainCircuit,
    status: "BUILD",
  },
  {
    id: "notes",
    title: "Notes",
    subtitle: "研究跟踪",
    body: "持续观察区块链、宏观市场、AI 工具与内容产品化趋势。",
    icon: NotebookTabs,
    status: "TRACK",
  },
];

export const capabilityStates = [
  { label: "Content Ops", state: "Advanced" },
  { label: "Community Growth", state: "Advanced" },
  { label: "User Operation", state: "Proficient" },
  { label: "AI Workflow", state: "Active Builder" },
  { label: "Market Research", state: "Active Tracker" },
];

export const pipeline = [
  { label: "Market Scan", detail: "链上 / 宏观 / 叙事", icon: Search },
  { label: "Content Desk", detail: "选题 / 编辑 / 分发", icon: FileText },
  { label: "Community Loop", detail: "互动 / 反馈 / 转化", icon: Network },
  { label: "Data Review", detail: "复盘 / 分层 / 优化", icon: DatabaseZap },
];

export const workProjects = [
  {
    name: "PumpSnake",
    scene: "TODO: 业务场景",
    role: "TODO: 负责动作",
    outcome: "TODO: 结果指标",
  },
  {
    name: "MEET48 / Web3 Entertainment",
    scene: "TODO: 业务场景",
    role: "TODO: 负责动作",
    outcome: "TODO: 结果指标",
  },
  {
    name: "Trading & Financial Content",
    scene: "TODO: 业务场景",
    role: "TODO: 负责动作",
    outcome: "TODO: 结果指标",
  },
  {
    name: "AI Workflow Experiments",
    scene: "TODO: 业务场景",
    role: "TODO: 负责动作",
    outcome: "TODO: 结果指标",
  },
];

export const aiLabItems = [
  {
    title: "Codex Prototype Desk",
    body: "快速搭建个人主页、运营看板、内容工具、需求原型与验证页面。",
    icon: Rocket,
  },
  {
    title: "Content Automation Flow",
    body: "把资料收集、选题归纳、初稿生成、标题测试和分发清单串成流程。",
    icon: Cable,
  },
  {
    title: "Research Knowledge Base",
    body: "沉淀 Web3、宏观市场、AI 产品观察，形成可复用的研究资产。",
    icon: DatabaseZap,
  },
];

export const notes = [
  "Web3 基础设施",
  "宏观流动性",
  "AI Agent",
  "内容产品化",
  "社区增长",
];

export const contactLinks = [
  { label: "Email", href: "mailto:hello@example.com", icon: Mail },
  { label: "Social", href: "https://x.com", icon: MessageSquareText },
  { label: "Resume PDF", href: "#home", icon: FileText },
];

export const statusTiles = [
  { label: "Console", value: "Market Intelligence", icon: Gauge },
  { label: "Focus", value: "Content x Growth", icon: Target },
];
