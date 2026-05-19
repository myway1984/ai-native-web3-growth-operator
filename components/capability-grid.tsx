import { Activity } from "lucide-react";
import { capabilityModules } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";
import { StatusPill } from "@/components/ui/status-pill";

export function CapabilityGrid() {
  return (
    <div className="flex min-w-0 flex-col gap-3">
      <Panel className="flex min-h-[76px] items-center justify-between px-5 py-4">
        <div>
          <span className="text-xs text-[var(--muted)]">Workspace Modules</span>
          <strong className="mt-1 block text-lg">AI Market Intelligence Console</strong>
        </div>
        <Activity size={20} className="text-[var(--green)]" />
      </Panel>

      <div className="grid flex-1 gap-3 md:grid-cols-2">
        {capabilityModules.map((module) => (
          <a
            key={module.id}
            href={`#${module.id}`}
            className="panel group min-h-[210px] p-5 transition hover:border-[rgba(69,216,255,0.52)] hover:bg-[rgba(16,33,50,0.9)]"
          >
            <div className="flex items-center justify-between gap-3">
              <module.icon size={21} className="text-[var(--green)]" />
              <StatusPill tone="muted">{module.status}</StatusPill>
            </div>
            <strong className="mt-8 block text-xl">{module.title}</strong>
            <span className="mt-2 block text-sm font-semibold text-[var(--green)]">{module.subtitle}</span>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">{module.body}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
