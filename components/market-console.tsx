import { capabilityStates, pipeline } from "@/lib/site-data";
import { MetricState } from "@/components/ui/metric-state";
import { Panel } from "@/components/ui/panel";

export function MarketConsole() {
  return (
    <aside className="grid content-start gap-3 lg:grid-cols-1 md:grid-cols-3">
      <Panel className="p-5">
        <h2 className="mb-3 text-sm font-bold text-[var(--soft)]">Capability Status</h2>
        {capabilityStates.map((item) => (
          <MetricState key={item.label} label={item.label} state={item.state} />
        ))}
      </Panel>

      <Panel className="p-5">
        <h2 className="mb-4 text-sm font-bold text-[var(--soft)]">Content Pipeline</h2>
        <div className="space-y-1">
          {pipeline.map((step, index) => (
            <div key={step.label} className="grid grid-cols-[38px_1fr] gap-3 border-t border-[rgba(148,169,199,0.12)] py-3 first:border-t-0">
              <span className="text-sm font-black text-[var(--cyan)]">{String(index + 1).padStart(2, "0")}</span>
              <div className="flex gap-3">
                <step.icon size={17} className="mt-0.5 shrink-0 text-[var(--green)]" />
                <div>
                  <strong className="block text-sm">{step.label}</strong>
                  <small className="mt-1 block text-xs text-[var(--muted)]">{step.detail}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Panel>

      <Panel className="p-5">
        <h2 className="mb-4 text-sm font-bold text-[var(--soft)]">Research Watchlist</h2>
        <div className="grid gap-2">
          {["Blockchain", "Macro Market", "AI Tools", "Content Trends"].map((item) => (
            <div key={item} className="flex items-center justify-between rounded-[8px] border border-[rgba(148,169,199,0.12)] bg-[rgba(3,10,17,0.54)] px-3 py-2">
              <span className="text-sm text-[var(--soft)]">{item}</span>
              <span className="text-xs font-semibold text-[var(--green)]">TRACKING</span>
            </div>
          ))}
        </div>
      </Panel>
    </aside>
  );
}
