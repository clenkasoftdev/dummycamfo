import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Pflege' }

const SUBPAGES = [
  { label: 'Aktuelles',       href: '/pflege/aktuelles/',      desc: 'Aktuelle Neuigkeiten aus dem Bereich Pflege.' },
  { label: 'Dein Angebot',    href: '/pflege/dein-angebot/',   desc: 'Meet the Experts, Praktika, Online-Training und Karriere-Workshops.' },
  { label: 'Partner',         href: '/pflege/partner/',         desc: 'Unsere Partner im Pflegebereich.' },
  { label: 'Beitritt',        href: '/pflege/beitritt/',        desc: 'Werde Teil unserer Pflegegemeinschaft.' },
  { label: 'Ansprechpartner', href: '/pflege/ansprechpartner/', desc: 'Deine Ansprechpartner für alle Fragen rund um Pflege.' },
]

export default function PflegePage() {
  return (
    <>
      <PageHeader
        title="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege' },
        ]}
      />
      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Pflege</p>
          <h2 className="font-display text-[26px] text-navy font-normal mb-8 leading-snug">
            Pflege bei Camfomedics e.V.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBPAGES.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group bg-white border border-grey-200 rounded-lg p-6
                           hover:border-red hover:shadow-[0_2px_16px_rgba(12,26,60,0.06)]
                           transition-all"
              >
                <h3 className="font-display text-[17px] text-navy font-normal mb-2
                               group-hover:text-red transition-colors">
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
