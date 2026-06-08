'use client'

import { useState } from 'react'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/site-config'

// For form submission on static hosting, use Formspree or similar.
// Update the action URL below with your Formspree endpoint.
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export default function KontaktPage() {
  const [submitted, setSubmitted] = useState(false)
  const [privacy, setPrivacy] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    await fetch(FORMSPREE_URL, {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    })
    setSubmitted(true)
  }

  return (
    <>
      <PageHeader
        title="Kontakt"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Kontakt' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

            {/* ── Contact form ── */}
            <div>
              <p className="eyebrow mb-2">Kontaktformular</p>
              <h2 className="font-display text-[24px] text-navy font-normal mb-6">
                Schreiben Sie uns
              </h2>
              <p className="text-[14px] text-grey-600 mb-8">
                Bitte benutzen Sie das untenstehende Formular, um mit uns in Kontakt zu treten.
              </p>

              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                  <p className="text-[15px] font-medium text-green-800 mb-1">Vielen Dank!</p>
                  <p className="text-[13px] text-green-700">
                    Ihre Nachricht wurde gesendet. Wir melden uns bald.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      className="block text-[12px] font-medium text-grey-600 mb-1.5"
                      htmlFor="name"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Ihr Name"
                      className="w-full border border-grey-200 rounded-sm px-4 py-2.5 text-[14px]
                                 text-grey-800 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[12px] font-medium text-grey-600 mb-1.5"
                      htmlFor="email"
                    >
                      E-Mail *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="ihre@email.de"
                      className="w-full border border-grey-200 rounded-sm px-4 py-2.5 text-[14px]
                                 text-grey-800 focus:outline-none focus:border-navy transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-[12px] font-medium text-grey-600 mb-1.5"
                      htmlFor="message"
                    >
                      Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Ihre Nachricht..."
                      className="w-full border border-grey-200 rounded-sm px-4 py-2.5 text-[14px]
                                 text-grey-800 focus:outline-none focus:border-navy transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-start gap-3">
                    <input
                      id="privacy"
                      type="checkbox"
                      required
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-0.5 shrink-0"
                    />
                    <label htmlFor="privacy" className="text-[13px] text-grey-600 leading-relaxed">
                      Ich akzeptiere die{' '}
                      <a href="/datenschutz/" className="text-red hover:underline">
                        Datenschutzerklärung
                      </a>
                    </label>
                  </div>
                  <button
                    type="submit"
                    disabled={!privacy}
                    className="w-full py-3 bg-red text-white text-[14px] font-medium rounded-sm
                               hover:bg-red/90 transition-colors
                               disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Nachricht senden
                  </button>
                </form>
              )}
            </div>

            {/* ── Contact info ── */}
            <div>
              <p className="eyebrow mb-2">Direkter Kontakt</p>
              <h2 className="font-display text-[24px] text-navy font-normal mb-8">
                So erreichen Sie uns
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red/10 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-1">E-Mail</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="text-[15px] font-medium text-navy hover:text-red transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red/10 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-1">Telefon</p>
                    <a
                      href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                      className="text-[15px] font-medium text-navy hover:text-red transition-colors"
                    >
                      {SITE.phone}
                    </a>
                    <p className="text-[12px] text-grey-400 mt-0.5">auch per WhatsApp erreichbar</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red/10 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-1">Postanschrift</p>
                    <p className="text-[15px] font-medium text-navy">{SITE.address}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-red/10 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-1">Sprechzeiten</p>
                    <p className="text-[15px] font-medium text-navy">Mo – Fr, 09:00 – 11:00 Uhr</p>
                  </div>
                </div>

                {/* Donation box */}
                <div className="mt-8 bg-navy rounded-lg p-6">
                  <p className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Spenden</p>
                  <p className="text-[14px] text-white/80 mb-5">
                    Helfen Sie uns, einen Unterschied zu machen. Sofortüberweisung:
                  </p>
                  <div className="space-y-1.5 text-[13px]">
                    <div className="flex gap-3">
                      <span className="text-white/40 w-20 shrink-0">Kontoname</span>
                      <span className="text-white font-medium">{SITE.bank.name}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/40 w-20 shrink-0">Bank</span>
                      <span className="text-white font-medium">{SITE.bank.bank}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/40 w-20 shrink-0">IBAN</span>
                      <span className="text-white font-medium font-mono tracking-wide">{SITE.bank.iban}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-white/40 w-20 shrink-0">BIC</span>
                      <span className="text-white font-medium font-mono">{SITE.bank.bic}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
