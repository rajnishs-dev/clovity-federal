import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// How we execute: bento grid of photo cards; deliverables slide up on hover/focus (CSS only)
export default function HowWeExecuteStep() {
  return (
    <section className="relative overflow-hidden bg-sand py-16 lg:py-20">
      <div className="mx-auto w-full max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            How we execute, step by step
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-black">
            Every engagement follows the same path. Each step ends with security artifacts your contracting officer and ISSO can review.
          </p>
        </div>
        <div className="bento mt-12 lg:mt-14">
          <article className="bento-card lg:col-span-7" tabIndex="0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80"
              alt="Two people reviewing handwritten notes beside laptops"
              width={1400}
              height={934}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="bento-shade" aria-hidden="true" />
            <div className="bento-content">
              <div className="mt-auto">
                <h3 className="font-display text-2xl font-medium sm:text-3xl">Assess</h3>
                <p className="mt-2 max-w-lg text-white/80">
                  Find the gaps, friction points, compliance needs and dependencies across your instances, apps and integrations.
                </p>
                <ul className="bento-list">
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Data categorization review
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Permission and access audit
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    App and integration risk inventory
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="bento-card lg:col-span-5" tabIndex="0">
            <Image
              src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1100&q=80"
              alt="A hand tracing a system diagram on a planning board"
              width={1100}
              height={733}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="bento-shade" aria-hidden="true" />
            <div className="bento-content">
              <div className="mt-auto">
                <h3 className="font-display text-2xl font-medium sm:text-3xl">Architect</h3>
                <p className="mt-2 max-w-lg text-white/80">
                  Design a secure Atlassian setup that fits your mission workflows, with controls built in from the start.
                </p>
                <ul className="bento-list">
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Control mapping to NIST SP 800-53
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Identity and permission model
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Risk register for your ISSO
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="bento-card lg:col-span-5" tabIndex="0">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1100&q=80"
              alt="Engineers working at their desks with laptops and monitors"
              width={1100}
              height={733}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="bento-shade" aria-hidden="true" />
            <div className="bento-content">
              <div className="mt-auto">
                <h3 className="font-display text-2xl font-medium sm:text-3xl">Operationalize</h3>
                <p className="mt-2 max-w-lg text-white/80">
                  Deploy the platform, pipelines and controls, then move your data on a scheduled cutover.
                </p>
                <ul className="bento-list">
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Hardened configuration
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Configuration records and change log
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Cutover with rollback plan
                  </li>
                </ul>
              </div>
            </div>
          </article>
          <article className="bento-card lg:col-span-7" tabIndex="0">
            <Image
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80"
              alt="A laptop showing an analytics dashboard"
              width={1400}
              height={997}
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="bento-shade" aria-hidden="true" />
            <div className="bento-content">
              <div className="mt-auto">
                <h3 className="font-display text-2xl font-medium sm:text-3xl">Evolve</h3>
                <p className="mt-2 max-w-lg text-white/80">
                  Ongoing support that improves performance and resilience while keeping the platform inside its approved baseline.
                </p>
                <ul className="bento-list">
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Periodic access reviews
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Audit log checks for ConMon
                  </li>
                  <li>
                    <Icon name="check" className="h-4 w-4" />
                    Release and change tracking
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
