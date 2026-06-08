import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'SHARE — Projekte' }

const STEPS = [
  'Der Bedarf wird vor Ort in Kamerun ermittelt.',
  'Art und Umfang der benötigten Hilfe wird in Form einer formalen Anfrage an die Projektleitung gerichtet.',
  'Vor Ort wird ein Koordinator ernannt, der Empfang und Verwendung der Hilfe koordiniert und überwacht.',
  'Ein Bericht über den Verbleib, den Einsatz bzw. die Verwendung empfangener Hilfe ist Voraussetzung für eine zukünftige Hilfe.',
]

export default function SharePage() {
  return (
    <>
      <PageHeader
        title="SHARE"
        eyebrow="Projekte"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte', href: '/projekte/' },
          { label: 'SHARE' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">

          {/* Tag + heading */}
          <span className="inline-block text-[10px] tracking-[1.5px] uppercase
                           bg-red/10 text-red px-2.5 py-1 rounded-sm mb-4">
            Projekte
          </span>
          <h2 className="font-display text-[26px] text-navy font-normal mb-6 max-w-2xl leading-snug">
            SHARE – Supporting Healthcare Availability and Rural Expertise in Cameroon
          </h2>

          {/* Intro */}
          <div className="space-y-4 text-[14px] text-grey-600 leading-loose max-w-3xl mb-12">
            <p>
              Ziel dieses Projekts ist die Unterstützung der Gesundheitsversorgung in Kamerun.
              Im Fokus stehen die Menschen in den dörflichen Regionen Kameruns, die nur über
              begrenzte finanzielle Mittel verfügen und deren Zugang zu medizinischer Versorgung
              nur sehr eingeschränkt möglich ist.
            </p>
            <p>
              Das Projekt möchte daher die Entwicklung der Gesundheitseinrichtungen in dörflichen
              Regionen fördern. Hilfe soll in Form von Geräten, Verbrauchsmaterialien, Medikamenten
              und auch durch verbesserte Ausbildungsmöglichkeiten geleistet werden.
            </p>
            <p>
              Zudem sollen im Zentralkrankenhaus der Hauptstadt Yaoundé die Möglichkeiten zur
              Durchführung von Chemotherapien bei Kindern unterstützt werden, sodass dies
              insbesondere den Kindern aus dörflichen Regionen zugutekommen kann. Ein besonderes
              Augenmerk gilt hier den Kindern mit dem in tropischen Regionen endemischen
              Burkitt-Lymphom.
            </p>
          </div>

          {/* Process steps */}
          <div className="bg-grey-50 border border-grey-200 rounded-lg p-8 max-w-3xl mb-12">
            <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-5">
              Unser Vorgehen
            </p>
            <p className="text-[14px] text-grey-600 leading-loose mb-6">
              Die Unterstützung soll möglichst zielgerichtet und auf direktem und praktischem
              Weg erfolgen. Um dies gewährleisten zu können, werden folgende Schritte konsequent
              verfolgt:
            </p>
            <ol className="space-y-3">
              {STEPS.map((s, i) => (
                <li key={i} className="flex gap-4 text-[14px] text-grey-700 leading-relaxed">
                  <span className="w-6 h-6 rounded-full bg-red text-white text-[12px] font-medium
                                   flex items-center justify-center shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>

          {/* CTA */}
          <div className="border border-grey-200 rounded-lg p-7 max-w-xl bg-grey-50">
            <p className="font-display text-[18px] text-navy font-normal mb-3">
              Helfen Sie uns, einen Unterschied zu machen
            </p>
            <p className="text-[13px] text-grey-600 leading-loose mb-5">
              Wir freuen uns auf Ihre Unterstützung in Form von Geld, Medikamenten, Geräten
              oder medizinischen Verbrauchsmaterialien.
            </p>
            <Link
              href="/mitgliedschaft/"
              className="inline-flex items-center px-5 py-2.5 bg-red text-white text-[13px]
                         font-medium rounded-sm hover:bg-red/90 transition-colors"
            >
              Mitglied werden →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
