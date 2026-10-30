import PageScripts from '@/components/layout/PageScripts';
import Hero from '@/components/sections/contact/Hero';
import FederalProcurementPartnership from '@/components/sections/contact/FederalProcurementPartnership';

export const metadata = {
  title: 'Contact | Clovity Federal',
  description:
    'Talk to a federal Atlassian solutions expert at Clovity Federal. We work with your contracting office and share SAM.gov, UEI, CAGE and NAICS details on request.',
};

export default function ContactPage() {
  return (
    <>
      <PageScripts />
      <main id="main">
        <Hero />
        <FederalProcurementPartnership />
      </main>
    </>
  );
}
