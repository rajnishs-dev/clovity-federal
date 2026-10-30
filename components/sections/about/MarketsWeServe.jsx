import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function MarketsWeServe() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Markets we serve
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Each sector answers to different rules and buys in a different way. We plan around both from day one.
          </p>
        </div>
        {/* Spotlight: the sticky panel swaps to the market at the middle of the screen (animations.js [data-spot]) */}
        <div data-spot="" className="spot mt-12 lg:mt-16">
          <div className="spot-list space-y-8 lg:space-y-0">
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm bg-white">
                <Icon name="building-2" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Federal civilian</h3>
                <p className="mt-2 leading-relaxed text-black">
                  IT modernization, program management and service desks on Jira, Confluence and JSM. We design around FISMA, NIST SP 800-53
                  and FedRAMP via Atlassian Government Cloud.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm bg-white">
                <Icon name="shield" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Defense</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Software delivery and acquisition programs using Jira and Bitbucket for DevSecOps. We'll tell you plainly where AGC stands
                  for your impact level.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm bg-white">
                <Icon name="map-pin" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">State &amp; local</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Resident services, public works projects and cross-department work. We plan around CJIS, StateRAMP or GovRAMP and state
                  privacy rules where they apply.
                </p>
              </div>
            </article>
            <article className="spot-item">
              <span className="icon-tile icon-tile-sm bg-white">
                <Icon name="handshake" className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-black font-display text-2xl font-medium tracking-tight">Prime contractors</h3>
                <p className="mt-2 leading-relaxed text-black">
                  Integrators delivering for agencies and handling CUI. We help you meet NIST SP 800-171 and CMMC expectations in how
                  Atlassian is set up.
                </p>
              </div>
            </article>
          </div>
          <div className="spot-media" aria-hidden="true">
            <div className="spot-frame">
              <div className="spot-panel is-active">
                <Image
                  src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&w=1100&q=80"
                  className="spot-panel-img"
                  alt=""
                  width={1100}
                  height={732}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <p className="eyebrow text-accent-light">Market</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Federal civilian</p>
                <p className="mt-4 text-white/70">FISMA &middot; NIST SP 800-53 &middot; FedRAMP Moderate via AGC</p>
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
                <p className="eyebrow text-accent-light">Market</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Defense</p>
                <p className="mt-4 text-white/70">DevSecOps &middot; Jira and Bitbucket &middot; Impact levels stated plainly</p>
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
                <p className="eyebrow text-accent-light">Market</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">State &amp; local</p>
                <p className="mt-4 text-white/70">CJIS &middot; StateRAMP or GovRAMP &middot; State privacy rules</p>
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
                <p className="eyebrow text-accent-light">Market</p>
                <p className="mt-3 font-display text-4xl font-medium tracking-tight">Prime contractors</p>
                <p className="mt-4 text-white/70">CUI &middot; NIST SP 800-171 &middot; CMMC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
