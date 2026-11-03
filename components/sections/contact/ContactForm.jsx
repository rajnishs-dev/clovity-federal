'use client';

import { useState } from 'react';
import Icon from '@/components/ui/Icon';
import { postFederalContact } from '@/lib/cms';

const INPUT =
  'mt-2 w-full rounded-xl border border-ink-900/15 px-4 py-3 outline-none focus:border-accent focus:ring-4 focus:ring-accent/15';

const SECTORS = ['Federal civilian', 'Defense', 'State & local', 'Education', 'Prime contractor / integrator', 'Other'];
const DEPLOYMENTS = ['Data Center', 'Server', 'Atlassian Cloud', 'Atlassian Government Cloud', 'Not using Atlassian yet'];
const TOPICS = [
  { value: 'agc', label: 'Government Cloud' },
  { value: 'migration', label: 'Migration' },
  { value: 'itsm', label: 'Service management' },
  { value: 'licensing', label: 'Licensing' },
  { value: 'managed', label: 'Managed services' },
  { value: 'security', label: 'Security & ATO support' },
];

// Contact form: saves to "Clovity Federal Contact" in Strapi (clovity-admin), which emails the federal team
export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const topics = data.getAll('topic').map(value => TOPICS.find(t => t.value === value)?.label || value);
    setStatus('sending');
    try {
      await postFederalContact({
        firstName: data.get('first').trim(),
        lastName: data.get('last').trim(),
        email: data.get('email').trim(),
        organization: data.get('org').trim(),
        sector: data.get('sector'),
        deployment: data.get('deployment'),
        topics,
        message: data.get('message').trim(),
        pageUrl: window.location.href,
      });
      // The form stays on screen, cleared, with the thank-you shown below the button
      form.reset();
      setStatus('sent');
    } catch (error) {
      console.error('[contact] submit failed:', error);
      setStatus('error');
    }
  }

  return (
    <form id="contact-form" className="rounded-lg bg-white p-5 shadow-lift sm:p-10" noValidate onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">First name *</span> <input required name="first" autoComplete="given-name" className={INPUT} />
        </label>{' '}
        <label className="block">
          <span className="text-sm font-medium">Last name *</span> <input required name="last" autoComplete="family-name" className={INPUT} />
        </label>{' '}
        <label className="block">
          <span className="text-sm font-medium">Work email *</span>{' '}
          <input required type="email" name="email" autoComplete="email" className={INPUT} />
        </label>{' '}
        <label className="block">
          <span className="text-sm font-medium">Agency or organization *</span>{' '}
          <input required name="org" autoComplete="organization" className={INPUT} />
        </label>{' '}
        <label className="block">
          <span className="text-sm font-medium">Sector</span>{' '}
          <select name="sector" className={`${INPUT} bg-white`}>
            {SECTORS.map(s => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </label>{' '}
        <label className="block">
          <span className="text-sm font-medium">Current deployment</span>{' '}
          <select name="deployment" className={`${INPUT} bg-white`}>
            {DEPLOYMENTS.map(d => (
              <option key={d}>{d}</option>
            ))}
          </select>
        </label>
      </div>
      <fieldset className="mt-6">
        <legend className="text-sm font-medium">What can we help with?</legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {TOPICS.map(t => (
            <label key={t.value} className="cursor-pointer">
              <input type="checkbox" name="topic" value={t.value} className="peer sr-only" />
              <span className="block rounded-full border border-ink-900/15 px-4 py-2 text-sm peer-checked:border-accent peer-checked:bg-accent-50 peer-checked:text-accent peer-focus-visible:ring-4 peer-focus-visible:ring-accent/25">
                {t.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <label className="mt-6 block">
        <span className="text-sm font-medium">Message</span>{' '}
        <textarea
          name="message"
          rows="4"
          className={INPUT}
          placeholder="Users, timeline, contract details or anything else that helps."
        />
      </label>
      <p className="mt-4 text-xs text-black">Please don't include classified, CUI or personal information in this form.</p>
      {status === 'error' && (
        <p className="mt-4 text-sm text-red-700" role="alert">
          We couldn't send your request. Please try again, or email{' '}
          <a href="mailto:federal@clovity.com" className="underline">
            federal@clovity.com
          </a>
          .
        </p>
      )}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-btn px-7 py-4 font-semibold text-white hover:bg-btn-dark disabled:opacity-60 sm:w-auto"
      >
        {status === 'sending' ? 'Sending...' : 'Send request'} <Icon name="send" className="h-4 w-4" />
      </button>
      {status === 'sent' && (
        <div id="form-success" className="mt-6 flex gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-800" role="status">
          <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            <strong className="font-semibold">Thanks, we've got it.</strong> A member of our federal team will reach out within one
            business day.
          </p>
        </div>
      )}
    </form>
  );
}
