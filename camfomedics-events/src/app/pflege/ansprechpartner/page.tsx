import type { Metadata } from 'next'
import { SITE } from '@/lib/site-config'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Ansprechpartner — Pflege' }

export default function AnsprechpartnerPage() {
  return (
    <>
      <PageHeader
        title="Ansprechpartner"
        eyebrow="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege', href: '/pflege/' },
          { label: 'Ansprechpartner' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <h2 className="font-display text-[24px] text-navy font-normal mb-8">
            Deine Ansprechpartner
          </h2>
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-7 max-w-md">
            <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-4">Sekretariat</p>
            <p className="font-medium text-navy mb-1">Tatiana Ngobo</p>
            <p className="text-[13px] text-grey-400 mb-5">Projektassistentin · Mo–Fr, 09:00–11:00 Uhr</p>
            <div className="space-y-2 text-[13px]">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 text-red hover:underline">
                <span>{SITE.email}</span>
              </a>
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="flex items-center gap-2 text-red hover:underline">
                <span>{SITE.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
