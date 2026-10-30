import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function BuildFasterScaleSmarter() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80"
            alt="Illustration of the letters AI on a digital background"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={675}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Build faster. Scale smarter. Deliver with governed AI.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Delivery teams already plan, write, build and support their work in Atlassian. Where your deployment offers AI features, we fit
            them into that flow at the points where a person already reviews the work. The result is help with the busywork, not a new path
            for your data.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Plan and groom work in Jira</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Draft and find pages in Confluence</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Review changes in Bitbucket</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Resolve requests in JSM</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
