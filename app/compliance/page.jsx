import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/compliance/Hero';
import ComplianceWithClearScope from '@/components/sections/compliance/ComplianceWithClearScope';
import FederalComplianceSecurityFrameworks from '@/components/sections/compliance/FederalComplianceSecurityFrameworks';
import HardenedConfigurationsControlBy from '@/components/sections/compliance/HardenedConfigurationsControlBy';
import GovernanceBuiltIntoEvery from '@/components/sections/compliance/GovernanceBuiltIntoEvery';
import HowWeSupportYour from '@/components/sections/compliance/HowWeSupportYour';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Federal Security & Compliance for Atlassian | Clovity Federal',
  description:
    'Clovity Federal configures and documents Jira, Confluence and Jira Service Management around FedRAMP Moderate, FISMA, NIST SP 800-53, CMMC, CJIS, GovRAMP, Section 508 and Zero Trust, with a clear line on what is and is not in scope.',
};

export default function CompliancePage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <ComplianceWithClearScope />
        <FederalComplianceSecurityFrameworks />
        <HardenedConfigurationsControlBy />
        <GovernanceBuiltIntoEvery />
        <HowWeSupportYour />
        <CtaBanner title="Let's talk about your boundary." sand>
          Bring your ISSO. We'll walk through how we would configure and document Atlassian for your controls. We work with your contracting
          office and can share UEI, CAGE and current contract-vehicle details on request.
        </CtaBanner>
      </main>
    </>
  );
}
