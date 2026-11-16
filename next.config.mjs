import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';

// Blog images from Strapi: local uploads come from the CMS host itself, live uploads from its S3 bucket
const cmsUrl = process.env.NEXT_PUBLIC_CMS_API_URL ? new URL(process.env.NEXT_PUBLIC_CMS_API_URL) : null;
const cmsImagePatterns = cmsUrl ? [{ protocol: cmsUrl.protocol.replace(':', ''), hostname: cmsUrl.hostname, port: cmsUrl.port }] : [];

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = phase => ({
  // `next build` / `next start` write to their own folder, so a build never overwrites the files a running `next dev` uses.
  // Hosts that expect the default folder (Vercel, Netlify) keep `.next`.
  distDir: [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER].includes(phase) && !process.env.VERCEL && !process.env.NETLIFY ? '.next-build' : '.next',
  // The page scripts (lib/site-init.js) build DOM once per page; StrictMode's double effect run would duplicate it in dev
  reactStrictMode: false,
  images: {
    // WebP only: AVIF encoding put too much CPU load on the server
    formats: ['image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'clovity-website.s3.ap-south-1.amazonaws.com' },
      ...cmsImagePatterns,
    ],
    minimumCacheTTL: 2678400,
  },
  // Pages already opened or prefetched in this tab are reused on client navigation, without asking the server again.
  // Static pages stay 30 minutes (Next's default is 5), dynamic ones 5 minutes (default 0).
  experimental: {
    staleTimes: { static: 1800, dynamic: 300 },
  },
  async headers() {
    // Images and videos in /public: the browser reuses its copy for 30 days, then shows it once more while fetching the new one.
    // A file replaced under the same name can take up to 30 days to reach returning visitors, so give a new image a new
    // name (team-itsm2.jpg -> team-itsm3.jpg) as the site already does.
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=31536000' }] }];
  },
});

export default nextConfig;
