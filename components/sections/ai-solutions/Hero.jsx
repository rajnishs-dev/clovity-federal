import PageBanner from '@/components/ui/PageBanner';

// Page hero: banner photo with the shared dark scrim
export default function Hero() {
  return (
    <PageBanner image="ai-solution-banner2" mobile={false}>
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            AI-assisted operations, inside a governed environment
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            We add AI to Jira, Confluence and JSM only after your security team approves it.
          </p>
          <p className="mt-6 hidden sm:block max-w-2xl text-lg leading-relaxed text-white">
            We help agencies add AI to Jira, Confluence and Jira Service Management only after it is approved, bounded and logged. Your
            security team decides. We do the groundwork.
          </p>
        </div>
      </div>
    </PageBanner>
  );
}
