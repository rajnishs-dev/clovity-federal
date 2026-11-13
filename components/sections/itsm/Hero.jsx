import PageBanner from '@/components/ui/PageBanner';

// Page hero: banner photo with the shared dark scrim
export default function Hero() {
  return (
    <PageBanner image="itsm-banner2" mobile={false}>
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="max-w-3xl">
          <h1 className="font-display text-3xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl">
            Modern federal IT service management
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-white sm:hidden">
            Service desks on JSM where every request has an owner, an approval and a timestamp.
          </p>
          <p className="mt-6 hidden sm:block max-w-2xl text-lg leading-relaxed text-white">
            We build service desks on Jira Service Management where every incident, change and access request has an owner, an approval and
            a timestamp. JSM sits inside the FedRAMP Moderate authorization for Atlassian Government Cloud, alongside Jira and Confluence.
          </p>
        </div>
      </div>
    </PageBanner>
  );
}
