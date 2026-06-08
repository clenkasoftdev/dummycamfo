import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Verein' }

const SUBPAGES = [
  { label: 'Über Uns',             href: '/verein/ueber-uns/',             desc: 'Geschichte und Mission von Camfomedics e.V.' },
  { label: 'Partner und Sponsoren',href: '/verein/partner/',                desc: 'Unsere Partner und Sponsoren aus Deutschland und Europa.' },
  { label: 'Vorstand',             href: '/verein/vorstand/',               desc: 'Der gewählte Vorstand und das Sekretariat.' },
  { label: 'Vision und Strategie', href: '/verein/vision-und-strategie/',   desc: 'Unsere Ziele und strategische Ausrichtung.' },
  { label: 'Geschichte',           href: '/verein/geschichte/',             desc: 'Von der Gründung 1994 bis heute.' },
  { label: 'Aufgaben',             href: '/verein/aufgaben/',               desc: 'Was wir tun — in Deutschland und Kamerun.' },
]

export default function VereinPage() {
  return (
    <>
      <PageHeader
        title="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein' },
        ]}
      />

      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBPAGES.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group bg-white border border-grey-200 rounded-lg p-6
                           hover:border-red hover:shadow-[0_2px_16px_rgba(12,26,60,0.06)]
                           transition-all"
              >
                <h3 className="font-display text-[17px] text-navy font-normal mb-2 group-hover:text-red transition-colors">
                  {p.label}
                </h3>
                <p className="text-[13px] text-grey-600 leading-relaxed">{p.desc}</p>
                <span className="block mt-4 text-[12px] text-red">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
