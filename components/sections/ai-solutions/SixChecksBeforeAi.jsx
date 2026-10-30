import Icon from '@/components/ui/Icon';

export default function SixChecksBeforeAi() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Six checks before AI is switched on
          </h2>
          <p className="mt-5 text-lg text-black">
            Compliance with clear scope: Government Cloud's FedRAMP Moderate authorization covers Jira, Confluence and Jira Service
            Management. It does not extend to commercial cloud or Marketplace apps. So every AI feature or app gets the same six checks. If
            one fails, the feature stays off.
          </p>
        </div>
        {/* Timeline: the rule fills and each step lights up as you scroll (animations.js [data-timeline]) */}
        <ol data-timeline="" className="timeline mt-14 lg:mt-20">
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="clipboard-check" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Use case on the inventory</h3>
              <p className="mt-2 leading-relaxed text-black">
                Each use case is written down with its purpose, owner and users, ready for your agency AI inventory.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="badge-check" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Approval before enablement</h3>
              <p className="mt-2 leading-relaxed text-black">
                Your security and privacy leads sign off in writing. Nothing turns on by default.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="file-lock-2" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Data stays in bounds</h3>
              <p className="mt-2 leading-relaxed text-black">
                We trace where prompts and content go, and confirm the feature respects existing permissions and your authorization
                boundary.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="server" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Availability confirmed</h3>
              <p className="mt-2 leading-relaxed text-black">
                Features differ between commercial cloud, Government Cloud and Data Center. We confirm what exists in yours.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="users" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">A human signs off</h3>
              <p className="mt-2 leading-relaxed text-black">
                AI drafts. People review and decide. No output is published or acted on without a person in the loop.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="scroll-text" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Usage on the record</h3>
              <p className="mt-2 leading-relaxed text-black">
                We set up the logging the platform offers and document it, so AI use can be reviewed like any other activity.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
