import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Aktuelles — Pflege' }

export default function AktuellesPage() {
  return (
    <>
      <PageHeader
        title="Aktuelles"
        eyebrow="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege', href: '/pflege/' },
          { label: 'Aktuelles' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="text-[14px] text-grey-600">Aktuelle Neuigkeiten werden hier demnächst veröffentlicht.</p>
        </div>
      </section>
    </>
  )
}
