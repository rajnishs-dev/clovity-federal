import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Take command (VF 6 bullets)
export default function TakeCommandOfYour() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
            alt="Team planning work on a whiteboard with sticky notes"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Take command of your operations
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            When work, decisions and approvals live in one governed platform, leaders can see what is happening and prove how it happened.
          </p>
          <ul className="mt-8 grid gap-4">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Central visibility and traceability.</span>{' '}
                <span className="text-black">Live dashboards, with each item traced to its source.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Structured collaboration.</span>{' '}
                <span className="text-black">Teams work through defined processes, not side channels.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Continuous delivery with controls built in.</span>{' '}
                <span className="text-black">Reviews and approvals happen inside the pipeline.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Secure knowledge sharing.</span>{' '}
                <span className="text-black">The right people find the right record when a decision is due.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">Cross-team alignment.</span>{' '}
                <span className="text-black">Program, IT and security teams plan from the same data.</span>
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>
                <span className="font-semibold">End-to-end workflows.</span>{' '}
                <span className="text-black">From request to release to service, one connected trail.</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
