type StatusPillProps = {
  children: React.ReactNode;
  tone?: "green" | "cyan" | "violet" | "muted";
};

const toneClass = {
  green: "border-[rgba(124,255,82,0.34)] text-[var(--green)]",
  cyan: "border-[rgba(69,216,255,0.34)] text-[var(--cyan)]",
  violet: "border-[rgba(141,101,255,0.34)] text-[var(--violet)]",
  muted: "border-[var(--border)] text-[var(--muted)]",
};

export function StatusPill({ children, tone = "green" }: StatusPillProps) {
  return (
    <span
      className={`inline-flex min-h-8 items-center justify-center rounded-[8px] border bg-[rgba(8,17,27,0.74)] px-3 text-xs font-semibold ${toneClass[tone]}`}
    >
      {children}
    </span>
  );
}
