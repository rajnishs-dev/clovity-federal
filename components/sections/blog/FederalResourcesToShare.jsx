import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function FederalResourcesToShare() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Federal resources to share with your team
          </h2>
          <p className="mt-5 text-lg text-black">
            One-page overviews for program leads and contracting offices. Ask and we'll send the one you need.
          </p>
        </div>
        {/* Editorial rows: rules draw in and content rises on scroll (animations.js [data-rows]) */}
        <div data-rows="" className="rows mt-12 lg:mt-16">
          <div className="row-item">
            <span className="row-icon">
              <Icon name="workflow" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
                Enterprise workflow orchestration with Atlassian
              </h3>
              <p className="mt-2 font-medium text-ink-900">One flow from request to record.</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-black">
                How Jira, Confluence and Jira Service Management connect intake, approvals and records, with an audit trail at each step.
              </p>
            </div>
          </div>
          <div className="row-item">
            <span className="row-icon">
              <Icon name="headset" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">
                Support services for lean teams
              </h3>
              <p className="mt-2 font-medium text-ink-900">Tight budgets. High expectations. Limited resources.</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-black">
                Managed administration, access reviews and release tracking for teams without a full-time Atlassian admin.
              </p>
            </div>
          </div>
          <div className="row-item">
            <span className="row-icon">
              <Icon name="sparkles" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black row-title font-display text-2xl font-medium tracking-tight sm:text-3xl">Governed AI delivery</h3>
              <p className="mt-2 font-medium text-ink-900">Build faster. Scale smarter. Stay in bounds.</p>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-black">
                The checks we run before any AI feature is switched on, and the pilots we start with once it is approved.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-btn px-7 py-4 font-semibold text-white hover:bg-btn-dark"
          >
            Request a one-pager <Icon name="arrow-right" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
