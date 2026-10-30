import Icon from '@/components/ui/Icon';

// Contact hero + form
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand pb-24 pt-36 lg:pt-44">
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div className="relative mx-auto grid max-w-site gap-14 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h1 className="text-black font-display text-3xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            Let's talk about your mission.
          </h1>
          {/* Phones get a short version; the full paragraph shows from sm up */}
          <p className="mt-4 text-base leading-relaxed text-black sm:hidden">
            Tell us what you need to protect. We will follow up within one business day.
          </p>
          <p className="mt-6 hidden sm:block text-lg leading-relaxed text-black">
            Deployment, migration, service management or a security review: start with what you need to protect. Tell us about your
            Atlassian environment, the data it holds and the rules you answer to. A member of the Clovity Federal team will follow up within
            one business day.
          </p>
          <div className="mt-10 space-y-5">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-card text-accent">
                <Icon name="calendar-clock" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-black font-medium">Talk to a federal Atlassian solutions expert</h2>
                <p className="text-black">
                  A no-cost 30-minute briefing to review your current state, your security needs and your options.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-card text-accent">
                <Icon name="file-text" className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-black font-medium">Capability statement</h2>
                <p className="text-black">Request our current capability statement and company registration data.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white shadow-card text-accent">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              {/* Replace with the live federal sales inbox before launch */}
              <div>
                <h2 className="text-black font-medium">Email</h2>
                <a href="mailto:federal@clovity.com" className="text-accent hover:underline">
                  federal@clovity.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          {/* Static form: connect to a Jira Service Management portal, HubSpot or a form endpoint before launch */}
          <form id="contact-form" className="rounded-lg bg-white p-5 shadow-lift sm:p-10" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-medium">First name *</span>{' '}
                <input
                  required
                  name="first"
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
              </label>{' '}
              <label className="block">
                <span className="text-sm font-medium">Last name *</span>{' '}
                <input
                  required
                  name="last"
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
              </label>{' '}
              <label className="block">
                <span className="text-sm font-medium">Work email *</span>{' '}
                <input
                  required
                  type="email"
                  name="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
              </label>{' '}
              <label className="block">
                <span className="text-sm font-medium">Agency or organization *</span>{' '}
                <input
                  required
                  name="org"
                  autoComplete="organization"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                />
              </label>{' '}
              <label className="block">
                <span className="text-sm font-medium">Sector</span>{' '}
                <select
                  name="sector"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                >
                  <option>Federal civilian</option>
                  <option>Defense</option>
                  <option>State &amp; local</option>
                  <option>Education</option>
                  <option>Prime contractor / integrator</option>
                  <option>Other</option>
                </select>
              </label>{' '}
              <label className="block">
                <span className="text-sm font-medium">Current deployment</span>{' '}
                <select
                  name="deployment"
                  className="mt-2 w-full rounded-xl border border-ink-900/15 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                >
                  <option>Data Center</option>
                  <option>Server</option>
                  <option>Atlassian Cloud</option>
                  <option>Atlassian Government Cloud</option>
                  <option>Not using Atlassian yet</option>
                </select>
              </label>
            </div>
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">What can we help with?</legend>
              <div className="mt-3 flex flex-wrap gap-2">
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="agc" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Government Cloud
                  </span>
                </label>{' '}
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="migration" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Migration
                  </span>
                </label>{' '}
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="itsm" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Service management
                  </span>
                </label>{' '}
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="licensing" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Licensing
                  </span>
                </label>{' '}
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="managed" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Managed services
                  </span>
                </label>{' '}
                <label className="cursor-pointer">
                  <input type="checkbox" name="topic" value="security" className="peer sr-only" />
                  <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                    Security &amp; ATO support
                  </span>
                </label>
              </div>
            </fieldset>
            <label className="mt-6 block">
              <span className="text-sm font-medium">Message</span>{' '}
              <textarea
                name="message"
                rows="4"
                className="mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15"
                placeholder="Users, timeline, contract details or anything else that helps."
              />
            </label>
            <p className="mt-4 text-xs text-black">Please don't include classified, CUI or personal information in this form.</p>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-btn px-7 py-4 font-semibold text-white hover:bg-btn-dark sm:w-auto"
            >
              Send request <Icon name="send" className="h-4 w-4" />
            </button>
          </form>
          <div id="form-success" className="hidden rounded-lg bg-white p-10 text-center shadow-lift" role="status">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent-50 text-ink-900">
              <Icon name="check" className="h-8 w-8" />
            </span>
            <h2 className="text-black mt-6 font-display text-2xl font-medium">Thanks, we've got it.</h2>
            <p className="mt-2 text-black">A member of our federal team will reach out within one business day.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
