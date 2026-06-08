import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Geschichte' }

const TIMELINE = [
  { year: '1994', image: 'https://cloud-1de12d.becdn.net/media/iW=662&iH=311&oX=0&oY=0&cW=414&cH=311/0b0ef7e16976971c740fd50aef421026/image.png' },
  { year: '1995', image: 'https://cloud-1de12d.becdn.net/media/iW=657&iH=309&oX=0&oY=0&cW=414&cH=309/b3e004a4735f15e056d7b8cb59dd14fd/image.png' },
  { year: '1996', image: 'https://cloud-1de12d.becdn.net/media/iW=657&iH=309&oX=0&oY=0&cW=414&cH=309/cbb3524b675d77d4679bdf85f5476a3e/image.png' },
]

export default function GeschichtePage() {
  return (
    <>
      <PageHeader
        title="Geschichte"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Geschichte' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-14">
            <div className="relative h-[400px] rounded-sm overflow-hidden">
              <Image
                src="https://cloud-1de12d.becdn.net/media/iW=828&iH=585&oX=122&oY=0&cW=583&cH=585/de44b109b212928bcad162865b827f3b/image.png"
                alt="Geschichte Camfomedics"
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-[15px] text-grey-600 leading-loose mb-6">
                Medizinstudenten aus Kamerun — überwiegend Stipendiaten des zentralafrikanischen
                Staates — pflegten in Deutschland immer einen regen Austausch untereinander. Mitte
                der 1990er Jahre kam es zum abrupten Ausbleiben der Stipendiengelder, was für die
                Mehrheit der kamerunischen Studierenden eine ernsthafte Bedrohung ihres
                Studienerfolgs darstellte.
              </p>
              <p className="text-[15px] text-grey-600 leading-loose">
                Die Sorge um die Zukunft schweißte die angehenden Medizinerinnen und Mediziner
                zusammen und so kam es zum Entschluss, einen eigenständigen Verein zu bilden:
                Am 7. Mai 1994 wurde Camfomedics in Tübingen gegründet.
              </p>

              <div className="mt-8 p-5 border-l-4 border-red bg-red-light rounded-r-sm">
                <p className="font-display text-[18px] text-navy font-normal">
                  Am 07.05.1994 war es in Tübingen dann so weit.
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <h2 className="font-display text-[22px] text-navy font-normal mb-8">
            Zeitleiste der Organisation
          </h2>
          <div className="space-y-8">
            {TIMELINE.map((t) => (
              <div key={t.year} className="flex gap-8 items-start">
                <div className="w-16 shrink-0 text-center">
                  <span className="font-display text-[22px] text-red font-normal">{t.year}</span>
                </div>
                <div className="flex-1 relative h-[200px] rounded-sm overflow-hidden border border-grey-200">
                  <Image src={t.image} alt={`Camfomedics ${t.year}`} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
