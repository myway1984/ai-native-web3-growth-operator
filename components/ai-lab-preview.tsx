import { aiLabItems } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";

export function AILabPreview() {
  return (
    <section id="ai-lab" className="py-16 md:py-24">
      <div className="mb-7">
        <h2 className="max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight">
          AI Lab
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
          把 AI 从单点工具使用推进到内容、研究、原型的可复用工作流。
        </p>
      </div>

      <div className="grid gap-3 lg:grid-cols-3">
        {aiLabItems.map((item) => (
          <Panel key={item.title} className="min-h-[230px] p-5">
            <item.icon size={24} className="text-[var(--violet)]" />
            <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
          </Panel>
        ))}
      </div>
    </section>
  );
}
