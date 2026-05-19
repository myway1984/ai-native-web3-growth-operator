import { ArrowUpRight } from "lucide-react";
import { workProjects } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";

export function WorkPreview() {
  return (
    <section id="work" className="py-16 md:py-24">
      <div className="mb-7 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight">Work / Projects</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
            项目先以 TODO 占位，后续替换真实业务场景、负责动作和结果指标。
          </p>
        </div>
        <span className="text-sm font-semibold text-[var(--green)]">Evidence Board</span>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        {workProjects.map((project, index) => (
          <Panel key={project.name} className="relative min-h-[240px] p-5">
            <span className="text-sm font-black text-[var(--green)]">0{index + 1}</span>
            <ArrowUpRight size={18} className="absolute right-5 top-5 text-[var(--cyan)]" />
            <h3 className="mt-8 text-xl font-bold">{project.name}</h3>
            <div className="mt-5 grid gap-2 text-sm text-[var(--muted)]">
              <p>{project.scene}</p>
              <p>{project.role}</p>
              <p>{project.outcome}</p>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
