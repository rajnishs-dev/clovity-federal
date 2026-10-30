import Image from 'next/image';

export default function PhotoMosaic() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-4 px-4 sm:px-6 md:grid-cols-3">
        <div data-clip="" className="overflow-hidden rounded-lg md:row-span-2">
          <Image
            src="https://images.unsplash.com/photo-1617581629397-a72507c3de9e?auto=format&fit=crop&w=900&q=80"
            alt="Washington Monument behind cherry blossoms"
            className="h-full min-h-[320px] w-full object-cover"
            width={900}
            height={599}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=900&q=80"
            alt="A team working together at computers"
            className="aspect-[4/3] w-full object-cover"
            width={900}
            height={600}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
            alt="Colleagues reviewing documents in a meeting"
            className="aspect-[4/3] w-full object-cover"
            width={900}
            height={600}
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div data-clip="" className="overflow-hidden rounded-lg md:col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
            alt="Modern open office interior"
            className="aspect-[21/9] w-full object-cover"
            width={1400}
            height={935}
            sizes="(min-width: 1240px) 1240px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
