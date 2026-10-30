// URL of a local photo through the Next image optimizer (resized, served as AVIF/WebP), for places that can't use
// <Image>: CSS background images and video posters. 1920 is one of the optimizer's allowed widths.
export const optimizedImage = (src, width = 1920) => `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=75`;
