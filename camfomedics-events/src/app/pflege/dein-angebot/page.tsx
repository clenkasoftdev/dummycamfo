import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Dein Angebot — Pflege' }

const PHOTO = 'https://cloud-1de12d.becdn.net/media/iW=651&iH=536&oX=76&oY=0&cW=500&cH=536/126d3fa70a6f086b6dc707390cf45145/012.jpg'

const OFFERINGS = [
  {
    title: 'Meet The Experts',
    body:  'Erhalte Einblicke in verschiedene medizinische Fachbereiche und sammle praktische Erfahrung in Blutabnahme und Patientenkontakt. Zusätzlich erhältst du eine offizielle Teilnahmebescheinigung für dein Volontariat bei Camfomedics – ein wertvoller Nachweis für deine Karriere.',
  },
  {
    title: 'Praktische Erfahrung in Kamerun (PinK)',
    body:  'Im Rahmen unseres PinK Programms erlebst du einen intensiven Wissenstransfer und sammelst Erfahrungen direkt vor Ort in Kamerun.',
  },
  {
    title: 'Online-Training im Clinical Learning',
    body:  'Tausche dich online mit erfahrenen Fachkräften aus Deutschland aus und erweitere deine praktischen Fähigkeiten.',
  },
  {
    title: 'Individuelles Coaching und wertvolle Kontakte',
    body:  'Erhalte persönliche Unterstützung und baue ein starkes Netzwerk mit anderen engagierten Pflegekräften und Experten auf.',
  },
  {
    title: 'Jährliche Tagung',
    body:  'Unsere Tagung wird jedes Jahr in einer anderen Stadt veranstaltet – in den letzten Jahren waren wir in Dortmund, Mannheim, Düsseldorf und Hannover. Freue dich auf ein interdisziplinäres Symposium und parallel laufende Karriere-Workshops speziell für Medizinstudierende und Pflegekräfte.',
  },
]

export default function DeinAngebotPage() {
  return (
    <>
      <PageHeader
        title="Dein Angebot"
        eyebrow="Pflege"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Pflege', href: '/pflege/' },
          { label: 'Dein Angebot' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Dein Angebot</p>
          <h2 className="font-display text-[26px] text-navy font-normal mb-10 leading-snug max-w-xl">
            Was wir dir bieten — Bildung, Erfahrung und Netzwerk
          </h2>

          <div className="space-y-0 divide-y divide-grey-200 border border-grey-200 rounded-lg overflow-hidden">
            {OFFERINGS.map((o, i) => (
              <div key={o.title} className={`flex gap-8 p-7 items-start ${i % 2 === 0 ? 'bg-white' : 'bg-grey-50'}`}>
                <div className="relative w-[120px] h-[100px] shrink-0 rounded-sm overflow-hidden hidden sm:block">
                  <Image src={PHOTO} alt={o.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-[17px] text-navy font-normal mb-2">{o.title}</h3>
                  <p className="text-[14px] text-grey-600 leading-loose">{o.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
