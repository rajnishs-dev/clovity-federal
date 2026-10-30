import Image from 'next/image';

export default function SixPilotsWorthRunning() {
  return (
    <section className="relative overflow-hidden bg-sand py-16 lg:py-24">
      {/* Displacement slider: the framed photo warps into the next through a WebGL shader, titles slide up through a mask,
           and the ring on the active dot fills while autoplay counts down (main.js [data-wslider]).
           The <img> stack is the fallback: it cross-fades when WebGL is unavailable, and it carries the alt text. */}
      <div
        data-wslider=""
        className="ws mx-auto max-w-site px-4 sm:px-6"
        role="region"
        aria-roledescription="carousel"
        aria-label="Six AI pilots"
      >
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-12">
          <div className="mx-auto max-w-3xl text-center lg:col-span-12 lg:row-start-1">
            <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
              Six pilots worth running first
            </h2>
            <p className="mt-4 text-lg text-black">
              Each one is low risk, easy to check and simple to switch off. Each one targets a benefit your program already tracks.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:col-span-7 lg:col-start-6 lg:row-start-2 lg:flex-row lg:self-center">
            <div className="ws-media">
              <Image
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1600&q=80"
                alt="IT professionals with laptops in a server room"
                className="ws-img is-active"
                crossOrigin="anonymous"
                width={1600}
                height={1068}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1569511166187-97eb6e387e19?auto=format&fit=crop&w=1600&q=80"
                alt="Curved shelves inside a public library"
                className="ws-img"
                crossOrigin="anonymous"
                width={1600}
                height={1020}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
                alt="Analytics dashboard on a laptop"
                className="ws-img"
                crossOrigin="anonymous"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=80"
                alt="A hand tracing a system diagram on a planning board"
                className="ws-img"
                crossOrigin="anonymous"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="A team collaborating around laptops"
                className="ws-img"
                crossOrigin="anonymous"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />{' '}
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80"
                alt="Colleagues reviewing documents in a meeting"
                className="ws-img"
                crossOrigin="anonymous"
                width={1600}
                height={1067}
                sizes="(min-width: 1024px) 60vw, 100vw"
              />
              <canvas className="ws-canvas" aria-hidden="true" />
            </div>
            <div className="ws-dots" role="tablist" aria-label="Choose a pilot">
              <button type="button" className="ws-dot" role="tab" aria-label="Faster service delivery" data-ws-go="0">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>{' '}
              <button type="button" className="ws-dot" role="tab" aria-label="Centralized knowledge" data-ws-go="1">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>{' '}
              <button type="button" className="ws-dot" role="tab" aria-label="Improved visibility" data-ws-go="2">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>{' '}
              <button type="button" className="ws-dot" role="tab" aria-label="Standardized workflows" data-ws-go="3">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>{' '}
              <button type="button" className="ws-dot" role="tab" aria-label="Better collaboration" data-ws-go="4">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>{' '}
              <button type="button" className="ws-dot" role="tab" aria-label="Better governance" data-ws-go="5">
                <svg viewBox="0 0 40 40" aria-hidden="true">
                  <circle className="ws-ring-track" cx="20" cy="20" r="18" />
                  <circle className="ws-ring" cx="20" cy="20" r="18" />
                </svg>
                <span className="ws-dot-core" />
              </button>
            </div>
          </div>
          <div className="ws-panels lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-center" aria-live="polite">
            <article className="ws-panel is-active" aria-roledescription="slide" aria-label="Faster service delivery">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Faster service delivery</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                JSM agents see a suggested knowledge article next to each request and decide whether to send it. We start with one queue and
                the knowledge base spaces you already maintain.
              </p>
            </article>
            <article className="ws-panel" aria-roledescription="slide" aria-label="Centralized knowledge">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Centralized knowledge</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                Plain-language search across Confluence that only returns what the user can already open. Staff find the policy or runbook
                without knowing which space it lives in.
              </p>
            </article>
            <article className="ws-panel" aria-roledescription="slide" aria-label="Improved visibility">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Improved visibility</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                A first-draft status report built from live Jira data. The program owner edits and approves it before it goes to leadership.
              </p>
            </article>
            <article className="ws-panel" aria-roledescription="slide" aria-label="Standardized workflows">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Standardized workflows</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                Stale, duplicate or unassigned backlog items are flagged on a set schedule for a person to review. Teams spend less time
                grooming and more time delivering.
              </p>
            </article>
            <article className="ws-panel" aria-roledescription="slide" aria-label="Better collaboration">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Better collaboration</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                A summary of a long ticket or page thread, with the source one click away. New reviewers and on-call staff catch up without
                reading every comment.
              </p>
            </article>
            <article className="ws-panel" aria-roledescription="slide" aria-label="Better governance">
              <h3 className="text-black ws-title font-display font-medium tracking-tight">
                <span className="ws-mask">
                  <span>Better governance</span>
                </span>
              </h3>
              <p className="ws-text mt-4 max-w-lg text-lg leading-relaxed text-black">
                A short pilot review with your security team: what data the feature touched, who used it and what to change before it goes
                wider.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
