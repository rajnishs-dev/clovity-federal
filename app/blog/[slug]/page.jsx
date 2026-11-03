import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import PageScripts from '@/components/layout/PageScripts';
import BlogCard from '@/components/sections/blog/BlogCard';
import BlogSidebar from '@/components/sections/blog/BlogSidebar';
import CtaBanner from '@/components/sections/shared/CtaBanner';
import Icon from '@/components/ui/Icon';
import { formatDate, getFederalBlogBySlug, getFederalBlogs } from '@/lib/cms';

export const revalidate = 60;

// Pre-render every published post at build time; a post published later renders on its first visit
export async function generateStaticParams() {
  const posts = (await getFederalBlogs()) || [];
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getFederalBlogBySlug(slug);
  if (!post) return { title: 'Article not found | Clovity Federal' };
  return {
    title: `${post.title} | Clovity Federal`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image.src] },
  };
}

// Same layout as clovity.ai's blog posts: the article on the left, Search and Top Blogs on the right, related posts below
export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const [post, all] = await Promise.all([getFederalBlogBySlug(slug), getFederalBlogs()]);
  if (!post) notFound();

  // The sidebar and "Keep reading" only need the cards, not every post's body
  const others = (all || []).filter(p => p.slug !== post.slug).map(({ content, ...card }) => card);
  const sameCategory = others.filter(p => p.category === post.category);
  const related = [...sameCategory, ...others.filter(p => p.category !== post.category)].slice(0, 3);

  return (
    <>
      <PageScripts />
      <main id="main">
        <section className="bg-paper pb-12 pt-32 sm:pb-16 lg:pt-36">
          <div className="mx-auto grid max-w-site grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_340px]">
            <article className="min-w-0">
              <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-sm font-medium text-ink-600">
                <Link href="/" className="hover:text-accent">
                  Home
                </Link>
                <Icon name="chevron-right" className="h-3.5 w-3.5 text-ink-600/60" />
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
                <Icon name="chevron-right" className="h-3.5 w-3.5 text-ink-600/60" />
                <span aria-current="page" className="max-w-[60vw] truncate text-ink-900 sm:max-w-[420px]">
                  {post.title}
                </span>
              </nav>

              {/* The banner at its own aspect ratio - never cropped */}
              <div className="mb-6 overflow-hidden rounded-lg shadow-lift">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  className="block h-auto max-h-[520px] w-full bg-sand object-contain"
                  width={post.image.width}
                  height={post.image.height}
                  sizes="(min-width: 1024px) 860px, 100vw"
                  priority
                />
              </div>

              <h1 className="text-black mb-4 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-tight tracking-tight">
                {post.title}
              </h1>
              <p className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold uppercase tracking-wider text-black">
                <span className="text-accent">{post.category}</span>
                {post.date && <time dateTime={post.date}>{formatDate(post.date)}</time>}
                <span>{post.readingMinutes} min read</span>
              </p>

              {/* Strapi's rich text is Markdown, and may carry pasted HTML: rendered the same way as clovity.ai's blog */}
              <div className="article-body">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                  {post.content}
                </ReactMarkdown>
              </div>
            </article>

            <BlogSidebar posts={others} topPosts={others.slice(0, 4)} className="lg:sticky lg:top-28" />
          </div>
        </section>

        {related.length > 0 && (
          <section className="bg-white pt-12 sm:pt-16">
            <div className="mx-auto max-w-site px-4 sm:px-6">
              <p className="eyebrow text-accent">Keep reading</p>
              <h2 className="text-black mt-2 font-display text-3xl font-medium tracking-tight">Related insights</h2>
              <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map(p => (
                  <BlogCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CtaBanner title="Stuck on a control? Ask us">
          Tell us the requirement your security team is working through. We'll write about it, or walk you through it in a briefing.
        </CtaBanner>
      </main>
    </>
  );
}
