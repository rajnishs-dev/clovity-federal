import Icon from '@/components/ui/Icon';

// Control: governance built into every configuration (documentation package)
export default function GovernanceBuiltIntoEvery() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Governance built into every configuration
          </h2>
          <p className="mt-5 leading-relaxed text-black">
            Control is what stays with you after we leave. Every engagement ends with written evidence your ISSO can file alongside the SSP,
            plus working sessions to walk your security staff through it.
          </p>
        </div>
        <div data-slide="" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="file-check-2" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Configuration baseline</h3>
              <p className="mt-1 text-sm text-black">What is set, where and why.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="network" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Control mapping</h3>
              <p className="mt-1 text-sm text-black">Settings traced to NIST SP 800-53 control families.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Permission and admin model</h3>
              <p className="mt-1 text-sm text-black">Roles, groups and admin access in one place.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="history" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Change log</h3>
              <p className="mt-1 text-sm text-black">Every change during delivery, with approver.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="file-search" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">App vetting records</h3>
              <p className="mt-1 text-sm text-black">Each app reviewed, approved or replaced.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="clipboard-check" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Runbooks and review checklists</h3>
              <p className="mt-1 text-sm text-black">Admin procedures and periodic access reviews.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
