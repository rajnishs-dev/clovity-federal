import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// How we support federal mission outcomes
export default function HowWeSupportFederal() {
  return (
    <section id="about" className="relative overflow-hidden bg-sand py-16 lg:py-20">
      <div className="dot-grid absolute inset-y-0 right-0 w-1/2 opacity-60" />
      <div className="relative mx-auto grid max-w-site items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <Image
            src="/assets/img/home/modern-tech-office.jpg"
            alt="A modern open office with rows of staff working at laptops"
            className="aspect-[4/5] w-full rounded-lg object-cover shadow-lift sm:aspect-[5/5]"
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
          <div className="absolute -bottom-8 right-3 max-w-[280px] rounded-lg bg-white p-5 shadow-lift sm:-right-8 sm:p-6">
            <div className="mb-4 h-1 w-12 rounded-full bg-accent" />
            <p className="font-display text-lg font-semibold leading-snug text-ink-900">
              One accountable partner, from license to audit-ready records.
            </p>
            <p className="mt-2 text-sm text-black">No gaps between a reseller, an integrator and a help desk for an auditor to find.</p>
          </div>
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium leading-tight tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            How we support federal mission outcomes
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-black">
            Clovity Federal is the public sector practice of Clovity, Inc., an Atlassian Platinum Solution Partner. We bring that platform
            depth to agencies and the integrators who support them, and shape each engagement around your security review.
          </p>
          <ul className="mt-8 space-y-4">
            <li className="flex gap-4">
              <Icon name="shield-check" className="h-5 w-5 shrink-0" />{' '}
              <span>
                <strong className="font-semibold">Secure environment expertise.</strong>{' '}
                <span className="text-black">
                  Hardened configurations, least-privilege roles, single sign-on and audit logging, plus DevSecOps pipelines for sensitive
                  systems.
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <Icon name="clipboard-check" className="h-5 w-5 shrink-0" />{' '}
              <span>
                <strong className="font-semibold">Federal compliance experience.</strong>{' '}
                <span className="text-black">
                  We know FedRAMP, NIST SP 800-53 and agency security requirements, and we document settings by control family for your
                  ISSO.
                </span>
              </span>
            </li>
            <li className="flex gap-4">
              <Icon name="workflow" className="h-5 w-5 shrink-0" />{' '}
              <span>
                <strong className="font-semibold">Strategy through execution.</strong>{' '}
                <span className="text-black">
                  Assessment, build, tuning and license renewal with one team, so nothing is lost between handoffs.
                </span>
              </span>
            </li>
          </ul>
          <Link href="/about" className="card-link mt-10 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
            See how we work <Icon name="arrow-right" className="arrow h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
