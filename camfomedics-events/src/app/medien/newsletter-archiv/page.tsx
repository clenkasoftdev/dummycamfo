import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Newsletter-Archiv — Medien' }

export default function NewsletterArchivPage() {
  return (
    <>
      <PageHeader
        title="Newsletter-Archiv"
        eyebrow="Medien"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Medien', href: '/medien/' },
          { label: 'Newsletter-Archiv' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="text-[14px] text-grey-600">
            Das Newsletter-Archiv wird hier demnächst verfügbar sein.
          </p>
        </div>
      </section>
    </>
  )
}
