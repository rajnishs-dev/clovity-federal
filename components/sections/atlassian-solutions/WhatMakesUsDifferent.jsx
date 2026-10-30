import Icon from '@/components/ui/Icon';

// What makes us different (EM)
export default function WhatMakesUsDifferent() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            What makes us different
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Deep Atlassian skill, applied with the care a government security review expects.
          </p>
        </div>
        {/* Editorial rows: rules draw in and content rises on scroll (animations.js [data-rows]) */}
        <div data-rows="" className="rows mt-12 lg:mt-16">
          <article className="row-item">
            <span className="row-icon">
              <Icon name="badge-check" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Platinum Solution Partner</h3>
            <p className="text-lg leading-relaxed text-black">
              Clovity is an Atlassian Platinum Solution Partner. You work with a team that builds on these products every day.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="kanban-square" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Jira &amp; JSM expertise</h3>
            <p className="text-lg leading-relaxed text-black">
              Workflows, permission schemes and service desks designed so every change has an owner and an approval on record.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="workflow" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
              Integration &amp; automation
            </h3>
            <p className="text-lg leading-relaxed text-black">
              Links to identity, CI/CD and reporting tools, each scoped to the access it needs. Automation rules that leave a trail.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="map" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Atlassian consulting</h3>
            <p className="text-lg leading-relaxed text-black">
              Architecture, licensing and deployment advice tied to your data categorization and ATO path, not to a product list.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="sparkles" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Governed AI</h3>
            <p className="text-lg leading-relaxed text-black">
              AI used under clear rules: approved data sources, human review and logged use. AI features vary by deployment, so we confirm
              what yours offers first.
            </p>
          </article>
          <article className="row-item">
            <span className="row-icon">
              <Icon name="life-buoy" className="h-6 w-6" />
            </span>
            <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Enterprise support</h3>
            <p className="text-lg leading-relaxed text-black">
              Managed administration, access reviews and release tracking after go-live, so the platform stays inside its approved baseline.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
