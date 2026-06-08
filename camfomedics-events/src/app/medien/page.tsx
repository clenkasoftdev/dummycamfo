import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Medien' }

const SUBPAGES = [
  { label: 'Fotogallerie',      href: '/medien/fotogallerie/',      desc: 'Bilder von unseren Veranstaltungen und Projekten.' },
  { label: 'Videogalerie',      href: '/medien/videogalerie/',      desc: 'Videos und Aufzeichnungen von Camfomedics.' },
  { label: 'Dokumente',         href: '/medien/dokumente/',         desc: 'Formulare, Berichte und offizielle Dokumente.' },
  { label: 'Newsletter-Archiv', href: '/medien/newsletter-archiv/', desc: 'Archiv unserer vergangenen Newsletter.' },
]

export default function MedienPage() {
  return (
    <>
      <PageHeader
        title="Medien"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Medien' },
        ]}
      />
      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Medien</p>
          <h2 className="font-display text-[26px] text-navy font-normal mb-8">Diverse Medien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SUBPAGES.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="group bg-white border border-grey-200 rounded-lg p-6
                           hover:border-red hover:shadow-[0_2px_16px_rgba(12,26,60,0.06)]
                           transition-all"
              >
                <h3 className="font-display text-[18px] text-navy font-normal mb-2
                               group-hover:text-red transition-colors">
                  {p.label}
                </h3>
                <p className="text-[13px] text-grey-600 leading-relaxed">{p.desc}</p>
                <span className="block mt-4 text-[12px] text-red">Öffnen →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
