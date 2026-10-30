import Icon from '@/components/ui/Icon';
import { optimizedImage } from '@/lib/media';

// HERO with background video
export default function Hero() {
  return (
    <section className="relative isolate flex h-screen sm:min-h-[600px] items-center overflow-hidden bg-ink-950">
      {/* Background video: Clovity-supplied banner video */}
      <video
        id="hero-video"
        className="hero-video absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={optimizedImage('/assets/img/hero-home-banner-img.jpg')}
      >
        <source src="/assets/videos/clovity-federal-home.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-site px-4 py-20 sm:px-6">
        <div className="max-w-3xl text-center sm:text-left">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Atlassian built for secure <span className="text-[#93c5fd]">government environments.</span>
          </h1>
          {/* Phones get a one-line version; the full sentence shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            Clovity Federal configures, migrates and documents Jira, Confluence and JSM inside public sector security rules, so your
            security team can approve it.
          </p>
          <p className="mt-6 hidden max-w-2xl text-lg leading-relaxed text-white sm:block sm:text-xl">
            Clovity Federal configures, migrates and documents Jira, Confluence and Jira Service Management inside public sector security
            rules, so your security team can approve it and your mission teams can use it.
          </p>
        </div>
      </div>
      <button
        id="video-toggle"
        className="absolute bottom-8 right-6 grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/20"
        aria-label="Pause background video"
      >
        <Icon name="pause" data-icon="pause" className="h-4 w-4" /> <Icon name="play" data-icon="play" className="hidden h-4 w-4" />
      </button>
    </section>
  );
}
