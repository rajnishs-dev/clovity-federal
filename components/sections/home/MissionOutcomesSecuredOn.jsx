import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// Mission outcomes grid
export default function MissionOutcomesSecuredOn() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-4xl">
            <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
              Mission outcomes, secured on Atlassian
            </h2>
            <p className="mt-5 text-lg text-black">
              Mission readiness depends on tools that work together and hold up to review. Here is what a secured Atlassian platform makes
              possible.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex shrink-0 self-start items-center lg:self-auto gap-2 rounded-full border border-ink-900/15 px-6 py-3 font-semibold hover:bg-ink-900 hover:text-white"
          >
            All services <Icon name="arrow-up-right" className="h-4 w-4" />
          </Link>
        </div>
        <div data-tilt="" className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/government-cloud"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/secure-collab.png" alt="" className="w-14" width={56} height={56} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">Secure collaboration</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira, Confluence and JSM on Atlassian Government Cloud, set up inside its FedRAMP Moderate boundary with hardened permissions.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <Link
            href="/atlassian-solutions"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/mission-delivery.png" alt="" className="w-14" width={56} height={49} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">Mission delivery</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira and Bitbucket linked for DevSecOps, so requirements, code reviews and releases are traced from start to finish.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <Link
            href="/itsm"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/operational-coordination.png" alt="" className="w-14" width={56} height={57} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">Operational coordination</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira Service Management desks with an approval trail for every change, incident and access request.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <Link
            href="/services#professional"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/system-integration.png" alt="" className="w-14" width={56} height={55} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">System integration</h3>
            <p className="mt-3 leading-relaxed text-black">
              Atlassian connected to your identity provider and mission tools, with each data flow reviewed before it goes live.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <Link
            href="/atlassian-solutions"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/leadership-visibility.png" alt="" className="w-14" width={56} height={52} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">Leadership visibility</h3>
            <p className="mt-3 leading-relaxed text-black">
              Program and portfolio dashboards built on live Jira data, so leaders see status and risk without chasing spreadsheets.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>{' '}
          <Link
            href="/ai-solutions"
            className="card-link group relative overflow-hidden rounded-lg bg-white p-6 sm:p-8 shadow-card transition hover:-translate-y-1 hover:shadow-lift"
          >
            <Image src="/assets/img/icons/governed-ai.png" alt="" className="w-14" width={56} height={80} unoptimized />
            <h3 className="text-black mt-6 font-display text-xl font-medium">Governed AI</h3>
            <p className="mt-3 leading-relaxed text-black">
              AI features vary by deployment. We help you set data boundaries, usage rules and review steps before anything is switched on.
            </p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 group-hover:text-accent">
              Learn more <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
