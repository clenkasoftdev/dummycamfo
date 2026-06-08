import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Beitritt — Pflege' }

export default function BeitrittsPage() {
  return (
    <>
      <PageHeader
        title="Beitritt"
        eyebrow="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege', href: '/pflege/' },
          { label: 'Beitritt' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14 max-w-2xl">
          <h2 className="font-display text-[24px] text-navy font-normal mb-5">
            Werde Mitglied bei Camfomedics e.V.
          </h2>
          <p className="text-[14px] text-grey-600 leading-loose mb-8">
            Als Mitglied bei Camfomedics e.V. trägst du aktiv dazu bei, die Gesundheitsversorgung
            in Kamerun zu verbessern und ein starkes Netzwerk in Deutschland und Europa aufzubauen.
            Der jährliche Mitgliedsbeitrag beträgt <strong className="text-navy">50 Euro</strong>.
          </p>
          <Link
            href="/mitgliedschaft/"
            className="inline-flex items-center px-6 py-2.5 bg-red text-white text-[14px]
                       font-medium rounded-sm hover:bg-red/90 transition-colors"
          >
            Zum Beitrittsformular →
          </Link>
        </div>
      </section>
    </>
  )
}
