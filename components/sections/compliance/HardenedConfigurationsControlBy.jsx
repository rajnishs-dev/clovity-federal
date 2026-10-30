import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Control families mapped to platform configuration (tabs)
export default function HardenedConfigurationsControlBy() {
  return (
    <section className="bg-white py-16 lg:py-24" data-tabs="">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Hardened configurations, control by control
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            We build controls in from the first change, not the week before an audit. Four NIST SP 800-53 control families carry most of the
            weight in an Atlassian boundary. Here is how each one maps to the platform.
          </p>
        </div>
        <div className="mt-12 flex justify-center">
          <div className="flex flex-wrap justify-center gap-2 lg:inline-flex lg:gap-1 lg:rounded-full lg:bg-sand lg:p-1.5" role="tablist">
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="true"
              data-tab="ac"
            >
              AC &middot; Access control
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="au"
            >
              AU &middot; Audit
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="cm"
            >
              CM &middot; Configuration
            </button>{' '}
            <button
              className="tab-btn rounded-full bg-sand px-5 py-2.5 text-sm font-semibold transition lg:bg-transparent"
              role="tab"
              aria-selected="false"
              data-tab="ia"
            >
              IA &middot; Identity
            </button>
          </div>
        </div>
        <div className="mt-14">
          <div data-panel="ac" className="grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/compliance/access-control.jpg"
              alt="People at a laptop with a digital overlay of user icons and highlighted groups"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Least privilege, by design</h3>
              <p className="mt-4 text-lg text-black">
                Access is granted through groups and roles, never one person at a time. Admin power is split so no single account holds
                everything.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-ink-900/10 pt-8 sm:grid-cols-2">
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Jira permission schemes and project roles
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Confluence space permissions and restrictions
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Organization and product admin roles kept separate
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  IP allowlisting where your plan supports it
                </li>
              </ul>
            </div>
          </div>
          <div data-panel="au" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/compliance/au-audit.jpg"
              alt="Two people reviewing printed charts and reports at a desk"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1067}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">A trail your auditors can follow</h3>
              <p className="mt-4 text-lg text-black">
                Audit logs only help if someone keeps them and reads them. We set up both halves: retention and review.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-ink-900/10 pt-8 sm:grid-cols-2">
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Organization and product audit logs turned on and scoped
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Log retention matched to your policy
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Regular export to your log management or SIEM
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />A written review cadence with named owners
                </li>
              </ul>
            </div>
          </div>
          <div data-panel="cm" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/compliance/cm-configuration.jpg"
              alt="A person at a laptop with a project timeline overlay showing staged changes"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1000}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Change that ships with its controls</h3>
              <p className="mt-4 text-lg text-black">
                We record the baseline on day one. After that, every change follows the same approval path. Delivery keeps moving, and drift
                shows up in a review, not an incident.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-ink-900/10 pt-8 sm:grid-cols-2">
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Documented configuration baseline
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Change log for schemes, workflows and settings
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Vetting before any Marketplace app is installed
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Data residency documented for your plan and hosting
                </li>
              </ul>
            </div>
          </div>
          <div data-panel="ia" className="hidden grid items-center gap-12 lg:grid-cols-2">
            <Image
              src="/assets/img/compliance/ia-identity.jpg"
              alt="A person signing in on a phone login screen"
              className="aspect-[4/3] w-full rounded-lg object-cover shadow-lift"
              width={1600}
              height={1068}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div>
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Your identity provider stays in charge</h3>
              <p className="mt-4 text-lg text-black">
                Users sign in the way your agency already trusts. When someone leaves, their access goes with them.
              </p>
              <ul className="mt-8 grid gap-4 border-t border-ink-900/10 pt-8 sm:grid-cols-2">
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  SAML single sign-on through your agency IdP
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  PIV/CAC sign-in handled by your IdP
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  SCIM provisioning and deprovisioning with Atlassian Guard
                </li>
                <li className="flex gap-3">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  Authentication policies for managed accounts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
