import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Migration (IS Cloud Upgrades)
export default function DataCenterEndsIn() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
            alt="IT staff with laptops in a server room"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={801}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Data Center ends in March 2029. Plan the move now.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Atlassian is retiring Data Center. New-customer sales ended in March 2026, renewals for existing customers end in March 2028,
            and end of life follows in March 2029. Legacy Server is already out of support. We move you to cloud with data governance and
            security controls planned first, not patched in later.
          </p>
          <ul className="mt-8 grid gap-5">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Data governance first.</span> Decide what moves, what is archived and what your retention
                rules require before any data leaves.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Controls rebuilt, not assumed.</span> Permissions, groups and sign-in are re-mapped for the
                new site and documented.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Every app vetted.</span> Each app is checked for AGC availability and your security review,
                or replaced with native features.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Test runs first.</span> Rehearse with real data in a non-production site, then validate with
                user acceptance testing.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Rollback ready.</span> Your source instance stays intact until you confirm the new site,
                with a rollback plan on paper.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
