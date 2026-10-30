import Link from 'next/link';
import Icon from '@/components/ui/Icon';

// Compliance band
export default function ComplianceWithClearScope() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          <div>
            <h2 className="text-black font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
              Compliance with clear scope
            </h2>
            <p className="mt-4 text-black">
              Atlassian holds the service authorization. Your agency owns its ATO. We design around these standards and document the
              platform so the two meet cleanly. Commercial cloud is not FedRAMP Moderate, and we never claim an authorization we don't hold.
            </p>
            <Link href="/compliance" className="card-link mt-6 inline-flex items-center gap-2 font-semibold text-ink-900 hover:text-accent">
              Our compliance approach <Icon name="arrow-right" className="arrow h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="shield-check" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">FedRAMP Moderate</h3>
              <p className="mt-1 text-sm text-black">Through Atlassian Government Cloud only, for Jira, Confluence and JSM.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="file-lock-2" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">FISMA &amp; NIST SP 800-53</h3>
              <p className="mt-1 text-sm text-black">Settings mapped to access, audit, configuration and identity controls.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="key-round" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">Zero Trust &amp; ICAM</h3>
              <p className="mt-1 text-sm text-black">Identity-first access through your agency IdP, with PIV/CAC-aware sign-in.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="lock" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">NIST SP 800-171 &amp; CMMC</h3>
              <p className="mt-1 text-sm text-black">Configurations that support contractors protecting CUI.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="server" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">DISA impact levels</h3>
              <p className="mt-1 text-sm text-black">We'll tell you plainly where AGC stands for your impact level.</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lift">
              <Icon name="accessibility" className="h-7 w-7 text-ink-900" />
              <h3 className="text-black text-xl mt-4 font-medium">Section 508 &amp; NARA</h3>
              <p className="mt-1 text-sm text-black">Accessible portals and records retention planned around NARA schedules.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
