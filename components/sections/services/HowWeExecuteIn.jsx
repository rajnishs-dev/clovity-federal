import Icon from '@/components/ui/Icon';

// Method
export default function HowWeExecuteIn() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            How we execute, in four steps
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Every service follows the same path, with written decisions your contracting officer and ISSO can review at each step.
          </p>
        </div>
        {/* Timeline: the rule fills and each step lights up as you scroll (animations.js [data-timeline]) */}
        <ol data-timeline="" className="timeline mt-14 lg:mt-20">
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="scan-search" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Assess</h3>
              <p className="mt-2 leading-relaxed text-black">
                Find the gaps, friction points, compliance needs and dependencies in your current Atlassian setup.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="layers" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Architect</h3>
              <p className="mt-2 leading-relaxed text-black">
                Design the target platform around your mission workflows, with controls mapped to NIST SP 800-53 families.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="workflow" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Operationalize</h3>
              <p className="mt-2 leading-relaxed text-black">
                Deploy the platform, pipelines and controls, then hand over configuration records and runbooks.
              </p>
            </div>
          </li>
          <li className="tl-item">
            <span className="tl-dot">
              <Icon name="gauge" className="h-5 w-5" />
            </span>
            <div className="tl-body">
              <h3 className="text-black font-display text-xl font-medium sm:text-2xl">Evolve</h3>
              <p className="mt-2 leading-relaxed text-black">
                Tune performance and resilience through ongoing support, and keep the baseline current as Atlassian ships changes.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}
