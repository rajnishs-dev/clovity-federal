// Strapi (clovity-admin) client for the two collections this site uses:
// "Clovity Federal Blogs" (read, public) and "Clovity Federal Contact" (write, public).
// Both routes are `auth: false` on the Strapi side, so the token is optional. It is sent with reads only,
// which run on the server; the contact POST runs in the browser and must never carry it.

export const CMS_URL = (process.env.NEXT_PUBLIC_CMS_API_URL || '').replace(/\/+$/, '');
const CMS_TOKEN = process.env.CMS_API_TOKEN || '';

const ENDPOINTS = {
  blogs: '/api/clovity-federal-blogs',
  contact: '/api/clovity-federal-contacts',
};

// How long a blog page is served before Next.js asks Strapi again (seconds)
export const BLOG_REVALIDATE = 60;

/** Local uploads come back as `/uploads/...`; S3 uploads are already absolute */
export function mediaUrl(media) {
  const url = media?.url;
  if (!url) return null;
  return url.startsWith('/') ? `${CMS_URL}${url}` : url;
}

// Rich text is Markdown with optional HTML: drop tags, images, link targets and Markdown marks for a plain-text excerpt
function plainText(content = '') {
  return content
    .replace(/<[^>]*>/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^\s{0,3}(#{1,6}|>|[-*+]|\d+\.)\s+/gm, '')
    .replace(/[*_`~]+/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** "November 2, 2026" */
export function formatDate(date) {
  return date ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '';
}

function excerptOf(row) {
  if (row.excerpt?.trim()) return row.excerpt.trim();
  const text = plainText(row.content);
  return text.length > 160 ? `${text.slice(0, 157).trimEnd()}...` : text;
}

function toPost(row) {
  const src = mediaUrl(row.image);
  if (!src || !row.slug) return null;
  return {
    id: row.documentId || String(row.id),
    slug: row.slug,
    href: `/blog/${row.slug}`,
    title: row.title,
    category: row.category || 'Article',
    excerpt: excerptOf(row),
    content: row.content || '',
    // ~200 words a minute
    readingMinutes: Math.max(1, Math.round(plainText(row.content).split(' ').length / 200)),
    date: row.blog_date || row.publishedAt || row.createdAt,
    isFeatured: Boolean(row.isFeatured),
    image: {
      src,
      alt: row.image.alternativeText || row.title,
      width: row.image.width || 1600,
      height: row.image.height || 1000,
    },
  };
}

async function getJson(path, params) {
  if (!CMS_URL) return null;
  const qs = new URLSearchParams(params).toString();
  try {
    const res = await fetch(`${CMS_URL}${path}?${qs}`, {
      headers: CMS_TOKEN ? { Authorization: `Bearer ${CMS_TOKEN}` } : {},
      next: { revalidate: BLOG_REVALIDATE },
    });
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return await res.json();
  } catch (error) {
    // Strapi down, or the collection not deployed there yet: the page renders with no posts instead of failing.
    // A warning, not an error, so the dev overlay doesn't treat an expected fallback as a crash.
    console.warn(`[cms] GET ${path} failed: ${error.message || error}`);
    return null;
  }
}

/** Published posts, newest first. `null` when Strapi can't be reached. */
export async function getFederalBlogs() {
  const body = await getJson(ENDPOINTS.blogs, {
    populate: '*',
    'sort[0]': 'blog_date:desc',
    'sort[1]': 'createdAt:desc',
    'pagination[pageSize]': '100',
  });
  if (!body) return null;
  return (body.data || []).map(toPost).filter(Boolean);
}

export async function getFederalBlogBySlug(slug) {
  const body = await getJson(ENDPOINTS.blogs, {
    populate: '*',
    'filters[slug][$eq]': slug,
    'pagination[pageSize]': '1',
  });
  const row = body?.data?.[0];
  return row ? toPost(row) : null;
}

/** Contact form submission. Throws on failure so the form can show an error. */
export async function postFederalContact(input) {
  if (!CMS_URL) throw new Error('NEXT_PUBLIC_CMS_API_URL is not set');
  const res = await fetch(`${CMS_URL}${ENDPOINTS.contact}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: input }),
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
}
