import Image from 'next/image';
import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { formatDate } from '@/lib/cms';

// Blog banners carry text to their edges, so images are never cropped: they keep their own aspect ratio
// (`h-auto`), and only an unusually tall upload is letterboxed by `max-h` + `object-contain`.
// No `data-clip` either - that animation zooms the image to 120%, which would crop it again.
const CARD = 'group flex h-full flex-col overflow-hidden rounded-lg border border-ink-900/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift';
const IMAGE = 'block h-auto max-h-[300px] w-full bg-sand object-contain transition-transform duration-500 group-hover:scale-[1.04]';

function Meta({ post }) {
  return (
    <p className="mb-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
      <span className="eyebrow text-accent">{post.category}</span>
      <time dateTime={post.date} className="font-medium text-ink-600">
        {formatDate(post.date)}
      </time>
    </p>
  );
}

function ReadMore({ label = 'Read more' }) {
  return (
    <span className="card-link mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-accent">
      {label} <Icon name="arrow-right" className="arrow h-4 w-4" />
    </span>
  );
}

// One post in a grid: the /blog listing and the "Keep reading" row under a post
export default function BlogCard({ post, className = '' }) {
  return (
    <Link href={post.href} className={`${CARD} ${className}`}>
      <div className="overflow-hidden">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          className={IMAGE}
          width={post.image.width}
          height={post.image.height}
          sizes="(min-width: 1024px) 420px, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Meta post={post} />
        <h3 className="text-black mb-2 line-clamp-3 font-display text-lg font-semibold leading-snug group-hover:text-accent">{post.title}</h3>
        <p className="mb-4 line-clamp-3 text-black">{post.excerpt}</p>
        <ReadMore />
      </div>
    </Link>
  );
}

// The lead card at the top of the listing: image left, text right from lg (stacked below that)
export function FeaturedBlogCard({ post, className = '' }) {
  return (
    <Link href={post.href} className={`${CARD} lg:grid lg:grid-cols-[1.1fr_1fr] ${className}`}>
      {/* Centered, so if the text runs a little taller than the image the spare space splits above and below it */}
      <div className="flex items-center overflow-hidden bg-sand">
        <Image
          src={post.image.src}
          alt={post.image.alt}
          className={IMAGE}
          width={post.image.width}
          height={post.image.height}
          sizes="(min-width: 1024px) 420px, 100vw"
          priority
        />
      </div>
      <div className="flex flex-col justify-center p-4 lg:px-5 lg:py-4">
        <Meta post={post} />
        <h2 className="text-black mb-2 line-clamp-2 font-display text-xl font-semibold leading-snug tracking-tight group-hover:text-accent lg:text-2xl">
          {post.title}
        </h2>
        <p className="mb-3 line-clamp-2 text-black">{post.excerpt}</p>
        <ReadMore label={`Read the ${post.category.toLowerCase()}`} />
      </div>
    </Link>
  );
}
