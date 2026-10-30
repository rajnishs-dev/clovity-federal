import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="overflow-hidden bg-ink-900 text-white/70">
      <div className="mx-auto grid max-w-site gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="inline-block">
            <Image src="/assets/img/clovity-fed-logo-white.png" alt="Clovity Federal" className="h-12 w-auto" width={154} height={48} />
          </Link>
          <p className="mt-6 max-w-sm leading-relaxed">
            Secure Atlassian configuration, migration and support for federal, state and local government, documented for your ATO.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-8">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white">Expertise</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/atlassian-solutions" className="hover:text-white">
                  Atlassian Solutions
                </Link>
              </li>
              <li>
                <Link href="/ai-solutions" className="hover:text-white">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/government-cloud" className="hover:text-white">
                  Atlassian Government Cloud
                </Link>
              </li>
              <li>
                <Link href="/itsm" className="hover:text-white">
                  ITSM &amp; Service Management
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white">Services</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/services#migrations" className="hover:text-white">
                  Migrations
                </Link>
              </li>
              <li>
                <Link href="/services#licensing" className="hover:text-white">
                  Licensing &amp; Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#managed" className="hover:text-white">
                  Managed Services
                </Link>
              </li>
              <li>
                <Link href="/services#professional" className="hover:text-white">
                  Professional Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-medium uppercase tracking-[0.16em] text-white">Company</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-white">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-site flex-col gap-3 px-4 py-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            &copy; <span id="year">2026</span> Clovity, Inc. All rights reserved.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Accessibility
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
      {/* Decorative wordmark: letters rise in as the footer scrolls into view (lib/animations.js) */}
      <div className="footer-wordmark" aria-hidden="true">
        <span data-wordmark="">Clovity Federal</span>
      </div>
    </footer>
  );
}
