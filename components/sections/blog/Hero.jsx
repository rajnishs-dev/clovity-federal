// Page hero: background video (Mixkit free license)
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-black pb-20 pt-28 lg:h-[78vh]">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/assets/videos/blog-hero.jpg"
      >
        <source src="/assets/videos/blog-hero.mp4" type="video/mp4" />
      </video>
      <div className="page-hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Insights for federal Atlassian teams
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            Expert perspectives on Atlassian, FedRAMP and compliance for federal teams.
          </p>
          <p className="mt-6 hidden sm:block max-w-2xl text-lg leading-relaxed text-white">
            Expert perspectives on Atlassian Government Cloud, FedRAMP Moderate, NIST SP 800-53 controls and moving off Data Center.
            Written for program leads, ISSOs and the admins who keep the mission running.
          </p>
        </div>
      </div>
    </section>
  );
}
