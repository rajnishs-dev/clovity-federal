import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/atlassian-solutions/Hero';
import WhatMakesUsDifferent from '@/components/sections/atlassian-solutions/WhatMakesUsDifferent';
import FederalSolutionsAcrossThe from '@/components/sections/atlassian-solutions/FederalSolutionsAcrossThe';
import FederalItModernizationWith from '@/components/sections/atlassian-solutions/FederalItModernizationWith';
import CollaborationPlatformsForAgile from '@/components/sections/atlassian-solutions/CollaborationPlatformsForAgile';
import TakeCommandOfYour from '@/components/sections/atlassian-solutions/TakeCommandOfYour';
import BenefitsOfAtlassianFederal from '@/components/sections/atlassian-solutions/BenefitsOfAtlassianFederal';
import QuestionsAgenciesAskUs from '@/components/sections/atlassian-solutions/QuestionsAgenciesAskUs';
import CtaBanner from '@/components/sections/shared/CtaBanner';

export const metadata = {
  title: 'Atlassian Federal Solutions for Government Agencies | Clovity Federal',
  description:
    'Jira, Confluence, Jira Service Management, Bitbucket and Atlassian Government Cloud, configured and documented for government security reviews by an Atlassian Platinum Solution Partner.',
};

export default function AtlassianSolutionsPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <WhatMakesUsDifferent />
        <FederalSolutionsAcrossThe />
        <FederalItModernizationWith />
        <CollaborationPlatformsForAgile />
        <TakeCommandOfYour />
        <BenefitsOfAtlassianFederal />
        <QuestionsAgenciesAskUs />
        <CtaBanner title="Modernize federal operations with Atlassian" sand>
          Talk with our federal team about your current setup, your data and your path to Government Cloud. We'll show where access, logging
          and documentation need work, and what to fix first.
        </CtaBanner>
      </main>
    </>
  );
}
