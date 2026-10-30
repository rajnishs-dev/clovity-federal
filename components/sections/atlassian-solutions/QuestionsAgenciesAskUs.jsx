import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// FAQ (EM FAQ, adapted)
export default function QuestionsAgenciesAskUs() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Questions agencies ask us
          </h2>
          <p className="mt-5 text-lg text-black">Straight answers on scope, products and how we work. Ask us anything else directly.</p>
          <Link href="/contact" className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
            Ask our federal team <Icon name="arrow-right" className="arrow h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">What are Atlassian federal solutions?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              Atlassian products such as Jira, Confluence and Jira Service Management, set up to meet government needs for access control,
              audit logging, records and procurement. For many agencies that means Atlassian Government Cloud. Others run Data Center while
              they plan their move.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">How can Atlassian support U.S. federal agencies?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              It gives program, IT and security teams one platform for planning, documentation and service delivery. When it is configured
              well, the same platform also keeps the records your assessors ask for: who had access, who approved a change and when.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">Which Atlassian products fit federal IT modernization?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              Jira for projects and programs, Confluence for policies and knowledge, and Jira Service Management for IT service delivery.
              These three run in Atlassian Government Cloud, inside its FedRAMP Moderate scope. For Bitbucket, confirm the hosting option
              for your data first.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">What is Atlassian Government Cloud?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              A cloud for U.S. government run separately from Atlassian's commercial cloud. It received FedRAMP Moderate authorization in
              March 2025 for Jira, Confluence and Jira Service Management. That authorization does not cover the commercial cloud or
              Marketplace apps. As of the March 2025 announcement, FedRAMP High and DoD IL5 were goals, not granted.{' '}
              <Link href="/government-cloud" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                More on Government Cloud
              </Link>
              .
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">Can Jira be used for federal project management?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              Yes. Jira supports Agile and traditional delivery, portfolio planning and requirements traceability. We add project roles,
              required approvals and change history so the work holds up to review.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">How does Jira Service Management support federal ITSM?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              It covers requests, incidents, problems and changes in one service desk, with a self-service portal and SLAs. Approvals are
              captured on each record, so access and change decisions are easy to trace.{' '}
              <Link href="/itsm" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                See our ITSM work
              </Link>
              .
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">Can Atlassian help modernize legacy federal workflows?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              Yes. We map how work runs today, keep what your rules require and rebuild the rest in Jira, Confluence or JSM. Legacy Server
              is already out of support and Data Center reaches end of life in March 2029, so many agencies pair this with a migration.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">Does Clovity hold an ATO or FedRAMP authorization?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              No. Atlassian holds the service authorization for Government Cloud, and your agency issues its own ATO. Our part is to
              configure the platform and document that configuration so your security team can review it.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">How do we buy through Clovity?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              We work with your contracting office on the route that suits your agency. We can share our UEI, CAGE and current
              contract-vehicle details on request.
            </p>
          </details>
          <details className="m-group py-2">
            <summary>
              <span className="pr-6 font-display text-lg font-medium">What Atlassian services does Clovity provide?</span>{' '}
              <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
            </summary>
            <p className="pb-5 pr-8 leading-relaxed text-black">
              Government Cloud readiness and setup, migrations, security configuration and documentation, ITSM on Jira Service Management,
              licensing, managed services, professional services, training and governed AI.{' '}
              <Link href="/services" className="font-semibold text-ink-900 underline-offset-2 hover:underline">
                All services
              </Link>
              .
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}
