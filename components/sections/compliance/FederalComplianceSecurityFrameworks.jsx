import Icon from '@/components/ui/Icon';

// Framework cards: what we do and what is not in scope
export default function FederalComplianceSecurityFrameworks() {
  return (
    <section id="frameworks" className="scroll-mt-24 bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Federal compliance &amp; security frameworks
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-black">
            These are the standards we design around. Each card says what we do and where our part stops. We hold none of these credentials
            ourselves, and we say so.
          </p>
        </div>
        <div data-tilt="" className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="shield-check" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">FedRAMP Moderate</h3>
            <p className="mt-3 leading-relaxed text-black">
              Atlassian Government Cloud received FedRAMP Moderate authorization in March 2025 for Jira, Confluence and Jira Service
              Management. We plan, stand up and configure it.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> Clovity Federal holds no FedRAMP authorization. Commercial
              cloud and Marketplace apps sit outside AGC's authorization.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="gauge" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">DISA impact levels: IL2, IL4 &amp; IL5</h3>
            <p className="mt-3 leading-relaxed text-black">
              As of Atlassian's March 2025 announcement, FedRAMP High and DoD IL5 were named as future goals, not current authorizations.
              We'll tell you plainly where AGC stands for your impact level.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> We won't place data in AGC above the level it is authorized
              for.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="file-lock-2" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">FISMA &amp; NIST SP 800-53 Rev. 5</h3>
            <p className="mt-3 leading-relaxed text-black">
              We map platform settings to the control families in your system security plan, so an assessor can trace a control to a real
              configuration.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> We supply evidence. Your agency writes the SSP, accepts the
              risk and owns the ATO.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="book-lock" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">CMMC &amp; NIST SP 800-171</h3>
            <p className="mt-3 leading-relaxed text-black">
              For defense contractors and primes handling CUI, we design access, permission and audit settings that support your 800-171
              practices.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> We hold no CMMC certification and don't run assessments.
              Your assessor does.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="scale" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">CJIS</h3>
            <p className="mt-3 leading-relaxed text-black">
              For state and local justice teams, we plan around CJIS Security Policy requirements with your security office: access, audit
              and where data may live.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> Your agency decides what CJIS allows. We don't attest to it
              on anyone's behalf.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="map-pin" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">GovRAMP (formerly StateRAMP)</h3>
            <p className="mt-3 leading-relaxed text-black">
              State programs that require GovRAMP get a plan built around it. We help you confirm the status of each product and app before
              anything goes live.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> Clovity Federal holds no GovRAMP status. Product status
              comes from the provider's listing, not from us.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="accessibility" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Section 508</h3>
            <p className="mt-3 leading-relaxed text-black">
              Portals, request forms and page templates designed with accessibility in mind and reviewed for keyboard and screen reader use.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> Atlassian owns accessibility of the core product. We cover
              what we build on top of it.
            </p>
          </div>
          <div className="flex flex-col rounded-lg bg-white p-6 sm:p-8 shadow-card">
            <span className="icon-tile">
              <Icon name="fingerprint" className="h-7 w-7" />
            </span>
            <h3 className="text-black mt-6 font-display text-xl font-medium">Zero Trust &amp; ICAM</h3>
            <p className="mt-3 leading-relaxed text-black">
              Identity-first setup in line with OMB M-22-09: SAML SSO through your agency identity provider for PIV/CAC sign-in, SCIM
              provisioning and least-privilege roles.
            </p>
            <p className="mt-auto border-t border-ink-900/10 pt-4 text-sm text-black">
              <span className="font-semibold text-ink-900">Not in scope:</span> We connect to your identity provider. We don't issue
              credentials or run your IdP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
