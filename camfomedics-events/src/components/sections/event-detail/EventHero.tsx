import type { Event } from '@/types'
import Image from 'next/image'
import TicketsScrollBtn from './TicketsScrollBtn'
import Countdown from './Countdown'

// ── Helpers ────────────────────────────────────────────────────────────────
function parseDateFromGerman(german: string): string {
  // "Samstag, 04. Oktober 2026" → "2026-10-04"
  const months: Record<string, string> = {
    Januar: '01', Februar: '02', März: '03', April: '04',
    Mai: '05', Juni: '06', Juli: '07', August: '08',
    September: '09', Oktober: '10', November: '11', Dezember: '12',
  }
  const m = german.match(/(\d{2})\.\s+(\w+)\s+(\d{4})/)
  if (!m) return ''
  return `${m[3]}-${months[m[2]] ?? '01'}-${m[1]}`
}

// ── Component ───────────────────────────────────────────────────────────────
export default function EventHero({ event }: { event: Event }) {
  const targetDate = event.schedule?.[1]?.date
    ? parseDateFromGerman(event.schedule[1].date)
    : null

  return (
    <>
      {/*
       * HERO — full-bleed image with dark navy overlay.
       * Drop the event photo at the path in event.heroImage.
       * Until then the navy gradient acts as a tasteful fallback.
       */}
      <section className="relative min-h-[600px] flex flex-col justify-end overflow-hidden">

        {/* Background image */}
        {event.heroImage ? (
          <Image
            src={event.heroImage}
            alt={event.title}
            fill
            priority
            className="object-cover object-center"
          />
        ) : (
          /* Gradient fallback until a real photo is supplied */
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #0c1a3c 0%, #1a2d5a 50%, #0c1a3c 100%)',
            }}
          />
        )}

        {/* Dark overlay so text is always legible over any photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(12, 26, 60, 0.72)' }}
        />

        {/* Content — sits above the overlay */}
        <div className="relative z-10 max-w-5xl mx-auto px-7 pb-10 pt-24">
          {/* Organisation + edition badge */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[11px] tracking-[2px] uppercase text-white/50">
              Camfomedics e.V.
            </span>
            {event.edition && (
              <>
                <span className="text-white/30">·</span>
                <span className="bg-red text-white text-[11px] tracking-[1px] px-2.5 py-0.5 rounded-sm">
                  {event.edition}
                </span>
              </>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-[38px] md:text-[48px] text-white font-normal
                         leading-tight max-w-2xl mb-6">
            {event.title}
          </h1>

          {/* Date · Venue */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-8">
            <div className="flex items-center gap-2">
              {/* Calendar icon */}
              <svg className="w-4 h-4 text-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              <span className="text-[15px] text-white font-medium">{event.date}</span>
            </div>
            <div className="flex items-center gap-2">
              {/* Location icon */}
              <svg className="w-4 h-4 text-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span className="text-[15px] text-white">{event.location}</span>
            </div>
            {event.format && (
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-red shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
                <span className="text-[15px] text-white/75">{event.format}</span>
              </div>
            )}
          </div>

          {/* CTAs — registration form + scroll to tickets */}
          <div className="flex flex-wrap gap-3">
            {event.registrationFormUrl && (
              <a
                href={event.registrationFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[14px]
                           font-medium bg-red text-white hover:bg-red/90 transition-colors"
              >
                {/* Download icon */}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Anmeldeformular
              </a>
            )}
            <TicketsScrollBtn variant="outline" />
          </div>
        </div>
      </section>

      {/* Countdown strip — extends the navy feel */}
      {targetDate && (
        <div className="bg-navy border-b border-white/10">
          <div className="max-w-5xl mx-auto px-7 py-3.5 flex items-center gap-10">
            <Countdown targetDate={targetDate} />
            <span className="text-[12px] text-white/35 ml-auto">bis zum Symposium</span>
          </div>
        </div>
      )}
    </>
  )
}

