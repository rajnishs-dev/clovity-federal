
export default function PhotoMosaic() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-4 px-4 sm:px-6 md:grid-cols-3">
        <div data-clip="" className="overflow-hidden rounded-lg md:row-span-2">
          <img
            src="/assets/img/about/federal-buildin.jpg"
            alt="U.S. Capitol building in Washington, DC"
            className="h-64 w-full object-cover object-[center_35%] sm:h-[25rem] md:h-full md:min-h-[320px]"
            width={1200}
            height={1799}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg">
          <img
            src="/assets/img/about/team-collaborating.jpg"
            alt="Team reviewing data on a tablet in a meeting"
            className="h-64 w-full object-cover sm:h-[25rem] md:aspect-[4/3] md:h-auto"
            width={1200}
            height={675}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg">
          <img
            src="/assets/img/about/whiteboard-planning.jpg"
            alt="Colleagues planning with sticky notes on a whiteboard"
            className="h-64 w-full object-cover sm:h-[25rem] md:aspect-[4/3] md:h-auto"
            width={1200}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg md:col-span-2">
          <img
            src="/assets/img/about/modern-office-working.jpg"
            alt="Team meeting around a conference table with laptops"
            className="h-64 w-full object-cover sm:h-[25rem] md:aspect-[21/9] md:h-auto"
            width={2000}
            height={1333}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
