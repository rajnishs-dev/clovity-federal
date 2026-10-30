import { PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER } from 'next/constants.js';

/** @type {(phase: string) => import('next').NextConfig} */
const nextConfig = phase => ({
  // `next build` / `next start` write to their own folder, so a build never overwrites the files a running `next dev` uses.
  // Hosts that expect the default folder (Vercel) keep `.next`.
  distDir: [PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER].includes(phase) && !process.env.VERCEL ? '.next-build' : '.next',
  // The page scripts (lib/site-init.js) build DOM once per page; StrictMode's double effect run would duplicate it in dev
  reactStrictMode: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'assets.mixkit.co' },
    ],
    minimumCacheTTL: 2678400,
  },
  async headers() {
    // Images and videos in /public: cached for a day, then refreshed in the background (a replaced file still shows up)
    return [{ source: '/assets/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }] }];
  },
});

export default nextConfig;
