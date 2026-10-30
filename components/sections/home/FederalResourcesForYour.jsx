import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// Resources
export default function FederalResourcesForYour() {
  return (
    <section className="bg-sand py-16 lg:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem] max-w-3xl">
              Federal resources for your next security review
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
            All resources <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          <Link href="/blog" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80"
                alt="Abstract digital security graphic"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                width={800}
                height={534}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3 className="text-black mt-5 font-display text-xl font-medium group-hover:text-accent">
              Is Atlassian Government Cloud right for your data?
            </h3>
            <p className="mt-2 text-black">A short readiness checklist for program and security leads.</p>
          </Link>{' '}
          <Link href="/blog" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80"
                alt="Network switch with patch cables"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                width={800}
                height={533}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3 className="text-black mt-5 font-display text-xl font-medium group-hover:text-accent">
              From admin screen to control family: mapping Atlassian to NIST SP 800-53
            </h3>
            <p className="mt-2 text-black">Which settings your assessor will ask about, and how to document them.</p>
          </Link>{' '}
          <Link href="/blog" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                alt="Colleagues reviewing work at a desk"
                className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
                width={800}
                height={533}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <h3 className="text-black mt-5 font-display text-xl font-medium group-hover:text-accent">
              Vetting Marketplace apps for Government Cloud
            </h3>
            <p className="mt-2 text-black">Why AGC's authorization stops at the app, and what to check before you install one.</p>
          </Link>
        </div>
      </div>
    </section>
  );
}
