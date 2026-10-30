import Icon from '@/components/ui/Icon';

export default function GovernedAiExpertise() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Governed AI expertise
          </h2>
          <p className="mt-5 text-lg text-black">
            AI features vary by deployment. Commercial cloud, Government Cloud and Data Center do not offer the same set, so we start from
            what exists in yours.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="scan-search" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Deployment-aware advice</h3>
            <p className="mt-3 leading-relaxed text-black">
              We don't assume a commercial cloud feature, such as Rovo, is available in Government Cloud. We confirm availability for your
              deployment before it goes in a plan.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="layers" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Platform features first</h3>
            <p className="mt-3 leading-relaxed text-black">
              Native Atlassian capabilities come before third-party apps. Any app is vetted on its own, because the Government Cloud
              authorization does not cover Marketplace apps.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="workflow" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Automation with guardrails</h3>
            <p className="mt-3 leading-relaxed text-black">
              Rules-based Jira and JSM automation often does the job without AI. Where AI adds value, we connect it to the same permissions
              and audit trail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
