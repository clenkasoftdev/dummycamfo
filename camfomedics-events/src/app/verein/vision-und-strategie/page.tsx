import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Vision und Strategie' }

export default function VisionPage() {
  return (
    <>
      <PageHeader
        title="Vision und Strategie"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Vision und Strategie' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Wirkungsorientierung</p>
          <h2 className="font-display text-[28px] text-navy font-normal mb-6 max-w-2xl leading-snug">
            Die Vision
          </h2>
          <p className="text-[15px] text-grey-600 leading-loose max-w-2xl mb-10">
            Die Arbeit von Camfomedics verfolgt folgende Ziele: Medizinstudenten und Fachkräfte
            in Deutschland zu inspirieren und zu ermutigen, Möglichkeiten und Projekte für den
            Wissensaustausch mit Medizinern in Kamerun zu schaffen und Medizinern dabei zu
            helfen, sich persönlich und beruflich zu entwickeln.
          </p>

          <div className="relative w-full h-[360px] rounded-sm overflow-hidden">
            <Image
              src="https://cloud-1de12d.becdn.net/media/iW=702&iH=473&oX=0&oY=5&cW=702&cH=320/cce8b34ef9fbcd73b3a73466e520bb68/image.jpg"
              alt="Vision Camfomedics"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>
    </>
  )
}
