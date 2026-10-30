import Icon from '@/components/ui/Icon';

// Delivery steps (VF How We Execute)
export default function AssessArchitectOperationalizeEvolve() {
  return (
    <section className="relative bg-sand py-16 lg:py-24">
      <div className="mx-auto max-w-site px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-black mx-auto max-w-2xl font-display text-3xl font-medium tracking-tight sm:text-[2.75rem] sm:leading-[2.75rem]">
            Assess, architect, operationalize, evolve
          </h2>
          <p className="mt-5 text-lg text-black">
            Four steps from first look to a Government Cloud site your security team can stand behind.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-site lg:mt-14">
        <ol className="grid gap-6 px-4 sm:px-6 md:grid-cols-2 xl:grid-cols-4">
          <li className="hpanel">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
              <Icon name="search" className="h-6 w-6" />
            </span>
            <h3 className="text-black mt-5 font-display text-2xl font-medium">Assess</h3>
            <p className="mt-3 text-black">Your data, apps, integrations and features reviewed against AGC's current scope.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Data categorization review
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                App and integration inventory
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Feature gap list
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
              <Icon name="layers" className="h-6 w-6" />
            </span>
            <h3 className="text-black mt-5 font-display text-2xl font-medium">Architect</h3>
            <p className="mt-3 text-black">A target site designed around your mission workflows, with security controls planned in.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Identity via your agency IdP
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Least-privilege admin roles
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Mapping to NIST SP 800-53
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
              <Icon name="settings-2" className="h-6 w-6" />
            </span>
            <h3 className="text-black mt-5 font-display text-2xl font-medium">Operationalize</h3>
            <p className="mt-3 text-black">The site configured, data moved in tested waves and the baseline written down.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                SAML SSO and SCIM set up
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Audit log export confirmed
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Configuration records for your ISSO
              </li>
            </ul>
          </li>
          <li className="hpanel">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-accent-50 text-ink-900">
              <Icon name="refresh-cw" className="h-6 w-6" />
            </span>
            <h3 className="text-black mt-5 font-display text-2xl font-medium">Evolve</h3>
            <p className="mt-3 text-black">Ongoing support that keeps the site inside its approved baseline as AGC changes.</p>
            <ul className="mt-5 space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Periodic access reviews
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Audit log checks for ConMon
              </li>
              <li className="flex items-start gap-2">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                Release and scope tracking
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </section>
  );
}
