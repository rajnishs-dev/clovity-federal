import Icon from '@/components/ui/Icon';

export default function WhyFederalAgenciesChoose() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Why federal agencies choose Clovity
          </h2>
          <p className="text-lg text-black lg:justify-self-end lg:max-w-md">
            Three things set the tone of every engagement, from the first briefing to steady-state support.
          </p>
        </div>
        {/* Editorial rows: rules draw in and content rises on scroll (animations.js [data-rows]) */}
        <div data-rows="" className="rows mt-12 lg:mt-16">
          <article className="row-item">
            <span className="row-icon">
              <Icon name="shield-check" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Secure environment expertise
            </h3>
            <p className="text-lg leading-relaxed text-black">
              Least-privilege permissions, SSO through your agency IdP and audit logging go in at setup, not after the first finding.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="scroll-text" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Federal compliance experience
            </h3>
            <p className="text-lg leading-relaxed text-black">
              We design around FedRAMP via Government Cloud, FISMA and NIST SP 800-53 control families, and write down every setting so your
              assessors can follow it.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="workflow" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Strategy through execution
            </h3>
            <p className="text-lg leading-relaxed text-black">
              One team from assessment and design through migration, licensing and ongoing support. No hand-offs for an auditor to find.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
