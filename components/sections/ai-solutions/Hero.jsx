import { optimizedImage } from '@/lib/media';
// Page hero: background video (Coverr free license) with an AI hologram rising from the laptop
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-ink-950 pb-20 pt-28 lg:h-[78vh]">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={optimizedImage('/assets/img/ai-soltion-banner-poster.jpg')}
      >
        <source src="/assets/videos/ai-solution-video-banner.mp4" type="video/mp4" />
      </video>
      <div className="page-hero-overlay absolute inset-0 -z-10" />
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
    </section>
  );
}
