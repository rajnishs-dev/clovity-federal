import Link from 'next/link';
import Icon from '@/components/ui/Icon';

const linkClass = 'font-semibold text-ink-900 underline-offset-2 hover:underline';

// Questions about the company itself. Product, Government Cloud, ATO and buying questions live on /atlassian-solutions.
const FAQS = [
  {
    q: 'What is Clovity Federal?',
    a: 'The public sector practice of Clovity, Inc., an Atlassian Platinum Solution Partner. We set up, migrate, document and support Jira, Confluence, Jira Service Management and Bitbucket for government teams and the contractors who work with them.',
  },
  {
    q: 'What does Platinum Solution Partner mean for our agency?',
    a: "Platinum is the top tier of Atlassian's partner program. Clovity also builds apps for the Atlassian Marketplace, so the same team that configures your platform knows how the products work underneath.",
  },
  {
    q: 'Who do you work with?',
    a: 'Federal civilian agencies, defense programs, state and local governments, and prime contractors delivering for them. Each answers to different rules, so we plan around yours from the first conversation.',
  },
  {
    q: 'Can you work under a prime contractor?',
    a: 'Yes. We team on the Atlassian scope of larger programs, covering deployment, migration and service desks, and share UEI and CAGE details on request.',
  },
  {
    q: 'Do you only work with Atlassian Government Cloud?',
    a: 'No. Many agencies still run Data Center, which reaches end of life in March 2029. We support it while you plan the move, and state and local teams often use cloud or Data Center depending on their data.',
  },
  {
    q: 'Will you tell us if something does not fit?',
    a: "Yes, and before you buy. If Government Cloud doesn't cover your impact level, or an app you rely on isn't available there, you'll hear it from us first.",
  },
  {
    q: 'Can you take over an Atlassian setup another team built?',
    a: 'Yes. We start with an assessment of your instances, apps, integrations and permissions, then fix the gaps and document what is there before we change anything.',
  },
];

export default function AboutFaq() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
          <h2 className="font-display text-3xl font-medium tracking-tight text-black sm:text-[2.75rem] sm:leading-[2.75rem]">
            Common questions about Clovity Federal
          </h2>
          <p className="mt-5 text-lg text-black">
            Who we are, who we work with and what to expect. For product and procurement questions, see{' '}
            <Link href="/atlassian-solutions" className={linkClass}>
              Atlassian solutions
            </Link>
            .
          </p>
          <Link href="/contact" className="card-link mt-8 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
            Ask our federal team <Icon name="arrow-right" className="arrow h-4 w-4" />
          </Link>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map(item => (
            <details key={item.q} className="m-group py-2">
              <summary>
                <span className="pr-6 font-display text-lg font-medium">{item.q}</span>{' '}
                <Icon name="chevron-down" className="h-5 w-5 shrink-0 transition" />
              </summary>
              <p className="pb-5 pr-8 leading-relaxed text-black">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
