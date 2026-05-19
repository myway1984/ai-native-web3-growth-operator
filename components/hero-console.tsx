import { hero, heroSignals, statusTiles } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";

export function HeroConsole() {
  return (
    <Panel className="flex flex-col justify-between gap-8 p-5 md:p-8 lg:p-11">
      <div className="space-y-5">
        <h1 className="max-w-[9.8em] text-[clamp(2.5rem,5vw,5.4rem)] font-black leading-[0.98] text-[var(--text)]">
          {hero.title}
        </h1>
        <p className="max-w-xl text-[clamp(1.25rem,2.4vw,2.15rem)] font-semibold leading-tight text-[var(--green)]">
          {hero.statement}
        </p>
        <p className="max-w-xl text-base leading-8 text-[var(--soft)] md:text-lg">{hero.subtitle}</p>
      </div>

      <div className="space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row">
          {hero.actions.map((action, index) => (
            <a
              key={action.href}
              href={action.href}
              className={
                index === 0
                  ? "inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-[rgba(124,255,82,0.54)] bg-[linear-gradient(135deg,var(--green),#42f18b)] px-5 font-extrabold text-[#06100a]"
                  : "chrome-button inline-flex min-h-12 items-center justify-center gap-2 px-5 font-semibold text-[var(--soft)] transition hover:border-[rgba(69,216,255,0.52)] hover:bg-[rgba(16,33,50,0.9)]"
              }
            >
              <action.icon size={18} />
              {action.label}
            </a>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {heroSignals.map((signal) => (
            <article key={signal.label} className="panel-flat min-h-28 p-4">
              <signal.icon size={19} className="text-[var(--cyan)]" />
              <span className="mt-4 block text-xs text-[var(--muted)]">{signal.label}</span>
              <strong className="mt-1 block text-sm text-[var(--text)]">{signal.value}</strong>
            </article>
          ))}
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {statusTiles.map((tile) => (
            <div key={tile.label} className="panel-flat flex items-center gap-3 p-3">
              <tile.icon size={18} className="text-[var(--violet)]" />
              <div>
                <span className="block text-xs text-[var(--muted)]">{tile.label}</span>
                <strong className="text-sm">{tile.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}
