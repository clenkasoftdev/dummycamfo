import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Partner — Pflege' }

export default function PflegePartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner"
        eyebrow="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege', href: '/pflege/' },
          { label: 'Partner' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="text-[14px] text-grey-600">Unsere Pflege-Partner werden hier demnächst vorgestellt.</p>
        </div>
      </section>
    </>
  )
}
