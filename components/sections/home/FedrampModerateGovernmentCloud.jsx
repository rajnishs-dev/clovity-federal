import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { optimizedImage } from '@/lib/media';

// Government Cloud
export default function FedrampModerateGovernmentCloud() {
  return (
    <section id="government-cloud" className="relative overflow-hidden bg-sand py-16 lg:py-20">
      <div className="dot-grid absolute inset-0 opacity-60" />
      <div className="relative mx-auto grid max-w-site gap-16 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="text-black font-display text-3xl font-medium leading-tight tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            FedRAMP Moderate Government Cloud, with the scope spelled out
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Atlassian Government Cloud (AGC) received FedRAMP Moderate authorization in March 2025 and is listed on the FedRAMP Marketplace.
            It covers Jira, Confluence and Jira Service Management. The authorization does not extend to Atlassian's commercial cloud or to
            Marketplace apps, so each app is checked on its own.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            Need a higher impact level? We'll tell you plainly where AGC stands for yours.
          </p>
          {/* Verified Oct 2026: FedRAMP Moderate (Mar 2025) for Jira, Confluence, JSM. High and IL5 were future goals, not granted. Recheck the FedRAMP Marketplace listing before launch. */}
          <Link
            href="/government-cloud"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-btn px-7 py-4 font-semibold text-white transition hover:bg-btn-dark"
          >
            Plan your AGC move <Icon name="arrow-right" className="h-5 w-5" />
          </Link>
        </div>
        <div className="lg:col-span-7">
          {/* Mixkit free-license clip 23219: data center hallway */}
          <div className="relative mb-6 overflow-hidden rounded-lg shadow-lift">
            <video
              className="aspect-[16/8] w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={optimizedImage('/assets/img/home/data-server-video-poster.jpg')}
            >
              <source src="/assets/videos/data-servers.mp4" type="video/mp4" />
            </video>
            <span className="absolute bottom-4 left-4 hidden rounded-full bg-white/90 sm:inline-block px-4 py-2 text-sm font-semibold text-ink-900">
              Run separately from Atlassian's commercial cloud
            </span>
          </div>
          <div className="grid auto-rows-fr gap-5 sm:grid-cols-2">
            <div className="rounded-lg bg-white p-7 shadow-card">
              <h3 className="text-black font-display text-lg font-medium">Secure cloud collaboration</h3>
              <p className="mt-2 text-black">
                Jira and Confluence spaces set up with permission schemes and audit settings your security team can review.
              </p>
            </div>
            <div className="rounded-lg bg-white p-7 shadow-card">
              <h3 className="text-black font-display text-lg font-medium">Government IT service delivery</h3>
              <p className="mt-2 text-black">
                Jira Service Management portals, queues and approvals configured inside the authorized boundary.
              </p>
            </div>
            <div className="rounded-lg bg-white p-7 shadow-card">
              <h3 className="text-black font-display text-lg font-medium">Governance and administration</h3>
              <p className="mt-2 text-black">
                Admin roles, SSO through your agency identity provider and configuration records for each setting.
              </p>
            </div>
            <div className="rounded-lg bg-white p-7 shadow-card">
              <h3 className="text-black font-display text-lg font-medium">App vetting</h3>
              <p className="mt-2 text-black">
                Every Marketplace app reviewed for Government Cloud availability, data access and your policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
