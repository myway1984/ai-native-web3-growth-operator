import { CircleDot } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 mx-auto grid w-[min(1480px,calc(100%-24px))] gap-3 py-3 backdrop-blur-xl md:w-[min(1480px,calc(100%-40px))] lg:grid-cols-[240px_1fr_auto] lg:items-center lg:gap-4">
      <a href="#home" className="chrome-button flex items-center gap-3 p-2.5">
        <span className="grid size-10 place-items-center rounded-[8px] border border-[rgba(124,255,82,0.5)] bg-[linear-gradient(135deg,var(--green),var(--cyan))] text-sm font-black text-[#06100a]">
          AI
        </span>
        <span className="min-w-0">
          <strong className="block text-sm">STAN LEE</strong>
          <small className="block text-xs text-[var(--muted)]">Web3 Growth Operator</small>
        </span>
      </a>

      <nav className="grid grid-cols-3 gap-2 md:flex md:justify-center">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="chrome-button flex min-h-10 items-center justify-center px-3 text-sm text-[var(--soft)] transition hover:border-[rgba(69,216,255,0.48)] hover:bg-[rgba(16,33,50,0.9)]"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="chrome-button hidden min-h-10 items-center gap-2 px-3 text-sm font-semibold text-[var(--green)] lg:flex">
        <CircleDot size={14} />
        Available for Web3 / AI Ops
      </div>
    </header>
  );
}
