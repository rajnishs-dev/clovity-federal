import PageBanner from '@/components/ui/PageBanner';

// Page hero: banner photo with the shared dark scrim
export default function Hero() {
  return (
    <PageBanner image="blog-banner" mobile={false}>
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
    </PageBanner>
  );
}
