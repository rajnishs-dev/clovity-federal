import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Shared responsibility
export default function ComplianceWithClearScope() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
            alt="Abstract digital security graphic"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={801}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Compliance with clear scope
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            An authorization covers a specific service, not a brand. Atlassian Government Cloud holds FedRAMP Moderate for Jira, Confluence
            and Jira Service Management. Atlassian's commercial cloud does not, and each Marketplace app is checked on its own. We set these
            lines at the start, so nobody assumes a control is covered when it isn't.
          </p>
          <ul className="mt-8 grid gap-5">
            <li className="flex gap-3">
              <Icon name="server" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Atlassian</span> runs the cloud service, its infrastructure and the FedRAMP authorization
                for Atlassian Government Cloud.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="landmark" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Your agency</span> owns the ATO, the risk decisions, data categorization and who gets
                access.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="settings-2" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Clovity Federal</span> configures the platform, documents each setting and maps it to the
                controls in your security plan.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="eye" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">All of us</span> share continuous monitoring. Atlassian watches the service. You and we
                watch access, configuration and change.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
