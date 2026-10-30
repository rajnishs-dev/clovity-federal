// Page hero: background video (Mixkit free license)
export default function Hero() {
  return (
    <section className="relative isolate flex min-h-[640px] items-center overflow-hidden bg-ink-950 pb-20 pt-28 lg:h-[78vh]">
      <video
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://assets.mixkit.co/videos/23219/23219-thumb-720-0.jpg"
      >
        <source src="https://assets.mixkit.co/videos/23219/23219-720.mp4" type="video/mp4" />
      </video>
      <div className="page-hero-overlay absolute inset-0 -z-10" />
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Atlassian Government Cloud, set up for your security review
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            We check whether AGC fits your data, then configure and document it for your ATO.
          </p>
          <p className="mt-6 hidden sm:block max-w-2xl text-lg leading-relaxed text-white">
            Atlassian Government Cloud (AGC) is Atlassian's FedRAMP Moderate authorized cloud for U.S. government, run separately from its
            commercial cloud. We check whether it fits your data, then configure and document it for your ATO.
          </p>
        </div>
      </div>
    </section>
  );
}
