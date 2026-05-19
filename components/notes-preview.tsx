import { CheckCircle2 } from "lucide-react";
import { notes } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";

export function NotesPreview() {
  return (
    <section id="notes" className="py-16 md:py-24">
      <div className="mb-7">
        <h2 className="max-w-4xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight">
          Notes
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
          持续跟踪正在改变内容、社区和金融市场的变量。
        </p>
      </div>

      <Panel className="bg-[rgba(3,10,17,0.86)] p-3">
        {notes.map((note) => (
          <div
            key={note}
            className="grid grid-cols-[24px_1fr_auto] items-center gap-3 border-t border-[rgba(148,169,199,0.11)] px-3 py-4 first:border-t-0 max-sm:grid-cols-[24px_1fr]"
          >
            <CheckCircle2 size={17} className="text-[var(--green)]" />
            <span className="font-medium">{note}</span>
            <small className="text-xs text-[var(--muted)] max-sm:col-start-2">active research</small>
          </div>
        ))}
      </Panel>
    </section>
  );
}
