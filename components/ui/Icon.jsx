import { CF_ICONS, CF_ICON_TONES } from '@/lib/icons';
import LUCIDE from './lucide-icons';

// One icon by name, as the static site drew it: brand line art (lib/icons.js) when the name is listed there,
// otherwise the Lucide glyph of the same version the site loaded from the CDN (0.453.0).
export default function Icon({ name, className, ...rest }) {
  const art = CF_ICONS[name];
  if (art) {
    const tone = Object.keys(CF_ICON_TONES).find(t => CF_ICON_TONES[t].includes(name));
    return (
      <svg
        // Cropped to the drawing area (the art keeps a 4px margin on the 48px grid) so the icons fill their box
        viewBox="3 3 42 42"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className={`${className || ''} cf-icon`.trim()}
        data-tone={tone}
        data-icon={name}
        dangerouslySetInnerHTML={{ __html: art }}
      />
    );
  }
  const Glyph = LUCIDE[name];
  return Glyph ? <Glyph className={className} data-lucide={name} {...rest} /> : null;
}
