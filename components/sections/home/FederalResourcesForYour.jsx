import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import BlogCard from '@/components/sections/blog/BlogCard';

// Resources: the newest posts from "Clovity Federal Blogs" in Strapi (fetched by app/page.jsx).
// Hidden when there are none, rather than showing placeholder articles.
export default function FederalResourcesForYour({ posts = [] }) {
  if (posts.length === 0) return null;
  return (
    <section className="bg-sand py-16 lg:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem] max-w-3xl">
              Federal resources for your next security review
            </h2>
          </div>
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
            All resources <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map(post => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
