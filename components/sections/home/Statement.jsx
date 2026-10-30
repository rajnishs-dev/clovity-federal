// Statement: words fill in as you scroll
export default function Statement() {
  return (
    <section data-statement="" className="bg-white py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <p data-fill="" className="lg:col-span-7 font-display text-3xl font-medium leading-[1.2] tracking-tight text-ink-900 sm:text-4xl">
          Disconnected tools and late security slow the mission. We connect <span data-key="">Jira, Confluence and your service desk,</span>{' '}
          with <span data-key="">security built in from the first setting.</span>
        </p>
        <div className="hidden lg:col-span-5 lg:block">
          {/* Vector: siloed Jira, Confluence and service desk joined to a central security shield */}
          <svg className="sv h-auto w-full" viewBox="0 0 420 420" role="img" aria-labelledby="sv-index-title">
            <title id="sv-index-title">Jira, Confluence and the service desk connected to a central security shield</title>
            <circle className="sv-bg" cx="210" cy="210" r="200" />
            <circle className="sv-orbit sv-spin" cx="210" cy="210" r="150" />
            <path className="sv-line" d="M100 95 L210 210 M320 95 L210 210 M210 360 L210 210" />
            <path className="sv-flow" d="M100 95 L210 210" />
            <path className="sv-flow sv-teal" style={{ animationDelay: '-.5s' }} d="M320 95 L210 210" />
            <path className="sv-flow sv-violet" style={{ animationDelay: '-1s' }} d="M210 360 L210 210" />
            <circle className="sv-pulse" cx="210" cy="210" r="60" />
            <g className="sv-card-g">
              <circle className="sv-card" cx="210" cy="210" r="58" />
            </g>
            <path className="sv-ink" d="M210 168 L244 181 V211 C244 236 229 252 210 260 C191 252 176 236 176 211 V181 Z" />
            <rect x="197" y="207" width="26" height="21" rx="4" fill="#fff" />
            <path d="M202 207 v-6 a8 8 0 0 1 16 0 v6" fill="none" stroke="#fff" strokeWidth="4" />
            <circle className="sv-ink" cx="210" cy="216" r="3" />
            <g className="sv-blue" transform="translate(100 95)">
              <g className="sv-float">
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <rect x="-9" y="-9" width="18" height="18" rx="3" />
                    <path d="M-3 -9 V9 M3 -9 V9" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    Jira
                  </text>
                </g>
              </g>
            </g>
            <g className="sv-teal" transform="translate(320 95)">
              <g className="sv-float" style={{ animationDelay: '-1.6s' }}>
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <rect x="-7" y="-10" width="14" height="20" rx="2" />
                    <path d="M-3 -4 H3 M-3 1 H3 M-3 6 H1" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    Confluence
                  </text>
                </g>
              </g>
            </g>
            <g className="sv-violet" transform="translate(210 360)">
              <g className="sv-float" style={{ animationDelay: '-3.2s' }}>
                <g className="sv-card-g">
                  <rect className="sv-card" x="-75" y="-26" width="150" height="52" rx="14" />
                  <rect className="sv-chip" x="-63" y="-16" width="32" height="32" rx="9" />
                  <g className="sv-ink-s" transform="translate(-47 0)">
                    <path d="M-9 -7 H9 V4 H-1 L-6 9 V4 H-9 Z" />
                  </g>
                  <text className="sv-label" x="-21" y="5">
                    Service desk
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
