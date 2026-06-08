import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Vorstand' }

const VORSTAND = [
  { name: 'Bernice Ndofor-Fohtung', role: 'Präsidentin',        photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/9e0d2617738b7442e64034723731890a/bernice.jpg' },
  { name: 'Estelle Yongwa',         role: 'Vize-Präsidentin',   photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/5160b1c1cb95f5a107a13ade59918fb4/Estelle-Yongwa-Pami-s.jpg' },
  { name: 'Bores Manfouo Keugue',   role: 'Schatzmeister',       photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=365&oX=0&oY=0&cW=296&cH=349/589094bac1b47f5d31528409be5e5feb/boris.jpg' },
  { name: 'Dr. med. Joseph Nounla', role: 'Generalsekretär',     photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/5c44e81c87b23c77ce1b7f85ac38ae14/02-Dr--med-Joseph-Nounla-s.jpg' },
  { name: 'Charlene Diane Yefouo',  role: 'Kassenprüferin',      photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/daaaf03671785ea8f463c790d7ff2ad6/dianne.jpg' },
  { name: 'Diana Munteh',           role: 'Pharmareferentin',    photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=369&oX=0&oY=9&cW=296&cH=349/be4b9b78a8872c1782c5d0786f5bb153/Diana-Munteh-s.jpg' },
  { name: 'Nelson Noah II Sankara', role: 'Medizinreferent',     photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/3238b016d56044e9a0062c2b5e7ebdbb/noah.jpg' },
  { name: 'Daniel UM UM Tsakou',    role: 'Studentenreferent',   photo: 'https://cloud-1de12d.becdn.net/media/iW=296&iH=370&oX=0&oY=10&cW=296&cH=349/20a288f004ac4a9f1b58fed7acab69d0/Daniel-Um-s.jpg' },
]

export default function VorstandPage() {
  return (
    <>
      <PageHeader
        title="Vorstand"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Vorstand' },
        ]}
      />

      {/* Board members */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Vorstand</p>
          <h2 className="font-display text-[24px] text-navy font-normal mb-8">
            2025 Gewählter Vorstand
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {VORSTAND.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative w-full aspect-[3/4] mb-3 overflow-hidden rounded-sm border border-grey-200">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-[14px] font-medium text-navy leading-snug">{m.name}</p>
                <p className="text-[12px] text-red mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Group photo */}
      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-10">
          <p className="eyebrow mb-4">Neu gewählter Vorstand</p>
          <div className="relative w-full h-[280px] rounded-sm overflow-hidden">
            <Image
              src="https://cloud-1de12d.becdn.net/media/iW=1170&iH=789&oX=0&oY=60&cW=1170&cH=368/e15c3aef30ee5a95226b462a69e5394e/vorstand-real.jpg"
              alt="Gewählter Vorstand Camfomedics"
              fill
              className="object-cover object-top"
            />
          </div>
          <p className="text-[12px] text-grey-400 mt-3 leading-relaxed">
            Nelson Noah II Sankara (Medizinreferent), Dr. med. Joseph Nounla (Generalsekretär),
            Bernice Ndofor-Fohtung (Präsidentin), Charlene Diane Yefouo (Kassenprüferin),
            Daniel Um (Studentenreferent), Estelle Yongwa (Vize-Präsidentin),
            Bores Manfouo Keugue (Schatzmeister), Diana Munteh (Pharmareferentin)
          </p>
        </div>
      </section>

      {/* Projektkoordinatorin */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Treffen Sie das Team</p>
          <h2 className="font-display text-[24px] text-navy font-normal mb-6">Projektkoordinatorin</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="text-[14px] text-grey-600 leading-loose">
              <p className="mb-4">
                Tatiana ist unsere Projektassistentin seit April 2020 und kümmert sich um alle
                administrativen Aufgaben und steht euch ebenfalls für vereinsrelevante Fragen
                gerne zur Verfügung.
              </p>
              <p className="font-medium text-navy text-[16px] mb-1">Tatiana Ngobo</p>
              <p className="text-grey-400 text-[13px] mb-6">Projektassistentin</p>
            </div>

            <div className="bg-grey-50 border border-grey-200 rounded-sm p-6">
              <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-4">Melden Sie sich gern</p>
              <div className="space-y-3 text-[13px]">
                <div>
                  <p className="text-grey-400 mb-1">Öffnungszeiten</p>
                  <p className="font-medium text-navy">Mon – Fri, 09:00 bis 11:00 Uhr</p>
                </div>
                <div>
                  <a href="mailto:service@camfomedics.org" className="text-red hover:underline">
                    service@camfomedics.org
                  </a>
                </div>
                <div>
                  <a href="tel:004915739465668" className="text-red hover:underline">
                    01573 9465668
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
