import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/blog/Hero';
import OurLatestGuidesAnd from '@/components/sections/blog/OurLatestGuidesAnd';
import FederalResourcesToShare from '@/components/sections/blog/FederalResourcesToShare';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Federal Resources and Blog | Atlassian Security and Compliance | Clovity Federal',
  description:
    'Federal resources from Clovity Federal: guides, checklists, articles and one-pagers on Data Center end of life, Government Cloud fit, NIST SP 800-53 mapping, audit evidence, identity and governed AI.',
};

export default function BlogPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <OurLatestGuidesAnd />
        <FederalResourcesToShare />
        <CtaBanner title="Stuck on a control? Ask us">
          Tell us the requirement your security team is working through. We'll write about it, or walk you through it in a briefing.
        </CtaBanner>
      </main>
    </>
  );
}
