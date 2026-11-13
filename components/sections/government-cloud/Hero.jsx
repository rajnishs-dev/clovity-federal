import PageBanner from '@/components/ui/PageBanner';

// Page hero: banner photo with the shared dark scrim
export default function Hero() {
  return (
    <PageBanner image="governance-banner2" mobile={false}>
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
    </PageBanner>
  );
}
