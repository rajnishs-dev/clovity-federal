import Icon from '@/components/ui/Icon';

// Platform cards (EM: Federal Solutions Across the Atlassian Platform)
export default function FederalSolutionsAcrossThe() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Federal solutions across the Atlassian platform
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            Each product is set up to the same standard for access, logging and documentation. Each card also says where the product stands
            for government hosting, so you can plan on facts.
          </p>
        </div>
        {/* Slider: active card centred, neighbours faded either side; arrows, dots, swipe and arrow keys (main.js [data-carousel]) */}
        <div
          data-carousel=""
          className="carousel mt-14"
          role="region"
          aria-roledescription="carousel"
          aria-label="Atlassian platform products"
        >
          <div className="relative">
            <div className="carousel-stage">
              <article
                className="carousel-card flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card"
                aria-roledescription="slide"
                aria-label="1 of 5"
              >
                <span className="icon-tile">
                  <Icon name="kanban-square" className="h-7 w-7" />
                </span>
                <h3 className="text-black mt-6 font-display text-xl font-medium">Jira</h3>
                <p className="mt-3 leading-relaxed text-black">
                  Programs and projects tracked through controlled workflows, required approvals and a full change history.
                </p>
              </article>
              <article
                className="carousel-card flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card"
                aria-roledescription="slide"
                aria-label="2 of 5"
              >
                <span className="icon-tile">
                  <Icon name="book-lock" className="h-7 w-7" />
                </span>
                <h3 className="text-black mt-6 font-display text-xl font-medium">Confluence</h3>
                <p className="mt-3 leading-relaxed text-black">
                  Policies, SOPs and program records in spaces built around need-to-know, with a review step before anything is published.
                </p>
              </article>
              <article
                className="carousel-card flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card"
                aria-roledescription="slide"
                aria-label="3 of 5"
              >
                <span className="icon-tile">
                  <Icon name="headset" className="h-7 w-7" />
                </span>
                <h3 className="text-black mt-6 font-display text-xl font-medium">Jira Service Management</h3>
                <p className="mt-3 leading-relaxed text-black">
                  Requests, incidents, changes and access approvals run through one service desk, with a record of each decision.
                </p>
              </article>
              <article
                className="carousel-card flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card"
                aria-roledescription="slide"
                aria-label="4 of 5"
              >
                <span className="icon-tile">
                  <Icon name="git-branch" className="h-7 w-7" />
                </span>
                <h3 className="text-black mt-6 font-display text-xl font-medium">Bitbucket</h3>
                <p className="mt-3 leading-relaxed text-black">
                  Source control with branch protection, required reviews and pipeline checks, with each commit linked back to a Jira issue.
                </p>
              </article>
              <article
                className="carousel-card flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card"
                aria-roledescription="slide"
                aria-label="5 of 5"
              >
                <span className="icon-tile">
                  <Icon name="landmark" className="h-7 w-7" />
                </span>
                <h3 className="text-black mt-6 font-display text-xl font-medium">Atlassian Government Cloud</h3>
                <p className="mt-3 leading-relaxed text-black">
                  Jira, Confluence and Jira Service Management in an environment run separately from Atlassian's commercial cloud. We plan
                  the move, set it up and document each setting for your ATO.
                </p>
              </article>
            </div>
            <button
              type="button"
              className="carousel-btn carousel-btn-side -left-2 sm:left-0 lg:-left-2"
              data-carousel-prev=""
              aria-label="Previous product"
            >
              <Icon name="arrow-left" className="h-5 w-5" />
            </button>{' '}
            <button
              type="button"
              className="carousel-btn carousel-btn-side -right-2 sm:right-0 lg:-right-2"
              data-carousel-next=""
              aria-label="Next product"
            >
              <Icon name="arrow-right" className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2" data-carousel-dots="" />
        </div>
      </div>
    </section>
  );
}
