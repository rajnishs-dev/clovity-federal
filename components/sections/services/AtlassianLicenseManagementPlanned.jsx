import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function AtlassianLicenseManagementPlanned() {
  return (
    <section id="licensing" className="scroll-mt-24 bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
            alt="Two people shaking hands across a desk"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={801}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Atlassian license management, planned ahead
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Existing-customer Data Center renewals end in March 2028. We help you compare Government Cloud with staying on Data Center for
            now, size licenses to real usage and line up renewals so no deadline forces a rushed choice.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>License right-sizing</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Government Cloud vs Data Center analysis</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Renewal and co-term planning</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Quotes for your contracting office</span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-black">
            For procurement, we work with your contracting office and can share our UEI, CAGE code and current contract-vehicle details on
            request.
          </p>
        </div>
      </div>
    </section>
  );
}
