'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/components/ui/Icon';

// Navigation, shared by the desktop dropdowns and the mobile menu groups
const MENUS = [
  {
    label: 'Expertise',
    width: 'w-[460px]',
    dropdown: 'dropdown ',
    paths: ['/atlassian-solutions', '/ai-solutions', '/government-cloud', '/itsm'],
    items: [
      { href: '/atlassian-solutions', icon: 'layers', title: 'Atlassian Solutions', text: 'Jira, Confluence, JSM and the wider platform' },
      { href: '/ai-solutions', icon: 'sparkles', title: 'AI Solutions', text: 'Practical, governed AI inside Atlassian' },
      { href: '/government-cloud', icon: 'landmark', title: 'Atlassian Government Cloud', text: 'Plan, stand up and adopt AGC' },
      { href: '/itsm', icon: 'headset', title: 'ITSM & Service Management', text: 'Service desks built on JSM' },
    ],
  },
  {
    label: 'Services',
    width: 'w-[665px]',
    dropdown: 'dropdown grid dropdown-grid',
    paths: ['/services'],
    items: [
      { href: '/services', icon: 'layout-grid', title: 'Services Overview', text: 'All our services at a glance' },
      { href: '/services#migrations', icon: 'cloud-upload', title: 'Migrations', text: 'Server and Data Center to cloud' },
      { href: '/services#licensing', icon: 'file-badge', title: 'Licensing & Consulting', text: 'Right-sized licensing and advice' },
      { href: '/services#managed', icon: 'life-buoy', title: 'Managed Services', text: 'Ongoing administration and support' },
      { href: '/services#professional', icon: 'wrench', title: 'Professional Services', text: 'Implementation and integrations' },
      { href: '/services#training', icon: 'graduation-cap', title: 'Training & Enablement', text: 'Role-based training for every user' },
    ],
  },
  { label: 'Compliance', href: '/compliance' },
  {
    label: 'Resources',
    width: 'w-80',
    dropdown: 'dropdown ',
    paths: ['/blog'],
    items: [{ href: '/blog', icon: 'newspaper', title: 'Blog', text: 'Guides, checklists and articles' }],
  },
  { label: 'About Us', href: '/about' },
];

// Pages without a dark hero start with the solid header
const SOLID_PAGES = ['/contact'];

