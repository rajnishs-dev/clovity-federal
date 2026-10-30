import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/ai-solutions/Hero';
import BuildFasterScaleSmarter from '@/components/sections/ai-solutions/BuildFasterScaleSmarter';
import GovernedAiExpertise from '@/components/sections/ai-solutions/GovernedAiExpertise';
import SixChecksBeforeAi from '@/components/sections/ai-solutions/SixChecksBeforeAi';
import SixPilotsWorthRunning from '@/components/sections/ai-solutions/SixPilotsWorthRunning';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Governed AI for Atlassian | AI-Assisted Operations for Government | Clovity Federal',
  description:
    'AI-assisted work in Jira, Confluence, Bitbucket and JSM inside a governed environment: availability confirmed for your deployment, six checks before enablement, small pilots and a human in the loop.',
};

export default function AiSolutionsPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <BuildFasterScaleSmarter />
        <GovernedAiExpertise />
        <SixChecksBeforeAi />
        <SixPilotsWorthRunning />
        <CtaBanner title="Want AI your security team can sign off on?">
          Tell us the task you want to speed up. We'll confirm what is available for your deployment, walk through the six checks with your
          security team and plan a small pilot.
        </CtaBanner>
      </main>
    </>
  );
}
