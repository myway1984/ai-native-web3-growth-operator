import { contactLinks } from "@/lib/site-data";
import { Panel } from "@/components/ui/panel";

export function ContactDock() {
  return (
    <section id="contact" className="pb-24 pt-16 md:pt-24">
      <Panel className="grid gap-7 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
        <div>
          <h2 className="max-w-3xl text-[clamp(2rem,4vw,3.4rem)] font-black leading-tight">Contact</h2>
          <p className="mt-3 max-w-2xl text-base leading-8 text-[var(--muted)]">
            适合 Web3、财经内容、AI 产品与增长团队交流。
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="chrome-button inline-flex min-h-11 items-center justify-center gap-2 px-4 text-sm font-semibold text-[var(--soft)] transition hover:border-[rgba(69,216,255,0.52)] hover:bg-[rgba(16,33,50,0.9)] max-sm:w-full"
            >
              <link.icon size={18} />
              {link.label}
            </a>
          ))}
        </div>
      </Panel>
    </section>
  );
}
