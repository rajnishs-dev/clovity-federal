import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Method: Assess / Architect / Operationalize / Evolve, applied to ATO support
export default function HowWeSupportYour() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="mx-auto flex w-full max-w-site flex-col justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-end">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            How we support your ATO
          </h2>
          <p className="mt-5 text-lg text-black">
            Four phases. Each one ends with artifacts your ISSO and authorizing official can review.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-site lg:mt-14">
        <ol className="grid gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
          <li className="hpanel">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/img/compliance/assess.jpg"
                alt="Consultants reviewing documents against a screen"
                className="h-44 w-full object-cover"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Assess</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
                <Icon name="search" className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-3 text-black">Find your compliance needs, gaps and dependencies before anything is built.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Data categorization and impact level fit
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Permission and access audit
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                App and integration risk inventory
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/img/compliance/architect2.jpg"
                alt="Engineer at a workstation in a data center"
                className="h-44 w-full object-cover"
                width={1200}
                height={800}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Architect</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
                <Icon name="layers" className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-3 text-black">Design the boundary and its controls around how your mission teams actually work.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Control mapping to NIST SP 800-53
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Hosting option matched to your boundary
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Risk register for your ISSO
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/img/compliance/operationalize.jpg"
                alt="Team reviewing a dashboard on a monitor"
                className="h-44 w-full object-cover"
                width={1200}
                height={633}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Operationalize</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
                <Icon name="rocket" className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-3 text-black">Deploy the platform and its controls, and capture evidence as the work happens.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Hardened configuration and test runs
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Configuration records and change log
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Evidence package for your SSP
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <div className="overflow-hidden rounded-lg">
              <Image
                src="/assets/img/compliance/evolve2.jpg"
                alt="Two engineers reviewing code in a server room"
                className="h-44 w-full object-cover"
                width={1200}
                height={675}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-6 flex items-start justify-between gap-4">
              <h3 className="text-black font-display text-2xl font-medium sm:text-3xl">Evolve</h3>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
                <Icon name="refresh-cw" className="h-6 w-6" />
              </span>
            </div>
            <p className="mt-3 text-black">Ongoing support that keeps the platform inside its approved baseline as it grows.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Periodic access reviews
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Audit log checks for ConMon
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Release and change tracking
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
