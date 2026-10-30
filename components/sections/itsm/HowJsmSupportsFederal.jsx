import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Six JSM capabilities mapped to controls
export default function HowJsmSupportsFederal() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            How JSM supports federal ITSM
          </h2>
          <p className="mt-5 text-lg text-black">
            Six capabilities, each designed around a NIST SP 800-53 Rev. 5 control family. We write down how each one supports the control,
            so the configuration and the paperwork match.
          </p>
        </div>
        {/* Spotlight: the sticky panel swaps to the item at the middle of the screen (animations.js [data-spot]) */}
        <div data-spot="" className="spot mt-12 lg:mt-16">
          <div className="spot-list space-y-8 lg:space-y-0">
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="siren" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Incidents</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Severity rules, escalation paths and post-incident reviews that support your incident response (IR) procedures.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="inbox" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Service requests</h3>
                <p className="mt-2 leading-relaxed text-black">
                  One portal with forms that collect the right details up front and route each request to a named owner. Every step is
                  logged for audit and accountability (AU).
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="git-pull-request" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Changes</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Risk-based approvals, a change calendar and a recorded decision for every change. Built to support configuration
                  management (CM) evidence.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="server" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Asset records</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Hardware and software records tied to the tickets that change them, to help you meet inventory requirements under CM. We
                  confirm which asset features your deployment includes before we design around them.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="book-lock" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Knowledge</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Self-service articles for staff, restricted Confluence spaces for internal runbooks. Permissions decide who sees what, in
                  line with access control (AC).
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm">
                <Icon name="key-round" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Security requests</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Account, access and exception requests in one logged flow: request, approve, provision, review. Maps to access control
                  (AC) and periodic account reviews.
                </p>
              </div>
            </article>
          </div>
          <div className="spot-media" aria-hidden="true">
            <div className="spot-frame">
              <div className="spot-panel is-active">
                <Image
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={733}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Incidents</p>
              </div>
              <div className="spot-panel">
                <Image
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={733}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Service requests</p>
              </div>
              <div className="spot-panel">
                <Image
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={733}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Changes</p>
              </div>
              <div className="spot-panel">
                <Image
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={617}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Asset records</p>
              </div>
              <div className="spot-panel">
                <Image
                  src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={701}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Knowledge</p>
              </div>
              <div className="spot-panel">
                <Image
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={734}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">JSM capability</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Security requests</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
