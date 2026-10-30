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

export const metadata = {
  title: 'Clovity Federal | Atlassian for Secure Government Environments',
  description:
    'Clovity Federal, the public sector practice of Atlassian Platinum Solution Partner Clovity, configures, migrates and documents Jira, Confluence and Jira Service Management for government, including FedRAMP Moderate Atlassian Government Cloud.',
};

export default function HomePage() {
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
        <FederalResourcesForYour />
        <CtaBanner title="Let's talk about your mission." tall>
          Talk to a federal Atlassian solutions expert about deployment, migration, security configuration or modernization. Bring your
          security lead. We'll review where you stand and lay out practical next steps.
        </CtaBanner>
      </main>
    </>
  );
}
