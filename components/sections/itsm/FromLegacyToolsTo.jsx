import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// ITSM impact: legacy tool replacement, workflow design, process improvement
export default function FromLegacyToolsTo() {
  return (
    <section className="scroll-mt-24 bg-white py-16 lg:py-24">
      <div className="mx-auto grid max-w-site items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div data-clip="" className="overflow-hidden rounded-lg shadow-lift ">
          <Image
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
            alt="Open office with people working at desks"
            className="aspect-[4/3] w-full object-cover"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            From legacy tools to one desk you can audit
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Aging ticket tools, shared inboxes and spreadsheets lose the trail. We move that work into Jira Service Management and design it
            so the record of who asked, who approved and what changed is kept by default. Your agency owns the ATO. Atlassian owns the
            service authorization. We configure the desk and document it.
          </p>
          <ul className="mt-8 grid gap-5">
            <li className="flex gap-3">
              <Icon name="replace" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Legacy tool replacement.</span> Request types, queues and history moved into JSM, with old
                records handled to your retention rules.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="workflow" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Workflow design.</span> Approval steps placed where your policy says they belong, not where
                a tool default put them.
              </span>
            </li>
            <li className="flex gap-3">
              <Icon name="gauge" className="mt-0.5 h-5 w-5 shrink-0 text-steel-700" />
              <span>
                <span className="font-semibold">Process improvement.</span> SLA and queue reports that show where requests stall, so you fix
                the process, not just the ticket.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
