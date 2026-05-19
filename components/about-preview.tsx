import { ChartCandlestick, Cpu, Layers3, UsersRound } from "lucide-react";
import { Panel } from "@/components/ui/panel";

const aboutCards = [
  {
    title: "Content Product Sense",
    body: "理解资讯内容从选题、生产、分发到复盘的产品化链路。",
    icon: Layers3,
  },
  {
    title: "Community Growth Loop",
    body: "关注社区启动、用户分层、互动反馈与精细化触达。",
    icon: UsersRound,
  },
  {
    title: "Market Research Habit",
    body: "持续跟踪 Web3、宏观市场、财经叙事与热点周期。",
    icon: ChartCandlestick,
  },
  {
    title: "AI-Native Execution",
    body: "用 Codex 与 AI 工具把想法快速变成原型和工作流。",
    icon: Cpu,
  },
];

export function AboutPreview() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight">About</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
            不是把 AI 当作单点工具，而是把内容、社区、增长、研究和原型能力组织成一套可执行的运营系统。
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {aboutCards.map((card) => (
            <Panel key={card.title} className="min-h-[170px] p-5">
              <card.icon size={21} className="text-[var(--cyan)]" />
              <h3 className="mt-6 text-lg font-bold">{card.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{card.body}</p>
            </Panel>
          ))}
        </div>
      </div>
    </section>
  );
}
