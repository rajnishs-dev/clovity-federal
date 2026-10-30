import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Sample posts: replace titles, links and images with published articles
export default function OurLatestGuidesAnd() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Our latest guides and articles
          </h2>
          <p className="mt-5 text-lg text-black">Short reads on the questions that come up in security reviews, migrations and audits.</p>
        </div>
        <a href="#" className="group mt-14 grid items-center gap-10 lg:grid-cols-2">
          <div data-clip="" className="overflow-hidden rounded-lg">
            <Image
              src="/assets/img/us-capitol-clouds.jpg"
              alt="The U.S. Capitol under white clouds"
              className="aspect-[16/10] w-full object-cover"
              width={1920}
              height={994}
              sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div>
            <h3 className="text-black font-display text-3xl font-medium tracking-tight group-hover:text-accent sm:text-4xl">
              Featured guide: Data Center ends in March 2029. Start your exit plan now
            </h3>
            <p className="mt-5 text-lg text-black">
              Renewal windows close before the end-of-life date does. How to pick a target, line up your security documentation and move
              without leaving gaps in your authorization package.
            </p>
            <span className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
              Read the guide <Icon name="arrow-right" className="arrow h-4 w-4" />
            </span>
          </div>
        </a>
        <div className="mt-20 flex flex-wrap gap-2" role="list">
          <span className="rounded-full bg-ink-900 px-4 py-2 text-sm font-medium text-white">All</span>{' '}
          <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium">Guides</span>{' '}
          <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium">Checklists</span>{' '}
          <span className="rounded-full bg-sand px-4 py-2 text-sm font-medium">Articles</span>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80"
                alt="Network switch with patch cables"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={600}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Guide</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              Identity first: SSO, SCIM and PIV/CAC through your agency IdP
            </h3>
            <p className="mt-2 text-black">How to route sign-in and user provisioning through the identity provider you already trust.</p>
          </a>{' '}
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80"
                alt="Abstract digital security graphic"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={601}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Checklist</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              Is Atlassian Government Cloud right for your data?
            </h3>
            <p className="mt-2 text-black">
              What the FedRAMP Moderate authorization covers, what it doesn't, and what to settle before you commit.
            </p>
          </a>{' '}
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                alt="Colleagues celebrating at a desk"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={600}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Article</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              From admin screen to control family: mapping Atlassian to NIST SP 800-53
            </h3>
            <p className="mt-2 text-black">Which settings speak to access control, audit, configuration management and identification.</p>
          </a>{' '}
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"
                alt="Analytics dashboard on a laptop"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={600}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Guide</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              Audit logs your assessor will actually accept
            </h3>
            <p className="mt-2 text-black">Capturing, retaining and exporting evidence to support continuous monitoring.</p>
          </a>{' '}
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"
                alt="AI illustration"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={506}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Article</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              Governed AI in Jira: set the rules before you flip the switch
            </h3>
            <p className="mt-2 text-black">Data boundaries, approvals and records questions to settle with your security team first.</p>
          </a>{' '}
          <a href="#" className="card-link group">
            <div data-clip="" className="overflow-hidden rounded-lg">
              <Image
                src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?auto=format&fit=crop&w=900&q=80"
                alt="Curved shelves inside a library"
                className="aspect-[16/10] w-full object-cover"
                width={900}
                height={574}
                sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <p className="eyebrow mt-5 text-accent">Checklist</p>
            <h3 className="text-black mt-2 font-display text-xl font-medium group-hover:text-accent">
              Vetting Marketplace apps for Government Cloud
            </h3>
            <p className="mt-2 text-black">
              The AGC authorization does not cover apps. How to check each one on its own before it touches your data.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
