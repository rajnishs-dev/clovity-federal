import localFont from 'next/font/local';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// Same order as the static site: site.css first, Tailwind after it
import './styles/site.css';
import './styles/tailwind.css';

// Manrope from a file in the repo (Google Fonts, latin subset, variable weight). next/font/google downloads the font at
// build time and quietly falls back to Arial when that download fails, so the file is kept locally instead.
const manrope = localFont({
  src: './fonts/Manrope-latin-variable.woff2',
  weight: '400 700',
  style: 'normal',
  display: 'swap',
  variable: '--font-manrope',
  fallback: ['system-ui', 'sans-serif'],
});

export const metadata = {
  title: 'Clovity Federal',
  description: 'Clovity Federal, the public sector practice of Atlassian Platinum Solution Partner Clovity.',
};

export const viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }) {
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
