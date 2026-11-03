'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { formatDate } from '@/lib/cms';

const MAX_RESULTS = 6;
const MAX_QUERY_LENGTH = 40;

// The sticky right-hand column on /blog and /blog/<slug>, after clovity.ai's ResourceSidebar:
// a search card that filters every post by title as you type, and a "Top Blogs" card that the
// results replace while a query is typed.
//
// `searchFirstOnMobile` (listing page): below lg the aside becomes `display: contents`, so its two
// cards join the page grid on their own - search moves above the posts, Top Blogs stays below them.
export default function BlogSidebar({ posts, topPosts, searchFirstOnMobile = false, className = '' }) {
  const [value, setValue] = useState('');
  const [query, setQuery] = useState('');

  // Filter once typing pauses, not on every keystroke
  useEffect(() => {
    const id = setTimeout(() => setQuery(value.trim().toLowerCase()), 250);
    return () => clearTimeout(id);
  }, [value]);

  const results = useMemo(
    () => (query ? posts.filter(p => p.title.toLowerCase().includes(query) || p.excerpt.toLowerCase().includes(query)) : []),
    [posts, query],
  );

  return (
    <aside className={`self-start ${searchFirstOnMobile ? 'contents lg:block' : ''} ${className}`}>
      <div
        className={`rounded-lg bg-white p-5 shadow-card ${searchFirstOnMobile ? 'order-first lg:order-none lg:mb-5' : 'mb-5'}`}
      >
        <h2 className="text-black font-display text-lg font-medium">Search</h2>
        <form role="search" className="mt-3" onSubmit={e => e.preventDefault()}>
          <label htmlFor="blog-search" className="sr-only">
            Search articles
          </label>
          <div className="relative flex items-center">
            <Icon name="search-field" className="pointer-events-none absolute left-4 h-4 w-4 text-ink-600" />
            <input
              id="blog-search"
              type="search"
              value={value}
              onChange={e => setValue(e.target.value)}
              placeholder="Search articles..."
              autoComplete="off"
              maxLength={MAX_QUERY_LENGTH}
              className="w-full rounded-full border border-ink-900/15 bg-white py-3 pl-11 pr-4 text-sm outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
            />
          </div>
        </form>
      </div>

      {query ? (
        <SidebarCard title={`Results for "${value.trim()}"`}>
          {results.length > 0 ? (
            <PostList posts={results.slice(0, MAX_RESULTS)} />
          ) : (
            <p className="py-2 text-black">Nothing matches "{value.trim()}".</p>
          )}
        </SidebarCard>
      ) : topPosts.length > 0 ? (
        <SidebarCard title="Top Blogs">
          <PostList posts={topPosts} />
        </SidebarCard>
      ) : null}
    </aside>
  );
}

function SidebarCard({ title, children }) {
  return (
    <div className="rounded-lg bg-white p-5 shadow-card" aria-live="polite">
      <h2 className="text-black mb-3 break-words font-display text-lg font-medium">{title}</h2>
      {children}
    </div>
  );
}

function PostList({ posts }) {
  return (
    <ul>
      {posts.map((post, i) => (
        <li key={post.id} className={i > 0 ? 'border-t border-ink-900/10' : ''}>
          <Link href={post.href} className={`group flex items-center gap-3.5 pb-3 ${i > 0 ? 'pt-3' : ''}`}>
            <span className="relative h-[58px] w-[76px] shrink-0 overflow-hidden rounded-md bg-sand">
              <Image src={post.image.src} alt="" fill sizes="76px" />
            </span>
            <span className="min-w-0">
              <span className="text-black line-clamp-2 font-medium leading-snug group-hover:text-accent">{post.title}</span>
              <time dateTime={post.date} className="mt-1 block text-xs text-ink-600">
                {formatDate(post.date)}
              </time>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
