import Image from 'next/image'
import { SITE, CONTACT_SECTION as C } from '@/lib/site-config'

// Icons matching the original site's line-style SVGs
const VorstandIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 mb-3 text-white/60">
    <rect x="4" y="8" width="12" height="8"/><rect x="18" y="8" width="12" height="8"/><rect x="32" y="8" width="12" height="8"/>
    <line x1="10" y1="16" x2="10" y2="24"/><line x1="24" y1="16" x2="24" y2="24"/><line x1="38" y1="16" x2="38" y2="24"/>
    <line x1="10" y1="24" x2="38" y2="24"/>
    <rect x="16" y="24" width="16" height="8"/>
  </svg>
)

const SekretariatIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-9 h-9 mb-3 text-white/60">
    <circle cx="24" cy="16" r="8"/>
    <path d="M8 40c0-8.84 7.16-16 16-16s16 7.16 16 16"/>
  </svg>
)

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden min-h-[320px] flex items-center">
      {/* Background photo */}
      <Image
        src={C.backgroundImage}
        alt=""
        fill
        className="object-cover object-center"
      />
      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-7 py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — contact */}
          <div>
            {/* Question mark icon */}
            <div className="w-8 h-8 rounded-full bg-red flex items-center justify-center mb-5">
              <span className="text-white font-bold text-[15px] leading-none">?</span>
            </div>
            <h2 className="font-display text-[32px] text-white font-normal mb-4 leading-tight">
              Haben Sie eine Frage?
            </h2>
            <p className="text-[14px] text-white/70 mb-1">Rufen Sie uns an:</p>
            <p className="text-[14px] text-white/70 mb-6">
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="hover:text-white transition-colors">
                {SITE.phone}
              </a>
              {' '}für Details oder
            </p>
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center px-6 py-2.5 bg-red text-white text-[14px]
                         font-medium rounded-sm hover:bg-red/90 transition-colors"
            >
              Senden Sie uns eine Email
            </a>
          </div>

          {/* Right — Vorstand + Sekretariat */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <VorstandIcon />
              <div>
                <h3 className="text-[15px] font-medium text-white mb-1">{C.vorstand.title}</h3>
                <p className="text-[13px] text-white/60">{C.vorstand.text}</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <SekretariatIcon />
              <div>
                <h3 className="text-[15px] font-medium text-white mb-1">{C.sekretariat.title}</h3>
                <p className="text-[13px] text-white/60">{C.sekretariat.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
