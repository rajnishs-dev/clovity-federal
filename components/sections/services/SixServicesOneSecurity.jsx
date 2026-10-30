import Link from 'next/link';
import Icon from '@/components/ui/Icon';

export default function SixServicesOneSecurity() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Six services, one security baseline
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            As an Atlassian Platinum Solution Partner, we cover the full life of your platform. Use one service or combine them. Each is
            scoped in writing and delivered against your agency's controls.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#migrations"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="compass" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Atlassian Consulting</h3>
            <p className="mt-3 leading-relaxed text-black">
              Advice on deployment choice, Data Center exit timing and the move to Government Cloud with your data under control.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Cloud upgrades <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </a>{' '}
          <a
            href="#professional"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="layers" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Jira Implementation</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira and Confluence set up to least privilege, with workflows and permissions designed around how your teams deliver.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Implementation <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </a>{' '}
          <Link
            href="/itsm"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="headset" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">ITSM Consulting</h3>
            <p className="mt-3 leading-relaxed text-black">
              Service desks on Jira Service Management, from request types and queues to approvals that leave an audit trail.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Service management <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <a
            href="#managed"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="life-buoy" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Managed Services</h3>
            <p className="mt-3 leading-relaxed text-black">
              Day-to-day administration, access reviews and release tracking that keep the platform inside its approved baseline.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Managed services <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </a>{' '}
          <a
            href="#licensing"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="file-badge" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">License Management</h3>
            <p className="mt-3 leading-relaxed text-black">
              Licenses sized to real usage, renewals planned ahead and quotes prepared for your contracting office.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Licensing <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </a>{' '}
          <a
            href="#professional"
            className="card-link group rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <span className="icon-tile">
              <Icon name="network" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Integration Services</h3>
            <p className="mt-3 leading-relaxed text-black">
              Documented connections to your identity provider, delivery pipelines and the systems your teams already trust.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Integrations <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
