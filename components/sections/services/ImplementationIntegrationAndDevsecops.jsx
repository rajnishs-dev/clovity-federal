import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function ImplementationIntegrationAndDevsecops() {
  return (
    <section id="professional" className="scroll-mt-24 bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift lg:order-2">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Team planning on a whiteboard"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Implementation, integration and DevSecOps enablement
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            We implement Jira, Confluence and Jira Service Management to least privilege and connect them to the systems you already trust.
            For delivery teams, we link Jira and Bitbucket into a DevSecOps flow where security checks and release records sit next to the
            work. Every decision is written down for your assessors.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Hardened configuration baselines</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>SAML SSO and SCIM with your agency IdP</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Jira and Bitbucket pipeline traceability</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Workflow and permission design</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Configuration records mapped to controls</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Admin runbooks and handover</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
