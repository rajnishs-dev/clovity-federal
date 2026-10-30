import Icon from '@/components/ui/Icon';

// FedRAMP Moderate Government Cloud (EM 3 cards)
export default function FedrampModerateGovernmentCloud() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            FedRAMP Moderate Government Cloud
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            The Jira, Confluence and Jira Service Management your teams know, inside an authorized boundary. Here is what that gives you,
            and what we set up.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="users" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Secure cloud-based collaboration</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira and Confluence for planning and records, with access set by role and need-to-know.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Least-privilege permission schemes
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Space and page restrictions
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Change history on every item
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="headset" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Government IT service delivery</h3>
            <p className="mt-3 leading-relaxed text-black">
              Jira Service Management for requests, incidents and changes, with each approval kept on the record.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Access request workflows
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Change approvals with history
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Self-service portal and SLAs
              </li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="fingerprint" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Enterprise governance and administration</h3>
            <p className="mt-3 leading-relaxed text-black">
              Identity through your agency IdP, tight admin roles and audit logs your security team can review.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                SAML SSO and SCIM provisioning
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Separate, limited admin roles
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Audit log review and export
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
