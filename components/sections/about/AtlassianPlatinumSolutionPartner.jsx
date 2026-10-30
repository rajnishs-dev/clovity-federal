import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function AtlassianPlatinumSolutionPartner() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
            alt="A team collaborating around laptops"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Atlassian Platinum Solution Partner
          </h2>
          <p className="mt-4 font-display text-xl font-medium text-ink-900">
            Collaborative development platforms for Agile and DevSecOps teams
          </p>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Clovity holds Atlassian's Platinum Solution Partner tier and builds apps for the Atlassian Marketplace. We implement and support
            Jira, Confluence, Jira Service Management and Bitbucket for teams that plan, build and run government systems.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-black">
            The roles stay clear. Atlassian owns the service authorization. Your agency owns its ATO. We configure the platform and document
            it so your assessors can trace each setting to a control.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Jira and Confluence for Agile delivery</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Bitbucket and Jira for DevSecOps</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Jira Service Management for ITSM</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Government Cloud setup and documentation</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
