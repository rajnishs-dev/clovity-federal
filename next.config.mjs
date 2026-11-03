import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';

// Blog images from Strapi: local uploads come from the CMS host itself, live uploads from its S3 bucket
const cmsUrl = process.env.NEXT_PUBLIC_CMS_API_URL ? new URL(process.env.NEXT_PUBLIC_CMS_API_URL) : null;
const cmsImagePatterns = cmsUrl ? [{ protocol: cmsUrl.protocol.replace(':', ''), hostname: cmsUrl.hostname, port: cmsUrl.port }] : [];

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = phase => ({
  // `next build` / `next start` write to their own folder, so a build never overwrites the files a running `next dev` uses.
  // Hosts that expect the default folder (Vercel) keep `.next`.
  distDir: [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER].includes(phase) && !process.env.VERCEL ? '.next-build' : '.next',
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
  async headers() {
    // Images and videos in /public: cached for a day, then refreshed in the background (a replaced file still shows up)
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] }];
  },
});

export default nextConfig;
