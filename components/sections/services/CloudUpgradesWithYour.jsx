import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function CloudUpgradesWithYour() {
  return (
    <section id="migrations" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Data center server racks"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={673}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Cloud upgrades with your data under control
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Atlassian Data Center reaches end of life in March 2029, and legacy Server is already past end of support. We move you from Data
            Center to cloud with data governance and security controls planned in from the first inventory. Every export, copy and import is
            logged, rehearsed and signed off before production cutover.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Inventory, cleanup and data classification</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Logged handling of exports and backups</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Rehearsal migrations and UAT</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Each app checked before it moves</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Permissions rebuilt, not copied blindly</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Cutover runbook and hypercare</span>
            </li>
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-black">
            Government Cloud's FedRAMP Moderate authorization covers Jira, Confluence and Jira Service Management. It does not extend to
            Atlassian's commercial cloud or to Marketplace apps, so we check each app you rely on separately.
          </p>
        </div>
      </div>
    </section>
  );
}
