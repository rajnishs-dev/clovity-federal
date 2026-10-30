import Image from 'next/image';
import Icon from '@/components/ui/Icon';

// Sectors: expanding accordion (click a tab to open it)
export default function AtlassianSolutionsByGovernment() {
  return (
    <section id="missions" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mx-auto max-w-2xl text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Atlassian solutions by government sector
          </h2>
          <p className="mt-5 text-lg text-black">
            Different missions, different rules. The same need: work that is controlled, documented and ready for audit.
          </p>
        </div>
        <div className="sectors mt-14" data-sectors="">
          <article className="sector is-active">
            <button type="button" className="sector-tab" aria-expanded="true" aria-controls="sector-civilian">
              <span className="sector-label">
                <Icon name="building-2" className="h-5 w-5" />
                <span>Federal Civilian</span>
              </span>{' '}
              <span className="sector-expand" aria-hidden="true">
                <Icon name="maximize-2" className="h-4 w-4" />
              </span>
            </button>
            <div id="sector-civilian" className="sector-panel" role="region" aria-label="Federal Civilian">
              <div className="relative grid h-full gap-8 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:p-8">
                <div className="flex flex-col">
                  <span className="inline-flex w-max items-center gap-2.5 rounded-lg bg-steel-700 px-4 py-2.5 font-semibold text-white">
                    <Icon name="building-2" className="h-5 w-5" />
                    Federal Civilian
                  </span>
                  <div className="mt-6 lg:my-auto">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                      Move to FedRAMP Moderate cloud with your controls intact
                    </h3>
                    <ul className="mt-6 space-y-3">
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Products.</strong>{' '}
                          <span className="text-black">
                            Jira, Confluence and JSM on Atlassian Government Cloud, or Data Center until its March 2029 end of life.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Compliance.</strong>{' '}
                          <span className="text-black">
                            FedRAMP Moderate through AGC, settings documented for FISMA and NIST SP 800-53, records planned around NARA
                            schedules.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Procurement.</strong>{' '}
                          <span className="text-black">
                            We work with your contracting office and share UEI, CAGE and contract-vehicle details on request.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Use cases.</strong>{' '}
                          <span className="text-black">IT modernization, Agile program management, ITSM and DevSecOps.</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/assets/img/home/federal-civilian.jpg"
                  alt="An analyst reviewing a security dashboard on a tablet in front of server racks"
                  className="order-first h-64 w-full rounded-lg object-cover sm:h-80 lg:order-none lg:h-full"
                  width={1585}
                  height={992}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </article>
          <article className="sector">
            <button type="button" className="sector-tab" aria-expanded="false" aria-controls="sector-defense">
              <span className="sector-label">
                <Icon name="shield" className="h-5 w-5" />
                <span>Defense</span>
              </span>{' '}
              <span className="sector-expand" aria-hidden="true">
                <Icon name="maximize-2" className="h-4 w-4" />
              </span>
            </button>
            <div id="sector-defense" className="sector-panel" role="region" aria-label="Defense">
              <div className="relative grid h-full gap-8 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:p-8">
                <div className="flex flex-col">
                  <span className="inline-flex w-max items-center gap-2.5 rounded-lg bg-steel-700 px-4 py-2.5 font-semibold text-white">
                    <Icon name="shield" className="h-5 w-5" />
                    Defense
                  </span>
                  <div className="mt-6 lg:my-auto">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                      Traceable, controlled delivery for defense programs
                    </h3>
                    <ul className="mt-6 space-y-3">
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Products.</strong>{' '}
                          <span className="text-black">
                            Jira, Confluence, Bitbucket and JSM, on the hosting option that fits your data.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Compliance.</strong>{' '}
                          <span className="text-black">
                            Settings mapped to NIST SP 800-53, and a plain answer on where AGC stands for your impact level.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Procurement.</strong>{' '}
                          <span className="text-black">
                            We work with your contracting office and share UEI, CAGE and contract-vehicle details on request.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Use cases.</strong>{' '}
                          <span className="text-black">
                            Requirement-to-release traceability, DevSecOps pipelines and program reporting.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/assets/img/home/defense-atlassian.jpg"
                  alt="Server racks with blue and yellow network cabling"
                  className="order-first h-64 w-full rounded-lg object-cover sm:h-80 lg:order-none lg:h-full"
                  width={1600}
                  height={897}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </article>
          <article className="sector">
            <button type="button" className="sector-tab" aria-expanded="false" aria-controls="sector-sled">
              <span className="sector-label">
                <Icon name="map-pin" className="h-5 w-5" />
                <span>State &amp; Local</span>
              </span>{' '}
              <span className="sector-expand" aria-hidden="true">
                <Icon name="maximize-2" className="h-4 w-4" />
              </span>
            </button>
            <div id="sector-sled" className="sector-panel" role="region" aria-label="State &amp; Local">
              <div className="relative grid h-full gap-8 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:p-8">
                <div className="flex flex-col">
                  <span className="inline-flex w-max items-center gap-2.5 rounded-lg bg-steel-700 px-4 py-2.5 font-semibold text-white">
                    <Icon name="map-pin" className="h-5 w-5" />
                    State &amp; Local
                  </span>
                  <div className="mt-6 lg:my-auto">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                      Shared service desks with clear data boundaries
                    </h3>
                    <ul className="mt-6 space-y-3">
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Products.</strong>{' '}
                          <span className="text-black">Jira, Confluence, JSM and Bitbucket, on cloud or Data Center.</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Compliance.</strong>{' '}
                          <span className="text-black">
                            CJIS, GovRAMP (formerly StateRAMP) and state privacy rules, planned around from the start.
                          </span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Procurement.</strong>{' '}
                          <span className="text-black">Licensing quoted to your state's purchasing rules.</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Use cases.</strong>{' '}
                          <span className="text-black">
                            Citizen services, cross-department help desks, public works projects and records.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/assets/img/home/state-and-local.jpg"
                  alt="People working at desks and lounge seating inside a multi-level public library"
                  className="order-first h-64 w-full rounded-lg object-cover sm:h-80 lg:order-none lg:h-full"
                  width={1600}
                  height={900}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </article>
          <article className="sector">
            <button type="button" className="sector-tab" aria-expanded="false" aria-controls="sector-primes">
              <span className="sector-label">
                <Icon name="handshake" className="h-5 w-5" />
                <span>Prime Contractors</span>
              </span>{' '}
              <span className="sector-expand" aria-hidden="true">
                <Icon name="maximize-2" className="h-4 w-4" />
              </span>
            </button>
            <div id="sector-primes" className="sector-panel" role="region" aria-label="Prime Contractors">
              <div className="relative grid h-full gap-8 p-4 sm:p-6 lg:grid-cols-[1.1fr_1fr] lg:p-8">
                <div className="flex flex-col">
                  <span className="inline-flex w-max items-center gap-2.5 rounded-lg bg-steel-700 px-4 py-2.5 font-semibold text-white">
                    <Icon name="handshake" className="h-5 w-5" />
                    Prime Contractors
                  </span>
                  <div className="mt-6 lg:my-auto">
                    <h3 className="font-display text-2xl font-medium tracking-tight text-black sm:text-3xl">
                      An Atlassian technology partner inside your program
                    </h3>
                    <ul className="mt-6 space-y-3">
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Products.</strong>{' '}
                          <span className="text-black">Jira and Confluence for Agile and DevSecOps teams, plus JSM and Bitbucket.</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Compliance.</strong>{' '}
                          <span className="text-black">Configurations that support your NIST SP 800-171 and CMMC work for CUI.</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Procurement.</strong>{' '}
                          <span className="text-black">Teaming on Atlassian scope, with UEI and CAGE details on request.</span>
                        </span>
                      </li>
                      <li className="flex gap-3">
                        <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                        <span>
                          <strong className="font-semibold">Use cases.</strong>{' '}
                          <span className="text-black">
                            Faster platform deployment, migrations and service desks inside larger programs.
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <Image
                  src="/assets/img/home/prime-contractor.jpg"
                  alt="A team working together at computers"
                  className="order-first h-64 w-full rounded-lg object-cover sm:h-80 lg:order-none lg:h-full"
                  width={1600}
                  height={1067}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
