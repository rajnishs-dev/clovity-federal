import Icon from '@/components/ui/Icon';
import ContactForm from './ContactForm';

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
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
