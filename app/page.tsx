import { AILabPreview } from "@/components/ai-lab-preview";
import { AboutPreview } from "@/components/about-preview";
import { CapabilityGrid } from "@/components/capability-grid";
import { ContactDock } from "@/components/contact-dock";
import { HeroConsole } from "@/components/hero-console";
import { MarketConsole } from "@/components/market-console";
import { NotesPreview } from "@/components/notes-preview";
import { SiteHeader } from "@/components/site-header";
import { WorkPreview } from "@/components/work-preview";
import { getCmsContent } from "@/lib/notion-cms";

export const revalidate = 300;

export default async function Home() {
  const cms = await getCmsContent();

  return (
    <main className="min-h-screen overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_14%_12%,rgba(68,216,255,0.16),transparent_30rem),radial-gradient(circle_at_82%_4%,rgba(141,101,255,0.16),transparent_27rem),radial-gradient(circle_at_55%_54%,rgba(124,255,82,0.07),transparent_36rem),linear-gradient(180deg,#02070d_0%,#050b13_48%,#02070d_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(rgba(148,169,199,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(148,169,199,0.07)_1px,transparent_1px)] bg-[size:44px_44px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

      <SiteHeader />

      <div className="mx-auto w-[min(1480px,calc(100%-24px))] pb-16 md:w-[min(1480px,calc(100%-40px))]">
        <section
          id="home"
          className="grid min-h-[calc(100vh-88px)] gap-4 pb-14 pt-2 lg:grid-cols-[minmax(340px,0.92fr)_minmax(420px,1.14fr)_minmax(280px,0.72fr)]"
        >
          <HeroConsole />
          <CapabilityGrid />
          <MarketConsole />
        </section>
      </div>

      <div className="mx-auto w-[min(1180px,calc(100%-24px))] md:w-[min(1180px,calc(100%-40px))]">
        <AboutPreview />
        <WorkPreview projects={cms.projects} />
        <AILabPreview items={cms.aiLab} />
        <NotesPreview notes={cms.notes} />
        <ContactDock />
      </div>
    </main>
  );
}
