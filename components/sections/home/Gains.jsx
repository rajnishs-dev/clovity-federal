import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// What our federal clients gain
export default function Gains() {
  return (
    <section data-gains="" className="bg-sand py-16 lg:py-20">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-0">
        <div className="lg:pr-12">
          <div className="lg:sticky lg:top-32">
            <h2 className="font-display text-3xl font-medium tracking-tight text-black sm:text-[2.75rem] sm:leading-[2.75rem]">
              What our federal clients gain
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-black">
              Four results we design every engagement to deliver, whether the job is a migration, a new service desk or an agency-wide
              rollout.
            </p>
            <Link
              href="/contact"
              className="mt-10 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-semibold text-ink-900 hover:text-accent"
            >
              Talk to our team <Icon name="arrow-right" className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <ol className="border-l border-steel-100">
          <li className="gain-step">
            <p className="font-display text-lg font-semibold text-accent">Visibility</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
              See work, requests and risk in one place.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black">
              One view across programs, built on live Jira and service desk data instead of status reports assembled by hand.
            </p>
            <p className="mt-6 text-sm text-black">
              <span className="eyebrow mr-2 text-xs text-ink-900">In practice</span>Dashboards your program and IT leads read from the same
              source.
            </p>
          </li>
          <li className="gain-step">
            <p className="font-display text-lg font-semibold text-accent">Control</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
              Governance built into the configuration.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black">
              Workflows, permissions and approvals set up to match how your agency already makes decisions, with each setting written down.
            </p>
            <p className="mt-6 text-sm text-black">
              <span className="eyebrow mr-2 text-xs text-ink-900">In practice</span>A configuration record your team can review and keep
              current.
            </p>
          </li>
          <li className="gain-step">
            <p className="font-display text-lg font-semibold text-accent">Security</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
              Access your assessor can follow.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black">
              Least-privilege access, SSO through your identity provider and audit logs that show who changed what, and when.
            </p>
            <p className="mt-6 text-sm text-black">
              <span className="eyebrow mr-2 text-xs text-ink-900">In practice</span>Settings mapped to the controls your ATO package asks
              about.
            </p>
          </li>
          <li className="gain-step">
            <p className="font-display text-lg font-semibold text-accent">Scalability</p>
            <h3 className="mt-3 font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
              Grow from one team to the whole agency.
            </h3>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-black">
              A platform designed so new teams, projects and service desks can join without reopening security gaps.
            </p>
            <p className="mt-6 text-sm text-black">
              <span className="eyebrow mr-2 text-xs text-ink-900">In practice</span>Templates and onboarding steps for each new team.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
