import Icon from '@/components/ui/Icon';

// How to buy
export default function FederalProcurementPartnership() {
  return (
    <section id="buy" className="scroll-mt-28 bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Federal procurement &amp; partnership
          </h2>
          <p className="mt-5 text-lg text-black">
            Clovity is an Atlassian Platinum Solution Partner. We work with your contracting office to find the acquisition route that fits
            your requirement, your security needs and your timeline. Three steps take you from request to contract.
          </p>
        </div>
        {/* Do not list contract vehicles here until each one is confirmed as current. */}
        {/* Timeline: the rule fills and each step lights up as you scroll (animations.js [data-timeline]) */}
        <ol data-timeline="" className="timeline mt-14 lg:mt-20">
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="clipboard-list" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Scope</h3>
              <p className="mt-2 leading-relaxed text-black">
                We define licenses, services, security requirements and outcomes with your program, IT and security leads.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="file-text" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Quote</h3>
              <p className="mt-2 leading-relaxed text-black">
                You receive a quote and statement of work formatted for your contracting office, with security deliverables spelled out.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="flag" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Award &amp; kickoff</h3>
              <p className="mt-2 leading-relaxed text-black">
                Once awarded, we hold a kickoff within days and start against the agreed plan.
              </p>
            </div>
          </li>
        </ol>
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {/* Registration identifiers: share values only on request; do not publish numbers here. */}
          <div className="rounded-lg bg-paper p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="landmark" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Registration details on request</h3>
            <p className="mt-2 text-black">
              Your contracting office can request our government registration data for market research or vendor setup.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>
                  <span className="block font-medium">SAM.gov registration</span>
                  <span className="text-sm text-black">Available on request</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>
                  <span className="block font-medium">UEI</span>
                  <span className="text-sm text-black">Available on request</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>
                  <span className="block font-medium">CAGE code</span>
                  <span className="text-sm text-black">Available on request</span>
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>
                  <span className="block font-medium">NAICS codes</span>
                  <span className="text-sm text-black">Available on request</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-paper p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="building-2" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">State and local buyers</h3>
            <p className="mt-2 text-black">
              State, county and city teams often buy directly or through cooperative contracts. We work with your procurement office to
              confirm which route fits your rules.
            </p>
            <p className="mt-4 text-black">
              We also plan around the requirements state and local systems answer to, such as CJIS and GovRAMP, and tell you plainly what
              each deployment option does and does not cover.
            </p>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-6 rounded-lg bg-ink-900 p-6 text-white sm:flex-row sm:p-10">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
            <Icon name="file-search" className="h-8 w-8 shrink-0 text-accent-light" />
            <p className="text-lg">
              Need to confirm contract vehicles, UEI or CAGE details?{' '}
              <span className="text-white/65">We'll send current company data and contract-vehicle details on request.</span>
            </p>
          </div>
          <a
            href="#contact-form"
            className="shrink-0 rounded-full bg-white px-6 py-3 font-semibold text-ink-900 hover:bg-btn hover:text-white"
          >
            Request details
          </a>
        </div>
      </div>
    </section>
  );
}
