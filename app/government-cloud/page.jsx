import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/government-cloud/Hero';
import FedrampModerateGovernmentCloud from '@/components/sections/government-cloud/FedrampModerateGovernmentCloud';
import ComplianceWithClearScope from '@/components/sections/government-cloud/ComplianceWithClearScope';
import CheckTheFitBefore from '@/components/sections/government-cloud/CheckTheFitBefore';
import AssessArchitectOperationalizeEvolve from '@/components/sections/government-cloud/AssessArchitectOperationalizeEvolve';
import DataCenterEndsIn from '@/components/sections/government-cloud/DataCenterEndsIn';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Atlassian Government Cloud (FedRAMP Moderate) | Clovity Federal',
  description:
    'Readiness checks, secure setup and Data Center migration for Atlassian Government Cloud, FedRAMP Moderate authorized for Jira, Confluence and Jira Service Management, with clear scope.',
};

export default function GovernmentCloudPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <FedrampModerateGovernmentCloud />
        <ComplianceWithClearScope />
        <CheckTheFitBefore />
        <AssessArchitectOperationalizeEvolve />
        <DataCenterEndsIn />
        <CtaBanner title="Know where AGC stands for your data" sand>
          Book a readiness briefing with your security lead in the room. We'll tell you plainly what AGC covers for your data and impact
          level, what it doesn't, and what a realistic move before March 2029 looks like.
        </CtaBanner>
      </main>
    </>
  );
}
