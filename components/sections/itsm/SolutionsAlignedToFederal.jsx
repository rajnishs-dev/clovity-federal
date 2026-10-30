import Icon from '@/components/ui/Icon';

// Solutions aligned to federal challenges
export default function SolutionsAlignedToFederal() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Solutions aligned to federal challenges
          </h2>
          <p className="mt-5 text-lg text-black">
            Three service patterns we build on Jira Service Management. Each one starts with your policy and ends with a record you can show
            an auditor.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col rounded-lg bg-paper p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="landmark" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Acquisition modernization</h3>
            <p className="mt-2 font-semibold text-ink-900">Transparency, speed, control.</p>
            <p className="mt-3 leading-relaxed text-black">
              An intake desk for purchase requests, with stages for funding, review and contracting office approval. Requesters see where
              their request stands. Approvers see the full history before they sign.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-paper p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="building" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Workspace management</h3>
            <p className="mt-2 font-semibold text-ink-900">Where flexibility meets security.</p>
            <p className="mt-3 leading-relaxed text-black">
              Desk, room and space requests for hybrid teams, with facilities approval and physical access requests in the same flow.
              Security staff see who asked for access to which space, and when.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-paper p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="package" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Asset and license tracking</h3>
            <p className="mt-2 font-semibold text-ink-900">Fewer duplicate purchases. Fewer lapsed licenses.</p>
            <p className="mt-3 leading-relaxed text-black">
              Hardware and software requests checked against what you already own, with renewal reminders set by automation. Each assignment
              and return is logged, so the record is ready when an auditor asks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
