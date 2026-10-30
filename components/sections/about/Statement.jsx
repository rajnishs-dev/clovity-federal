export default function Statement() {
  return (
    <section data-statement="" className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid w-full max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <p data-fill="" className="lg:col-span-7 font-display text-3xl font-medium leading-[1.2] tracking-tight text-ink-900 sm:text-4xl">
          Our mission: help civilian, defense, state and local teams reach their <span data-key="">mission outcomes</span> on an Atlassian
          platform they can <span data-key="">defend in any security review.</span>
        </p>
        <div className="hidden lg:col-span-5 lg:block">
          {/* Vector: civilian, defense and state & local teams converging on a mission outcome that is ready for security review */}
          <svg className="sv h-auto w-full" viewBox="0 0 420 420" role="img" aria-labelledby="sv-about-title">
            <title id="sv-about-title">
              Civilian, defense and state and local teams reaching a mission outcome that is ready for security review
            </title>
            <circle className="sv-bg" cx="210" cy="210" r="200" />
            <circle className="sv-orbit sv-spin" cx="210" cy="210" r="150" />
            <path className="sv-line" d="M100 95 L210 210 M320 95 L210 210 M100 330 L210 210 M210 210 L320 330" />
            <path className="sv-flow sv-green" d="M100 95 L210 210" />
            <path className="sv-flow sv-violet" style={{ animationDelay: '-.5s' }} d="M320 95 L210 210" />
            <path className="sv-flow sv-teal" style={{ animationDelay: '-1s' }} d="M100 330 L210 210" />
            <path className="sv-flow sv-amber" style={{ animationDelay: '-.25s' }} d="M210 210 L320 330" />
            <circle className="sv-pulse" cx="210" cy="210" r="62" />
            <g className="sv-card-g">
              <circle className="sv-card" cx="210" cy="210" r="62" />
            </g>
            <circle className="sv-chip" cx="210" cy="210" r="44" />
            <circle className="sv-accent" cx="210" cy="210" r="26" />
            <path d="M199 210 l7 7 l14 -15" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <g className="sv-green" transform="translate(100 95)">
              <g className="sv-float">
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <path d="M-9 -3 L0 -9 L9 -3 Z M-6 -1 V6 M-2 -1 V6 M2 -1 V6 M6 -1 V6 M-9 8 H9" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    Civilian
                  </text>
                </g>
              </g>
            </g>
            <g className="sv-violet" transform="translate(320 95)">
              <g className="sv-float" style={{ animationDelay: '-1.2s' }}>
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <path d="M0 -9 L8 -6 V0 C8 5 4 8 0 10 C-4 8 -8 5 -8 0 V-6 Z" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    Defense
                  </text>
                </g>
              </g>
            </g>
            <g className="sv-teal" transform="translate(100 330)">
              <g className="sv-float" style={{ animationDelay: '-2.4s' }}>
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <path d="M0 10 C-6 4 -8 0 -8 -2 A8 8 0 0 1 8 -2 C8 0 6 4 0 10 Z" />
                    <circle cx="0" cy="-2" r="3" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    State &amp; local
                  </text>
                </g>
              </g>
            </g>
            <g className="sv-amber" transform="translate(320 330)">
              <g className="sv-float" style={{ animationDelay: '-3.6s' }}>
                <g className="sv-card-g">
                  <rect className="sv-card" x="-82" y="-26" width="164" height="52" rx="14" />
                  <rect className="sv-accent" x="-70" y="-16" width="32" height="32" rx="9" />
                  <path d="M-60 0 l4 4 l8 -9" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <text className="sv-label" x="-28" y="5">
                    Review ready
                  </text>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
