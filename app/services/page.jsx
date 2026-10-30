import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/services/Hero';
import SixServicesOneSecurity from '@/components/sections/services/SixServicesOneSecurity';
import CloudUpgradesWithYour from '@/components/sections/services/CloudUpgradesWithYour';
import AtlassianLicenseManagementPlanned from '@/components/sections/services/AtlassianLicenseManagementPlanned';
import TightBudgetsHighExpectations from '@/components/sections/services/TightBudgetsHighExpectations';
import ImplementationIntegrationAndDevsecops from '@/components/sections/services/ImplementationIntegrationAndDevsecops';
import OrganizationalAgilityThatKeeps from '@/components/sections/services/OrganizationalAgilityThatKeeps';
import HowWeExecuteIn from '@/components/sections/services/HowWeExecuteIn';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Federal Atlassian Services | Clovity Federal',
  description:
    'Federal Atlassian services from a Platinum Solution Partner: Data Center to cloud upgrades, license management, managed services, implementation, integration and training, documented for your security team.',
};

export default function ServicesPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <SixServicesOneSecurity />
        <CloudUpgradesWithYour />
        <AtlassianLicenseManagementPlanned />
        <TightBudgetsHighExpectations />
        <ImplementationIntegrationAndDevsecops />
        <OrganizationalAgilityThatKeeps />
        <HowWeExecuteIn />
        <CtaBanner title="Facing a migration deadline or a security review?">
          Talk to a federal Atlassian solutions expert. We'll review your current setup, tell you plainly where Government Cloud stands for
          your impact level and outline next steps.
        </CtaBanner>
      </main>
    </>
  );
}
