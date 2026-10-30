import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// Impact areas: tabs
export default function WhereWeDeliverMeasurable() {
  return (
    <section className="bg-white py-16 lg:py-20" data-tabs="">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto max-w-2xl text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Where we deliver measurable impact
          </h2>
          <p className="mt-5 text-lg text-black">Five areas where a secured Atlassian platform changes how government teams work.</p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 lg:inline-flex lg:gap-1 lg:rounded-full lg:bg-sand lg:p-1.5" role="tablist">
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="true"
              data-tab="itsm"
            >
              IT Service Management
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="cloud"
            >
              Cloud Upgrades
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="devsecops"
            >
              DevSecOps
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="agility"
            >
              Organizational Agility
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="admin"
            >
              Platform Administration
            </button>
          </div>
        </div>
        <div className="mt-14">
          <div data-panel="itsm" className="grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/home/team-itsm.jpg"
              alt="IT professionals with laptops in a server room"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">
                Retire the legacy help desk, keep the audit trail
              </h3>
              <p className="mt-4 text-lg text-black">
                Replace aging ticketing tools and email approvals with Jira Service Management workflows that record who asked, who approved
                and when.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Legacy tool replacement
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Change and access approvals
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Workflow and process design
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Audit-ready SLA reports
                </li>
              </ul>
              <Link href="/itsm" className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
                ITSM on Jira Service Management <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
          <div data-panel="cloud" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/home/cloud-upgrades.jpg"
              alt="Server racks with network cabling"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">
                Leave Data Center before March 2029, controls intact
              </h3>
              <p className="mt-4 text-lg text-black">
                Atlassian Data Center reaches end of life in March 2029. We move legacy Server and Data Center instances to the right cloud
                on a tested, documented plan with data governance in place.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Target platform fit check
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Data cleanup and governance
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Test migrations and UAT
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Cutover with rollback plan
                </li>
              </ul>
              <Link
                href="/services#migrations"
                className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent"
              >
                Migration services <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
          <div data-panel="devsecops" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/home/devsecops-home.jpg"
              alt="Analytics dashboard on a laptop screen"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1600}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">
                From requirement to release, nothing unaccounted for
              </h3>
              <p className="mt-4 text-lg text-black">
                Link requirements, code changes, reviews and releases in Jira and Bitbucket, with hardened pipelines so every change to a
                mission system has a traceable history.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Requirements traceability
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Branch and merge controls
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Code review history
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Release records
                </li>
              </ul>
              <Link
                href="/atlassian-solutions"
                className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent"
              >
                Atlassian solutions <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
          <div data-panel="agility" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/home/organization-agility.jpg"
              alt="Colleagues planning work in a meeting"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1600}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Scale delivery across distributed teams</h3>
              <p className="mt-4 text-lg text-black">
                Shared Jira and Confluence practices that let program offices, contractors and field teams plan and report the same way,
                with access set by role.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Standard project templates
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Cross-team planning
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Role-based access
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Role-based training
                </li>
              </ul>
              <Link
                href="/services#training"
                className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent"
              >
                Training and enablement <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
          <div data-panel="admin" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/home/platform-admin.jpg"
              alt="Team collaborating at laptops"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1600}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">
                Day-to-day administration that stays inside the baseline
              </h3>
              <p className="mt-4 text-lg text-black">
                Experienced Atlassian administrators who run the platform for you and give strategic guidance, keeping every change inside
                your approved configuration.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Periodic access reviews
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Audit log checks for ConMon
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Release and change tracking
                </li>
                <li className="flex items-center gap-3">
                  <Icon name="check-circle-2" className="h-5 w-5 text-teal-600" />
                  Platform roadmap advice
                </li>
              </ul>
              <Link
                href="/services#managed"
                className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent"
              >
                Managed services <Icon name="arrow-right" className="arrow h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
