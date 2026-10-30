import Icon from '@/components/ui/Icon';

// Integrated ecosystem (VF Integrated Technology Ecosystem + AS tagline)
export default function CollaborationPlatformsForAgile() {
  return (
    <section className="bg-sand py-16 lg:py-24">
      <div className="mx-auto grid max-w-site gap-8 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Collaboration platforms for Agile and DevSecOps
          </h2>
          <p className="mt-5 text-lg text-black">One connected Atlassian toolchain. Every link in it is scoped, logged and written down.</p>
        </div>
        <div data-slide="" className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="lock" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black text-xl font-display font-medium">Controlled collaboration</h3>
              <p className="mt-1 text-black">Jira and Confluence with permissions set by role and need-to-know.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="git-branch" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black text-xl font-display font-medium">DevSecOps &amp; software delivery</h3>
              <p className="mt-1 text-black">Bitbucket and Jira linked, so code, reviews and releases trace back to requirements.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="gauge" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black text-xl font-display font-medium">Platform operations</h3>
              <p className="mt-1 text-black">Administration, upgrades and health checks that keep each site inside its baseline.</p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="server" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black text-xl font-display font-medium">Hosting &amp; deployment options</h3>
              <p className="mt-1 text-black">
                Government Cloud, commercial cloud or Data Center until its March 2029 end of life, compared for your data.
              </p>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg bg-white p-6 shadow-card">
            <span className="icon-tile icon-tile-sm">
              <Icon name="scroll-text" className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-black text-xl font-display font-medium">Content &amp; knowledge operations</h3>
              <p className="mt-1 text-black">Confluence structure, templates and retention patterns that keep records findable.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
