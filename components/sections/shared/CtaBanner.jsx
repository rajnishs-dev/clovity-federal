import Link from 'next/link';
import Icon from '@/components/ui/Icon';
import { optimizedImage } from '@/lib/media';

// Closing call to action on every page: a navy box over a fixed photo of the Capitol, one headline, one line, one button.
// "sand" puts the light blue band behind it; the homepage uses a taller box with a lighter overlay ("tall").
export default function CtaBanner({ title, children, sand = false, tall = false }) {
  return (
    <section className={`${sand ? 'bg-sand ' : ''}px-4 py-16 lg:py-24 sm:px-6`}>
      {/* Fixed background image. No transform on this container, or the fixed attachment stops working. */}
      <div
        className={`relative mx-auto max-w-site overflow-hidden rounded-lg bg-ink-900 bg-cover bg-center lg:bg-fixed px-6 py-20 text-center text-white sm:px-16 ${tall ? 'sm:py-28' : 'sm:py-24'}`}
        style={{ backgroundImage: `url('${optimizedImage('/assets/img/us-capitol-clouds.jpg')}')` }}
      >
        <div className={`absolute inset-0 ${tall ? 'bg-ink-950/55' : 'bg-ink-900/80'}`} />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/75">{children}</p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-btn px-7 py-4 font-semibold text-white hover:bg-btn-dark"
            >
              Talk to an expert <Icon name="calendar" className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
