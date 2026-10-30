import Image from 'next/image';

// Product strip
export default function ProductStrip() {
  return (
    <section className="border-b border-black/5 bg-white py-16 lg:py-20" aria-label="Atlassian platform">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          <span className="flex items-center gap-1.5 text-xl font-semibold text-ink-800">
            <Image src="/assets/img/icons/jira-icon.svg" alt="" className="h-9 w-9" width={300} height={300} />
            Jira
          </span>{' '}
          <span className="flex items-center gap-1.5 text-xl font-semibold text-ink-800">
            <Image src="/assets/img/icons/confluence-icon.svg" alt="" className="h-9 w-9" width={300} height={300} />
            Confluence
          </span>{' '}
          <span className="flex items-center gap-1.5 text-xl font-semibold text-ink-800">
            <Image src="/assets/img/icons/jsm-icon.svg" alt="" className="h-9 w-9" width={134} height={134} />
            Jira Service Management
          </span>{' '}
          <span className="flex items-center gap-1.5 text-xl font-semibold text-ink-800">
            <Image src="/assets/img/icons/bitbucket-icon.svg" alt="" className="h-9 w-9" width={134} height={134} />
            Bitbucket
          </span>{' '}
          <span className="flex items-center gap-1.5 text-xl font-semibold text-ink-800">
            <Image src="/assets/img/icons/government-cloud-icon.svg" alt="" className="h-9 w-9" width={32} height={32} />
            Atlassian Government Cloud
          </span>
        </div>
      </div>
    </section>
  );
}
