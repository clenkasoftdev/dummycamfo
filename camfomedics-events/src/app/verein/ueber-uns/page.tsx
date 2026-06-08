import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Über Uns' }

export default function UeberUnsPage() {
  return (
    <>
      <PageHeader
        title="Über Uns"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Über Uns' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Photo */}
            <div className="relative h-[420px] rounded-sm overflow-hidden">
              <Image
                src="https://cloud-1de12d.becdn.net/media/iW=599&iH=742&oX=22&oY=0&cW=555&cH=742/5e8e35bd3b8590cc03381e92e1031184/image.png"
                alt="Camfomedics Gründung"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="font-display text-[24px] text-navy font-normal mb-5 leading-snug">
                Camfomedics wurde am 7. Mai 1994 in Tübingen, Deutschland von kamerunischen
                Studenten der Medizin, Pharmazie und Zahnheilkunde in Deutschland gegründet
              </h2>
              <div className="space-y-4 text-[14px] text-grey-600 leading-loose">
                <p>
                  Der Name Camfomedics ist eine Abkürzung für Deutsch-Kamerunisches Forum für
                  die Medizinischen und Paramedizinischen Wissenschaften e.V.
                </p>
                <p>
                  Es handelt sich um eine Initiative der Diaspora-Gemeinschaft zur Förderung
                  eines nachhaltigen Gesundheitskonzepts in Kamerun, das die Integration und
                  Reintegration von kamerunischen und deutschen Medizinstudenten voranbringen soll.
                </p>
                <p>
                  Ausgestattet mit exzellenten Kenntnissen der kamerunischen Realität —
                  langjähriger Auslandserfahrung, Spezialkenntnissen in Gesundheitswissenschaften
                  sowie einem starken Willen — sind die Fort- und Weiterbildung, Gesundheitsprojekte
                  in Kamerun, die Integration und Reintegration von Experten sowie eine globale
                  Partnerschaft die Hauptziele unseres Vereins.
                </p>
                <p className="font-medium text-navy">
                  Seit ihrer Gründung 1994 in Tübingen hat sich unsere gemeinnützige Vereinigung
                  ständig weiterentwickelt und ist heute einer der bedeutendsten Vereine der
                  kamerunischen Diaspora in Deutschland.
                </p>
                <p>
                  Camfomedics e.V. bietet eine Plattform für den Austausch und die Weiterbildung
                  von Medizin- und Gesundheitsfachkräften mit Bezug zu Kamerun und der Diaspora.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
