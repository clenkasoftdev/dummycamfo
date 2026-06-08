import Image from 'next/image'
import { SITE } from '@/lib/site-config'

export default function Footer() {
  return (
    <footer className="bg-navy text-white/55">

      {/* ── Centred logo ── */}
      <div className="border-b border-white/10 py-6 flex justify-center">
        <Image
          src="/images/camfomedics_logo.png"
          alt="Camfomedics e.V."
          width={160}
          height={54}
          className="h-[44px] w-auto object-contain brightness-0 invert opacity-90"
        />
      </div>

      {/* ── Main footer grid ── */}
      <div className="max-w-5xl mx-auto px-7 pt-8 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">

          {/* Brand + description */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Über Uns — Camfomedics e.V.</h4>
            <p className="text-[13px] leading-loose">
              Der Name Camfomedics ist eine Abkürzung für Deutsch-Kamerunisches Forum für die Medizinischen
              und Paramedizinischen Wissenschaften e.V.
            </p>
          </div>

          {/* Registereintrag */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Registereintrag</h4>
            <p className="text-[13px] leading-loose">
              Eintragung im Vereinsregister.<br />
              Registergericht: <strong className="text-white/75">Giessen</strong><br />
              Registernummer: <strong className="text-white/75">VR2295</strong><br />
              <span className="text-white/40">Ärzte, Studenten der Medizin, Pharmazie und Zahnheilkunde</span>
            </p>
          </div>

          {/* Impressum */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Impressum</h4>
            <p className="text-[13px] leading-loose">
              Angaben gemäß § 5 TMG<br />
              <strong className="text-white/75">{SITE.impressum.vorsitzende}</strong><br />
              Vertreten durch:<br />
              <strong className="text-white/75">{SITE.impressum.vorsitzende}</strong><br />
              <strong className="text-white/75">{SITE.impressum.stellvertreterin}</strong><br />
              <span className="text-white/40">Seit Oct. 2023</span>
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Kontakt</h4>
            <div className="text-[13px] leading-loose">
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="block hover:text-white transition-colors">{SITE.phone}</a>
              <a href={`mailto:${SITE.email}`} className="block hover:text-white transition-colors">{SITE.email}</a>
              <p className="text-white/40 mt-1">{SITE.address}</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-4 flex flex-wrap justify-between items-center gap-3 text-[12px]">
          <span>Copyright © 1994–2026 Camfomedics e.V. Alle Rechte vorbehalten.</span>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'Startseite',      href: '/' },
              { label: 'Über Uns',        href: '/verein/ueber-uns/' },
              { label: 'Datenschutz',     href: '/datenschutz/' },
              { label: 'Impressum',       href: '/impressum/' },
              { label: 'Kontaktformular', href: '/kontakt/' },
            ].map((l) => (
              <a key={l.label} href={l.href} className="text-white/35 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

