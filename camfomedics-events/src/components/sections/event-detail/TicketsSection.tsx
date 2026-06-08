import type { Event } from '@/types'
import { SITE } from '@/lib/site-config'

export default function TicketsSection({ event }: { event: Event }) {
  if (!event.tickets?.length) return null

  const paypalUrl = `https://www.paypal.com/paypalme/${SITE.paypalEmail}`

  return (
    <section id="tickets" className="bg-navy">
      <div className="max-w-5xl mx-auto px-7 py-11">
      <p className="text-[10px] tracking-[2px] uppercase text-white/40 mb-2">
        Anmeldung &amp; Tickets
      </p>
      <h2 className="font-display text-[24px] text-white font-normal mb-6">
        Jetzt einen Platz reservieren
      </h2>

      {/* Ticket cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-7">
        {event.tickets.map((tier) => (
          <div
            key={tier.audience}
            className="border border-white/15 rounded-lg p-5"
            style={{ background: 'rgba(255,255,255,0.06)' }}
          >
            <p className="text-[10px] tracking-[1px] uppercase text-white/40 mb-3">
              {tier.audience}
            </p>
            <p className="font-display text-[40px] text-white leading-none mb-0.5">
              € {tier.price}
            </p>
            <p className="text-[13px] text-white/40 mb-4">{tier.subLabel}</p>

            {/* Feature list */}
            <ul className="mb-5 divide-y divide-white/10">
              {tier.features.map((f) => (
                <li key={f} className="text-[13px] text-white/75 py-1.5">{f}</li>
              ))}
              {tier.dimFeature && (
                <li className="text-[13px] text-white/30 py-1.5">{tier.dimFeature}</li>
              )}
            </ul>

            {/* PayPal button */}
            <a
              href={paypalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#ffc439] text-[#003087]
                         font-bold text-[13px] px-4 py-2 rounded"
            >
              <span className="italic font-black tracking-tight">Pay</span>Pal · Jetzt zahlen
            </a>
          </div>
        ))}
      </div>

      {/* Bank transfer */}
      <div
        className="rounded-md p-5 max-w-lg border border-white/12 text-[13px]
                   text-white/55 leading-loose"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      >
        <p>
          <strong className="text-white/75">Alternativ per Banküberweisung</strong><br />
          Kontoname: <strong className="text-white/75">{SITE.bank.name}</strong> ·{' '}
          {SITE.bank.bank}<br />
          IBAN: <strong className="text-white/75">{SITE.bank.iban}</strong> ·{' '}
          BIC: <strong className="text-white/75">{SITE.bank.bic}</strong><br />
          Rückfragen:{' '}
          <a href={`mailto:${SITE.email}`} className="text-white/65 hover:text-white transition-colors">
            {SITE.email}
          </a>{' '}
          ·{' '}
          <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="text-white/65 hover:text-white transition-colors">
            {SITE.phone}
          </a>{' '}
          (WhatsApp)
        </p>
      </div>
      </div>
    </section>
  )
}
