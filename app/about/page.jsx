import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/about/Hero';
import AtlassianPlatinumSolutionPartner from '@/components/sections/about/AtlassianPlatinumSolutionPartner';
import Statement from '@/components/sections/about/Statement';
import WhyFederalAgenciesChoose from '@/components/sections/about/WhyFederalAgenciesChoose';
import PhotoMosaic from '@/components/sections/about/PhotoMosaic';
import MarketsWeServe from '@/components/sections/about/MarketsWeServe';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'About Us | Atlassian Platinum Solution Partner for Government | Clovity Federal',
  description:
    'Clovity Federal is the public sector practice of Clovity, Inc., an Atlassian Platinum Solution Partner helping federal civilian, defense, state and local agencies and prime contractors run Jira, Confluence and JSM inside their security requirements.',
};

export default function AboutPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <AtlassianPlatinumSolutionPartner />
        <Statement />
        <WhyFederalAgenciesChoose />
        <PhotoMosaic />
        <MarketsWeServe />
        <CtaBanner title="Let's talk about your mission." sand>
          Deployment, migration, process improvement or a security review on the way. Tell us your data, your impact level and your
          deadlines. We'll tell you what fits and what doesn't.
        </CtaBanner>
      </main>
    </>
  );
}
