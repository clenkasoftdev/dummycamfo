import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Dokumente — Medien' }

const DOCUMENTS = [
  {
    title:    'Anmeldung CAM 2024 — Hannover',
    year:     '2024',
    url:      'https://res.cloudinary.com/woureesystems/image/upload/v1715010286/Camfomedics/documents/Anmeldung_Hannover2024.pdf',
  },
  {
    title:    'Vorläufiges Programm CAM 2025 — Dortmund',
    year:     '2025',
    url:      'https://cloud-1de12d.becdn.net/customfile/078aeaccd81be9d5620c6a1e86e1b12182965df1577dde25f40a47ecf8c4519d/vorl-program-dortmund-2025.pdf',
  },
  {
    title:    'Anmeldeformular CAM 2023 — Düsseldorf',
    year:     '2023',
    url:      'https://res.cloudinary.com/woureesystems/image/upload/v1695324456/Camfomedics/documents/2023/Anmeldeformular_CAM2023_Du%CC%88sseldorf.pdf',
  },
  {
    title:    'PinK Infos & Anmeldung',
    year:     '2023',
    url:      'https://res.cloudinary.com/woureesystems/image/upload/v1683327767/Camfomedics/documents/PINK-Infos-Anmeldung.pdf',
  },
]

export default function DokumentePage() {
  return (
    <>
      <PageHeader
        title="Dokumente"
        eyebrow="Medien"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Medien', href: '/medien/' },
          { label: 'Dokumente' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <h2 className="font-display text-[24px] text-navy font-normal mb-8">
            Formulare & Dokumente
          </h2>
          <div className="divide-y divide-grey-200 border border-grey-200 rounded-lg overflow-hidden">
            {DOCUMENTS.map((doc) => (
              <div key={doc.title} className="flex items-center justify-between px-6 py-4 bg-white hover:bg-grey-50 transition-colors">
                <div className="flex items-center gap-4">
                  {/* PDF icon */}
                  <div className="w-9 h-9 bg-red/10 rounded-sm flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-navy">{doc.title}</p>
                    <p className="text-[12px] text-grey-400">{doc.year} · PDF</p>
                  </div>
                </div>
                <a
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[13px] text-red hover:underline shrink-0 ml-4"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Herunterladen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
