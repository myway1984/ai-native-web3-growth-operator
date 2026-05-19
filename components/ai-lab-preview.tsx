import { Cable, DatabaseZap, Rocket } from "lucide-react";
import { Panel } from "@/components/ui/panel";
import type { AILabEntry } from "@/lib/notion-cms";

type AILabPreviewProps = {
  items: AILabEntry[];
};

const icons = [Rocket, Cable, DatabaseZap];

export function AILabPreview({ items }: AILabPreviewProps) {
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
        {items.map((item, index) => {
          const Icon = icons[index % icons.length];
          return (
          <Panel key={item.title} className="min-h-[230px] p-5">
            <Icon size={24} className="text-[var(--violet)]" />
            <h3 className="mt-8 text-xl font-bold">
              {item.url ? (
                <a href={item.url} target="_blank" rel="noreferrer" className="hover:text-[var(--green)]">
                  {item.title}
                </a>
              ) : (
                item.title
              )}
            </h3>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
          </Panel>
          );
        })}
      </div>
    </section>
  );
}
