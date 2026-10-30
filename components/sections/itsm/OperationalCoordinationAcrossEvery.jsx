import Icon from '@/components/ui/Icon';

// Enterprise service management desks
export default function OperationalCoordinationAcrossEvery() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Operational coordination across every desk
          </h2>
          <p className="mt-5 text-lg text-black">
            Government service delivery goes beyond IT. Each desk gets its own project, permission scheme and request types. Staff see one
            portal. Agents see only their own queue.
          </p>
        </div>
        <div data-slide="" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="users" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">HR service desk</h3>
              <p className="mt-1 text-sm text-black">Onboarding, offboarding and personnel questions, visible only to HR agents.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="building-2" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Facilities</h3>
              <p className="mt-1 text-sm text-black">Space, maintenance and physical access requests with a clear owner.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="shield-check" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Security office</h3>
              <p className="mt-1 text-sm text-black">Badge, account and exception requests routed to security staff and logged.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="scale" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">FOIA &amp; records intake</h3>
              <p className="mt-1 text-sm text-black">
                Intake dates captured on arrival, with retention planned around your NARA records schedule.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="receipt" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Finance and procurement</h3>
              <p className="mt-1 text-sm text-black">Purchase and invoice requests with approvals on the record.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="landmark" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black font-display font-medium">Mission support</h3>
              <p className="mt-1 text-sm text-black">Program and field queues kept apart from back-office desks.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
