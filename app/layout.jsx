import { preconnect } from 'react-dom';
import { Manrope } from 'next/font/google';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Same order as the static site: site.css first, Tailwind after it
import './styles/site.css';
import './styles/tailwind.css';

// Self-hosted Manrope (same weights the Google Fonts link loaded), so text renders without a blocking font request
const manrope = Manrope({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap', variable: '--font-manrope' });

export const metadata = {
  title: 'Clovity Federal',
  description: 'Clovity Federal, the public sector practice of Atlassian Platinum Solution Partner Clovity.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
  // Most hero videos and their posters come from Mixkit; open that connection before the page asks for them
  preconnect('https://assets.mixkit.co');
  return (
    <html lang="en" className={manrope.variable}>
      <body className="bg-white font-sans text-ink-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
