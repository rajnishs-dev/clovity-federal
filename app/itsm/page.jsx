import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/itsm/Hero';
import FromLegacyToolsTo from '@/components/sections/itsm/FromLegacyToolsTo';
import HowJsmSupportsFederal from '@/components/sections/itsm/HowJsmSupportsFederal';
import SolutionsAlignedToFederal from '@/components/sections/itsm/SolutionsAlignedToFederal';
import OperationalCoordinationAcrossEvery from '@/components/sections/itsm/OperationalCoordinationAcrossEvery';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Federal IT Service Management on JSM | Clovity Federal',
  description:
    'Modern federal IT service management on Jira Service Management: legacy tool replacement and incident, request, change and security desks mapped to NIST SP 800-53 controls, configured and documented by Clovity Federal.',
};

export default function ItsmPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <FromLegacyToolsTo />
        <HowJsmSupportsFederal />
        <SolutionsAlignedToFederal />
        <OperationalCoordinationAcrossEvery />
        <CtaBanner title="Let's talk about your service desk.">
          Book a 30-minute briefing. We'll look at your current desk, the controls you report on and what it takes to run it in Atlassian
          Government Cloud. We work with your contracting office and can share UEI, CAGE and current contract-vehicle details on request.
        </CtaBanner>
      </main>
    </>
  );
}
