import Icon from '@/components/ui/Icon';

// Benefits (EM 6 benefits)
export default function BenefitsOfAtlassianFederal() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Benefits of Atlassian federal solutions
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            What changes when the platform is set up with security and records in mind from the start.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="workflow" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Standardized workflows</h3>
            <p className="mt-1 text-black">The same steps and approvals every time, so results are repeatable and reviewable.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="eye" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Improved visibility</h3>
            <p className="mt-1 text-black">Leaders see status from live data, not from reports assembled by hand.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="users" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Better collaboration</h3>
            <p className="mt-1 text-black">Program, IT and security staff work in one place, under shared rules.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="gauge" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Faster service delivery</h3>
            <p className="mt-1 text-black">Requests route to the right team with less manual hand-off.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="book-lock" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Centralized knowledge</h3>
            <p className="mt-1 text-black">Policies and procedures kept in one place, with access set by role.</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-card">
            <Icon name="scroll-text" className="h-7 w-7 text-ink-900" />
            <h3 className="text-black text-xl mt-4 font-medium">Better governance</h3>
            <p className="mt-1 text-black">Access, changes and approvals recorded and ready for your auditors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
