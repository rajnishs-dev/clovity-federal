import { optimizedImage } from '@/lib/media';

// Inner-page hero: a full-bleed photo with a dark left-to-right scrim and the copy on the left (same height and overlay as
// the main Clovity website's BannerHero). `image` is the file name in /assets/img/banners: `<image>.jpg` is the 1920x600
// desktop and tablet banner, `<image>-mobile.jpg` the 828x1000 portrait crop shown below 640px. Pass `mobile={false}` when a
// banner has no mobile crop: phones then show the desktop photo, cropped to its centre.
export default function PageBanner({ image, mobile = true, alt = '', children }) {
  const desktopSrc = `/assets/img/banners/${image}.jpg`;
  const mobileSrc = `/assets/img/banners/${image}-mobile.jpg`;
  return (
    // Starts below the fixed 80px (h-20) white header, so no part of the photo is hidden under it
    <section className="relative isolate mt-20 flex min-h-[450px] items-center overflow-hidden bg-[#141620] py-12 sm:py-16 md:min-h-[500px]">
      <picture>
        {mobile && <source media="(max-width: 639px)" srcSet={optimizedImage(mobileSrc, 828)} />}
        <img
          src={optimizedImage(desktopSrc)}
          alt={alt}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
          fetchPriority="high"
          decoding="async"
        />
      </picture>
      <div className="page-banner-overlay absolute inset-0 -z-10" aria-hidden="true" />
      {children}
    </section>
  );
}
