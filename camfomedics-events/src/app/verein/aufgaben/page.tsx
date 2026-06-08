import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Aufgaben' }

export default function AufgabenPage() {
  return (
    <>
      <PageHeader
        title="Aufgaben"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Aufgaben' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Unternehmen</p>
          <h2 className="font-display text-[28px] text-navy font-normal mb-6 leading-snug">
            Die Verpflichtung
          </h2>
          <p className="text-[15px] text-grey-600 leading-loose max-w-2xl mb-10">
            Als Organisation von Medizinern verpflichten wir uns, zwischen Fachkräften des
            Gesundheitswesens in Kamerun und Deutschland einen qualitativ hochwertigen und
            effizienten Kompetenzaustausch zu ermöglichen. Unseren Gemeinschaften in beiden
            Ländern etwas zurückzugeben, ist uns wichtig.
          </p>

          <div className="relative w-full h-[320px] rounded-sm overflow-hidden mb-10">
            <Image
              src="https://cloud-1de12d.becdn.net/media/iW=702&iH=395&oX=0&oY=73&cW=702&cH=249/6fb2b3a3c68ae442cebcd349bfbf48a3/image.jpg"
              alt="Camfomedics Aufgaben"
              fill
              className="object-cover object-center"
            />
          </div>

          <div className="space-y-4 text-[14px] text-grey-600 leading-loose max-w-2xl">
            <p>
              Jedes medizinische Projekt, das wir in Kamerun realisieren, ist einzigartig. Die
              konkreten Maßnahmen (Umsetzung und Laufzeit) hängen dabei von der Situation und
              den jeweiligen Bedürfnissen der Gemeinden ab. Aktuell setzen wir Programme in
              fünf verschiedenen Bereichen um.
            </p>
            <p>
              Seit der Gründung widmet sich der Verein schwerpunktmäßig der Aufklärung.
              Insbesondere Jugendliche werden über wichtige Gesundheitsprobleme wie
              Geschlechtskrankheiten, HIV/AIDS, Alkohol und Tabakkonsum oder den Zusammenhang
              zwischen Hygiene und Infektionskrankheiten wie Malaria informiert.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
