import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'iMED — Projekte' }

const GOALS = [
  'den Bedarf (das Angebot) an Weiter- und Fortbildung decken (vergrößern)',
  '„Training on the Job" verbessern',
  'die Ausstattung mit angepassten (nachhaltigen) „minimal invasiven" medizinischen Geräten sowie die Ausbildung zur Nutzung dieser Geräte verbessern',
  'einfache, schnelle „Point-of-Care" diagnostische Möglichkeiten einführen',
  'das Management und Organisation von klinischen Abläufen und Prozessen in der Praxis optimieren.',
]

const ACTIVITIES = [
  {
    image:   'https://cloud-1de12d.becdn.net/media/iW=375&iH=342&oX=0&oY=31&cW=375&cH=280/729d2e5357e6fd1966ab6854225a2d35/image.jpg',
    caption: 'iMED Wound and trauma training',
  },
  {
    image:   'https://cloud-1de12d.becdn.net/media/iW=375&iH=281&oX=0&oY=0&cW=375&cH=281/075bbba5cdc5c70192a0fdae489e67ce/image.jpg',
    caption: 'iMED Ultrasound training',
  },
]

export default function ImedPage() {
  return (
    <>
      <PageHeader
        title="iMED"
        eyebrow="Projekte"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte', href: '/projekte/' },
          { label: 'iMED' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">

          {/* iMED logo + heading */}
          <div className="flex items-center gap-4 mb-6">
            <Image
              src="https://cloud-1de12d.becdn.net/media/iW=141&iH=92&oX=0&oY=1&cW=141&cH=90/7a1edea557bf024370e8e9bd448d07fe/image.png"
              alt="iMED Logo"
              width={100}
              height={65}
              className="object-contain"
            />
          </div>
          <h2 className="font-display text-[26px] text-navy font-normal mb-8 max-w-2xl leading-snug">
            Improving Medical Education and Health Care Delivery through Diaspora Engagement
          </h2>

          {/* Hero image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
            <div className="relative h-[340px] rounded-sm overflow-hidden border border-grey-200">
              <Image
                src="https://cloud-1de12d.becdn.net/media/iW=368&iH=368&oX=0&oY=2&cW=368&cH=364/145d3ae50b1e9d6a992fc62dd6e60ccd/image.jpg"
                alt="iMED training 2014 Mutengene"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-navy/70 px-4 py-2">
                <p className="text-[12px] text-white/80">iMED training — 2014 Mutengene, South West Region Cameroon</p>
              </div>
            </div>

            <div className="space-y-4 text-[14px] text-grey-600 leading-loose">
              <p>
                Das größte Problem des Gesundheitssystems in Kamerun ist der Mangel an
                Fachpersonal. Ursache ist eine fehlende Aus-, Weiter- und
                Fortbildungsinfrastruktur sowie die Emigration von Personal.
              </p>
              <p>
                Viele Ärzte und Pflegepersonal klagen über schlechte Arbeitsbedingungen in
                den Krankenhäusern und eine mangelnde Ausstattung mit medizinischen Geräten.
                Zudem gibt es kaum Möglichkeiten, neue Qualifikationen zu erwerben — trotz
                zunehmender Innovationen in der Medizin weltweit.
              </p>
              <p>
                Ziel des Projekts ist es, eine enge Kooperation von Fachärzten und Fachpersonal
                aus der Diaspora mit zwei ausgewählten Lehrkrankenhäusern in Kamerun zu
                ermöglichen.
              </p>
            </div>
          </div>

          {/* Goals */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8 max-w-3xl mb-12">
            <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-5">Unsere Ziele</p>
            <p className="text-[14px] text-grey-600 leading-loose mb-5">Wir möchten:</p>
            <ul className="space-y-3">
              {GOALS.map((g, i) => (
                <li key={i} className="flex items-start gap-3 text-[14px] text-grey-700 leading-relaxed">
                  <span className="text-red mt-1 shrink-0">›</span>
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Activities photo grid */}
          <div>
            <p className="eyebrow mb-5">Aktivitäten</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ACTIVITIES.map((a) => (
                <div key={a.caption} className="rounded-sm overflow-hidden border border-grey-200">
                  <div className="relative h-[200px]">
                    <Image src={a.image} alt={a.caption} fill className="object-cover" />
                  </div>
                  <p className="text-[12px] text-grey-500 px-4 py-2.5 bg-grey-50">{a.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
