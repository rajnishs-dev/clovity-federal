import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Readiness check (IS Strategy Through Execution + VF ASSESS)
export default function CheckTheFitBefore() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Server racks with network cabling"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={673}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Check the fit before you commit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Our readiness check finds the gaps, friction points, security needs and dependencies that decide whether AGC works for you. We
            work through these questions with your program and security leads, and you leave with a written fit assessment and a plan that
            runs from setup through renewal.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>What impact level is your data categorized at?</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Which apps and integrations can't you live without?</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Do users sign in with PIV/CAC through an agency IdP?</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Which features do your teams rely on today?</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>What do your records and retention rules require?</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Who will own the ATO update for the move?</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
