import Icon from '@/components/ui/Icon';

// Scope (EM Compliance With Clear Scope)
export default function ComplianceWithClearScope() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Compliance with clear scope
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Know the boundary before you plan inside it. This is the scope as Atlassian announced it in March 2025. A site on Atlassian's
            commercial cloud is not FedRAMP Moderate, and we will not call it that.
          </p>
        </div>
        {/* Verified Oct 2026: FedRAMP Moderate (Mar 2025) for Jira, Confluence, JSM. Recheck the FedRAMP Marketplace listing before launch. */}
        <div data-tilt="" className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-lift">
            <span className="icon-tile">
              <Icon name="badge-check" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-2xl font-medium">Inside the authorization</h3>
            <ul className="mt-5 grid gap-3 text-black">
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>FedRAMP Moderate authorization, granted March 2025 and listed on the FedRAMP Marketplace</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>Jira, Confluence and Jira Service Management</span>
              </li>
              <li className="flex gap-3">
                <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                <span>An environment run separately from Atlassian's commercial cloud</span>
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-lift">
            <span className="icon-tile">
              <Icon name="scan-search" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-2xl font-medium">Outside it, so check first</h3>
            <ul className="mt-5 grid gap-3 text-black">
              <li className="flex gap-3">
                <Icon name="circle-alert" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
                <span>Atlassian's commercial cloud sites</span>
              </li>
              <li className="flex gap-3">
                <Icon name="circle-alert" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
                <span>Marketplace apps. Each one has to be checked on its own.</span>
              </li>
              <li className="flex gap-3">
                <Icon name="circle-alert" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
                <span>
                  FedRAMP High and DoD IL5. As of the March 2025 announcement, these were goals, not granted. We'll tell you plainly where
                  AGC stands for your impact level.
                </span>
              </li>
              <li className="flex gap-3">
                <Icon name="circle-alert" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
                <span>AI features. These vary by deployment, so confirm what your site offers before you plan around them.</span>
              </li>
              <li className="flex gap-3">
                <Icon name="circle-alert" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
                <span>Your ATO. AGC's authorization supports it, but your agency still issues it.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
