import Image from 'next/image';
import Icon from '@/components/ui/Icon';

export default function TightBudgetsHighExpectations() {
  return (
    <section id="managed" className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
            alt="IT staff with laptops in a server room"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={801}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Tight budgets. High expectations. Limited resources.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Most government Atlassian teams run lean. Our managed services and application support cover day-to-day Atlassian administration
            and strategic guidance, so your staff can stay on the mission. We keep access tight, track Atlassian releases against your
            settings and gather the evidence your continuous monitoring program asks for.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Day-to-day administration</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Application support for your users</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Scheduled user and admin access reviews</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Patch and release tracking</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Audit log reviews and ConMon evidence support</span>
            </li>
            <li className="flex gap-3">
              <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
              <span>Staff augmentation with Atlassian admins</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