export default function Header() {
  const pathname = usePathname();
  const solid = SOLID_PAGES.includes(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [hash, setHash] = useState('');
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  // Dropdown just used to navigate: kept shut until the pointer leaves it (hover would hold it open otherwise)
  const [shut, setShut] = useState('');

  // Header turns solid after scroll
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Track the #section too, so the matching submenu link stays highlighted
  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener('hashchange', sync);
    window.addEventListener('popstate', sync);
    return () => {
      window.removeEventListener('hashchange', sync);
      window.removeEventListener('popstate', sync);
    };
  }, [pathname]);

  // Mobile menu: the static "hidden" gives way to the animated closed state once scripts run
  useEffect(() => setReady(true), []);

  const setMenu = useCallback(next => {
    setOpen(next);
    document.body.classList.toggle('overflow-hidden', next);
    // Smooth scrolling (lib/animations.js) has to pause too, or the page keeps moving under the open menu
    if (window.lenis) next ? window.lenis.stop() : window.lenis.start();
  }, []);

  // The header stays mounted across pages, so close everything a full page load used to reset:
  // the mobile menu, its expanded groups, and the focus that keeps a dropdown open
  useEffect(() => {
    setMenu(false);
    document.querySelectorAll('#mobile-menu details[open]').forEach(d => d.removeAttribute('open'));
    if (document.activeElement?.closest('#site-header')) document.activeElement.blur();
  }, [pathname, setMenu]);

  useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') {
        setMenu(false);
        document.getElementById('menu-btn')?.focus();
      }
    };
    // Close if the window grows to desktop width, where the menu and overlay don't exist
    const mq = window.matchMedia('(min-width: 1024px)');
    const onWide = e => e.matches && setMenu(false);
    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onWide);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onWide);
    };
  }, [open, setMenu]);

  // Submenu links for the open page keep their hover look. On a page whose sections are linked by #hash,
  // the matching section wins; without a hash, the plain page link does.
  const isCurrent = (href, siblings) => {
    const [path, h = ''] = href.split('#');
    if (path !== pathname) return false;
    const hashed = siblings.some(s => s.href === `${pathname}${hash}` && hash);
    return hashed ? `#${h}` === hash : !h;
  };
  const current = (href, siblings) => (isCurrent(href, siblings) ? { 'aria-current': 'page' } : {});
  const onLink = href => () => setHash(href.includes('#') ? `#${href.split('#')[1]}` : '');
  const onDropdownLink = (label, href) => e => {
    onLink(href)();
    setShut(label);
    e.currentTarget.blur();
  };

  const headerClass = `fixed inset-x-0 top-0 z-40 transition-all duration-300${solid || scrolled || open ? ' is-scrolled' : ''}`;

  return (
    <header id="site-header" data-solid={solid ? 'true' : undefined} className={headerClass}>
      <div className="mx-auto flex h-20 max-w-site items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center" aria-label="Clovity Federal home">
          <Image src="/assets/img/clovity-fed-logo-white.png" alt="Clovity Federal" className="logo-light h-11 w-auto" width={141} height={44} priority />
          <Image src="/assets/img/clovity-fed-logo.png" alt="Clovity Federal" className="logo-dark hidden h-11 w-auto" width={141} height={44} priority />
        </Link>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {MENUS.map(menu => {
            const active = menu.href ? pathname === menu.href : menu.paths.includes(pathname);
            const navClass = `nav-link ${active ? 'is-active' : ''}`;
            if (menu.href) {
              return (
                <Link key={menu.label} href={menu.href} className={navClass}>
                  {menu.label}
                </Link>
              );
            }
            return (
              <div
                key={menu.label}
                className={`has-menu relative${shut === menu.label ? ' is-shut' : ''}`}
                onMouseLeave={() => shut === menu.label && setShut('')}
              >
                <button type="button" className={navClass} aria-haspopup="true">
                  {menu.label} <Icon name="chevron-down" className="h-4 w-4" />
                </button>
                <div className={`mega absolute top-full pt-4 ${menu.width}`}>
                  <div className={menu.dropdown}>
                    {menu.items.map(item => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`dd-item dd-rich${isCurrent(item.href, menu.items) ? ' is-current' : ''}`}
                        onClick={onDropdownLink(menu.label, item.href)}
                        {...current(item.href, menu.items)}
                      >
                        <span className="dd-icon">
                          <Icon name={item.icon} className="h-5 w-5" />
                        </span>
                        <span>
                          <span className="block font-semibold">{item.title}</span>
                          <span className="block text-sm text-black">{item.text}</span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-btn px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-btn-dark sm:inline-flex"
          >
            Contact Us
          </Link>
          <button
            id="menu-btn"
            className="menu-btn rounded-lg p-2 text-white lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open ? 'true' : 'false'}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!open)}
          >
            <Icon name={open ? 'x' : 'menu'} className="h-6 w-6" />
          </button>
        </div>
      </div>
      {/* Mobile menu: slides down from under the header over a dimmed overlay (styles in site.css) */}
      <div
        id="mobile-menu"
        data-lenis-prevent=""
        className={`${ready ? 'm-panel' : 'hidden'} max-h-[calc(100vh-5rem)] overflow-y-auto bg-white lg:hidden${open ? ' is-open' : ''}`}
        onClick={e => e.target.closest('a') && setMenu(false)}
      >
        <nav className="mx-auto flex max-w-site flex-col px-4 py-4 sm:px-6" aria-label="Mobile">
          {MENUS.map(menu =>
            menu.href ? (
              <Link key={menu.label} href={menu.href} className="m-link">
                {menu.label}
              </Link>
            ) : (
              <details key={menu.label} className="m-group">
                <summary>
                  {menu.label} <Icon name="chevron-down" className="h-4 w-4" />
                </summary>
                <div className="pb-2 pl-3">
                  {menu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block py-2 text-black${isCurrent(item.href, menu.items) ? ' is-current' : ''}`}
                      onClick={onLink(item.href)}
                      {...current(item.href, menu.items)}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </details>
            )
          )}
          <Link href="/contact" className="mt-4 rounded-full bg-btn px-5 py-3 text-center font-semibold text-white">
            Contact Us
          </Link>
        </nav>
      </div>
      {/* Dimmed backdrop behind the open menu; lives on <body> so it sits under the fixed header (z-40) */}
      {ready &&
        createPortal(
          <div className={`m-overlay${open ? ' is-open' : ''}`} aria-hidden="true" onClick={() => setMenu(false)} />,
          document.body
        )}
    </header>
  );
}
