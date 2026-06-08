import type { Metadata } from 'next'
import Link from 'next/link'
import { PROJECTS } from '@/lib/site-config'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Projekte' }

export default function ProjektePage() {
  return (
    <>
      <PageHeader
        title="Projekte"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte' },
        ]}
      />

      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Projekte</p>
          <h2 className="font-display text-[26px] text-navy font-normal mb-8 leading-snug">
            Unsere Projekte in Deutschland und Kamerun
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.filter((p) => p.active).map((p) => (
              <Link
                key={p.slug}
                href={`/projekte/${p.slug}/`}
                className="group bg-white border border-grey-200 rounded-lg p-7
                           hover:border-red hover:shadow-[0_2px_16px_rgba(12,26,60,0.06)]
                           transition-all"
              >
                <span className="inline-block text-[10px] tracking-[1.5px] uppercase
                                 bg-red/10 text-red px-2.5 py-1 rounded-sm mb-4">
                  {p.tag}
                </span>
                <h3 className="font-display text-[22px] text-navy font-normal mb-3
                               group-hover:text-red transition-colors">
                  {p.label}
                </h3>
                <p className="text-[13px] text-grey-600 leading-relaxed mb-5">{p.shortDesc}</p>
                <span className="text-[13px] text-red font-medium">Mehr erfahren →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
