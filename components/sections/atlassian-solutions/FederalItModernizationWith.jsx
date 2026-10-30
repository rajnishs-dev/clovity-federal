import Icon from '@/components/ui/Icon';

// Federal IT modernization (EM)
export default function FederalItModernizationWith() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Federal IT modernization with Atlassian
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">Three places agencies modernize first.</p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="layers" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Project and program management</h3>
            <p className="mt-3 leading-relaxed text-black">
              Portfolio plans, boards and status reports drawn from live Jira data instead of spreadsheets passed by email.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="users" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Collaboration and knowledge management</h3>
            <p className="mt-3 leading-relaxed text-black">
              Confluence as one home for policies, SOPs and decisions, linked to the Jira work they govern.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="headset" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Modern federal IT service management</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira Service Management replaces email queues and legacy service tools with request types, SLAs and a self-service portal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
