import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/home/Hero';
import ProductStrip from '@/components/sections/home/ProductStrip';
import Statement from '@/components/sections/home/Statement';
import HowWeSupportFederal from '@/components/sections/home/HowWeSupportFederal';
import MissionOutcomesSecuredOn from '@/components/sections/home/MissionOutcomesSecuredOn';
import FedrampModerateGovernmentCloud from '@/components/sections/home/FedrampModerateGovernmentCloud';
import WhereWeDeliverMeasurable from '@/components/sections/home/WhereWeDeliverMeasurable';
import HowWeExecuteStep from '@/components/sections/home/HowWeExecuteStep';
import AtlassianSolutionsByGovernment from '@/components/sections/home/AtlassianSolutionsByGovernment';
import Gains from '@/components/sections/home/Gains';
import ComplianceWithClearScope from '@/components/sections/home/ComplianceWithClearScope';
import FederalResourcesForYour from '@/components/sections/home/FederalResourcesForYour';
import CtaBanner from '@/components/sections/shared/CtaBanner';
import { getFederalBlogs } from '@/lib/cms';

// The resources section shows the newest posts from Strapi; a new post shows up within a minute
export const revalidate = 60;

export const metadata = {
  title: 'Clovity Federal | Atlassian for Secure Government Environments',
  description:
    'Clovity Federal, the public sector practice of Atlassian Platinum Solution Partner Clovity, configures, migrates and documents Jira, Confluence and Jira Service Management for government, including FedRAMP Moderate Atlassian Government Cloud.',
};

export default async function HomePage() {
  const posts = (await getFederalBlogs()) || [];
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <ProductStrip />
        <Statement />
        <HowWeSupportFederal />
        <MissionOutcomesSecuredOn />
        <FedrampModerateGovernmentCloud />
        <WhereWeDeliverMeasurable />
        <HowWeExecuteStep />
        <AtlassianSolutionsByGovernment />
        <Gains />
        <ComplianceWithClearScope />
        <FederalResourcesForYour posts={posts.slice(0, 3).map(({ content, ...card }) => card)} />
        <CtaBanner title="Let's talk about your mission." tall>
          Talk to a federal Atlassian solutions expert about deployment, migration, security configuration or modernization. Bring your
          security lead. We'll review where you stand and lay out practical next steps.
        </CtaBanner>
      </main>
    </>
  );
}
