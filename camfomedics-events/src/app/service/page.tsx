import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Service' }

const SERVICES = [
  {
    image:   'https://cloud-1de12d.becdn.net/media/iW=365&iH=161&oX=103&oY=0&cW=160&cH=161/3bc686bd5b0a11b478e5ed54280e5540/image.jpg',
    title:   'Für Studierende',
    body:    'Seit der Gründung unseres Vereins durch Medizinstudenten aus Kamerun wuchs nicht nur die Anzahl der studentischen Mitglieder, sondern auch die Anzahl der ärztlichen Mitglieder.',
    href:    '/service/fuer-studierende/',
  },
  {
    image:   'https://cloud-1de12d.becdn.net/media/iW=365&iH=161&oX=66&oY=0&cW=160&cH=161/145562bc31a5325168267ded0d34ccae/image.jpg',
    title:   'Für Ärzte',
    body:    'Unsere Organisation besteht zurzeit aus Ärzten, Apothekern, Krankenschwestern, Pflegern, Studenten im Bereich der Medizin, Pharmazie, Zahnheilkunde, biomedizinischer Technologie sowie Ehrenmitgliedern.',
    href:    '/service/fuer-aerzte/',
  },
  {
    image:   'https://cloud-1de12d.becdn.net/media/iW=657&iH=160&oX=189&oY=0&cW=160&cH=160/c28db1a3e3ae977a88da060de37f27e2/image.jpg',
    title:   'Beratungsangebote',
    body:    'Wir bieten Beratung und praktische Unterstützung für Studierende und Ärzte. In unseren Projekten bieten wir Möglichkeiten für Praktika in Kamerun.',
    extras:  [
      'Treuhänderische Verwaltung (R4D 2015)',
      'Businesskontakte und Investitionsberatung',
      'Investitionsberatung',
    ],
    href:    null,
  },
]

export default function ServicePage() {
  return (
    <>
      <PageHeader
        title="Service"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Service' },
        ]}
      />

      {/* Intro */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 pt-14 pb-4">
          <p className="eyebrow mb-2">Serviceangebot</p>
          <h2 className="font-display text-[26px] text-navy font-normal leading-snug">
            Wir bieten drei Arten von Dienstleistungen für Studenten, Mediziner und
            Beratungsdienste an
          </h2>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="bg-grey-50 border border-grey-200 rounded-lg overflow-hidden
                           flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 bg-grey-100 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-[18px] text-navy font-normal mb-3">
                    {s.title}
                  </h3>
                  <p className="text-[13px] text-grey-600 leading-loose mb-4 flex-1">
                    {s.body}
                  </p>

                  {/* Extra bullet points for Beratungsangebote */}
                  {s.extras && (
                    <ul className="mb-5 space-y-1.5">
                      {s.extras.map((e) => (
                        <li key={e} className="flex items-start gap-2 text-[13px] text-grey-800">
                          <span className="text-red mt-0.5 shrink-0">›</span>
                          <strong>{e}</strong>
                        </li>
                      ))}
                    </ul>
                  )}

                  {s.href && (
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-1.5 text-[13px] text-red
                                 font-medium hover:underline mt-auto"
                    >
                      Weiterlesen →
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Sekretariat block */}
      <section className="bg-grey-50 border-t border-grey-200">
        <div className="max-w-5xl mx-auto px-7 py-12">
          <div className="max-w-sm">
            <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-3">Sekretariat</p>
            <p className="font-display text-[28px] text-navy font-normal mb-1">
              +49 1573 9465668
            </p>
            <p className="text-[13px] text-grey-400 mb-5">
              Phone: 09:00 am – 11:00 am · Mon – Fri
            </p>
            <div className="flex gap-3">
              <a
                href="tel:+4915739465668"
                className="px-5 py-2.5 bg-navy text-white text-[13px] rounded-sm
                           hover:bg-navy/90 transition-colors"
              >
                Anrufen
              </a>
              <a
                href="https://wa.me/+4915739465668"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white
                           text-[13px] rounded-sm hover:bg-[#1ebe5d] transition-colors"
              >
                {/* WhatsApp icon */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 21l3.94-.882A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.946 7.946 0 01-4.073-1.118l-.292-.174-3.038.68.734-2.955-.19-.303A7.954 7.954 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
