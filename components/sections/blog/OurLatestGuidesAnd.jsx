'use client';

import { useState } from 'react';
import BlogCard, { FeaturedBlogCard } from './BlogCard';
import BlogSidebar from './BlogSidebar';

const FILTERS = [
  { label: 'All', category: null },
  { label: 'Guides', category: 'Guide' },
  { label: 'Checklists', category: 'Checklist' },
  { label: 'Articles', category: 'Article' },
];

// Every post comes from "Clovity Federal Blogs" in Strapi (lib/cms.js); there is no bundled content.
// Same layout as clovity.ai's /blog: posts on the left (the featured card spans the grid's first row - the newest
// post marked "isFeatured", else the newest), Search and Top Blogs on the right.
export default function OurLatestGuidesAnd({ posts = [] }) {
  const [filter, setFilter] = useState(null);
  const featured = posts.find(p => p.isFeatured) || posts[0];
  const rest = posts.filter(p => p !== featured);
  // Only offer the categories that actually have posts
  const filters = FILTERS.filter(f => !f.category || posts.some(p => p.category === f.category));
  const visible = filter ? posts.filter(p => p.category === filter) : null;

  return (
    <section className="bg-paper pb-16 pt-14 sm:pt-20 lg:pb-24">
      <h2 className="sr-only">Our latest guides and articles</h2>
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            {posts.length === 0 && (
              <p className="rounded-lg bg-white p-10 text-center text-lg text-black shadow-card">
                New guides and articles are on the way. Check back soon.
              </p>
            )}
            {filters.length > 2 && (
              <div className="mb-8 flex flex-wrap gap-2">
                {filters.map(f => (
                  <button
                    key={f.label}
                    type="button"
                    aria-pressed={filter === f.category}
                    onClick={() => setFilter(f.category)}
                    className={`rounded-full px-4 py-2 text-sm font-medium ${filter === f.category ? 'bg-ink-900 text-white' : 'bg-white shadow-card hover:bg-accent-50'}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            )}
            {posts.length > 0 && (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {visible ? (
                  // A category picked: a plain grid of just those posts, no featured card
                  visible.map(post => <BlogCard key={post.id} post={post} />)
                ) : (
                  <>
                    <FeaturedBlogCard post={featured} className="sm:col-span-2" />
                    {rest.map(post => (
                      <BlogCard key={post.id} post={post} />
                    ))}
                  </>
                )}
              </div>
            )}
          </div>

          {posts.length > 0 && (
            <BlogSidebar posts={posts} topPosts={posts.slice(0, 4)} searchFirstOnMobile className="lg:sticky lg:top-28" />
          )}
        </div>
      </div>
    </section>
  );
}
