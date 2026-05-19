import { CheckCircle2 } from "lucide-react";

type MetricStateProps = {
  label: string;
  state: string;
};

export function MetricState({ label, state }: MetricStateProps) {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-3 border-t border-[rgba(148,169,199,0.12)] py-3 first:border-t-0">
      <span className="text-sm text-[var(--muted)]">{label}</span>
      <span className="inline-flex items-center gap-2 rounded-[8px] border border-[rgba(124,255,82,0.24)] bg-[rgba(124,255,82,0.07)] px-2.5 py-1 text-xs font-semibold text-[var(--green)]">
        <CheckCircle2 size={14} />
        {state}
      </span>
    </div>
  );
}
