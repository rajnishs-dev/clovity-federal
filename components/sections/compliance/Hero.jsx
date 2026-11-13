import PageBanner from '@/components/ui/PageBanner';

// Page hero: banner photo with the shared dark scrim
export default function Hero() {
  return (
    <PageBanner image="compliance-banner" mobile={false}>
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Secure systems. Operations built for review.
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            We configure Atlassian around FedRAMP, FISMA and NIST SP 800-53, and document every setting.
          </p>
          <p className="mt-6 hidden sm:block max-w-2xl text-lg leading-relaxed text-white">
            We know the federal rules Atlassian work has to live under: FedRAMP, FISMA, NIST SP 800-53 and your agency's own security
            requirements. We configure Jira, Confluence and Jira Service Management around them and document every setting, so your security
            team can check the work.
          </p>
        </div>
      </div>
    </PageBanner>
  );
}
