import type { Metadata } from 'next'
import Link from 'next/link'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/site-config'

export const metadata: Metadata = { title: 'Mitgliedschaft' }

const MEMBER_TYPES = [
  'Ärztinnen und Ärzte',
  'Apothekerinnen und Apotheker',
  'Krankenschwestern und Pfleger',
  'Studierende der Medizin, Pharmazie und Zahnheilkunde',
  'Biomedizinische Technologie',
  'Ehrenmitglieder',
]

const BENEFITS = [
  { title: 'Zugang zu allen Veranstaltungen', desc: 'Jahrestagungen, Meet the Experts, Webinare und Workshops.' },
  { title: 'Starkes Netzwerk', desc: 'Verbindungen mit Medizinern aus Deutschland, Europa und Kamerun.' },
  { title: 'CME-Fortbildungspunkte', desc: 'Anerkannte Fortbildungspunkte bei unseren medizinischen Veranstaltungen.' },
  { title: 'Karriere-Workshops', desc: 'Exklusive Workshops für Studierende und junge Ärzte.' },
  { title: 'Projekte & Engagement', desc: 'Mitwirkung an SHARE, iMED und weiteren Projekten in Kamerun.' },
  { title: 'Informationsplattform', desc: 'Zugang zu unserem Newsletter und aktuellen medizinischen Informationen.' },
]

export default function MitgliedschaftPage() {
  return (
    <>
      <PageHeader
        title="Mitgliedschaft"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Mitgliedschaft' },
        ]}
      />

      {/* Intro + fee */}
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="eyebrow mb-3">Mitgliedschaft</p>
              <h2 className="font-display text-[28px] text-navy font-normal mb-5 leading-snug">
                Werde Teil unserer Gemeinschaft
              </h2>
              <p className="text-[14px] text-grey-600 leading-loose mb-4">
                Unsere Organisation besteht zurzeit aus Ärzten, Apothekern, Krankenschwestern,
                Pflegern, Studenten im Bereich der Medizin, Pharmazie, Zahnheilkunde,
                biomedizinischer Technologie sowie Ehrenmitgliedern.
              </p>
              <p className="text-[14px] text-grey-600 leading-loose mb-8">
                Als Mitglied trägst du aktiv zur Verbesserung der Gesundheitsversorgung in
                Deutschland und Kamerun bei und profitierst von einem starken professionellen
                Netzwerk.
              </p>

              {/* Member types */}
              <div className="bg-grey-50 border border-grey-200 rounded-lg p-6 mb-8">
                <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-4">Wer kann Mitglied werden?</p>
                <ul className="space-y-2">
                  {MEMBER_TYPES.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-[13px] text-grey-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-red shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Fee card */}
            <div className="bg-navy rounded-lg p-8 text-center">
              <p className="text-[11px] tracking-[2px] uppercase text-white/40 mb-3">Jahresbeitrag</p>
              <p className="font-display text-[60px] text-white leading-none mb-2">€ 50</p>
              <p className="text-[14px] text-white/60 mb-8">pro Jahr</p>
              <ul className="space-y-3 mb-8 text-left">
                {BENEFITS.slice(0, 4).map((b) => (
                  <li key={b.title} className="flex items-start gap-2.5">
                    <span className="text-red mt-0.5 shrink-0">✓</span>
                    <span className="text-[13px] text-white/75">{b.title}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://www.camfomedics.org/beitrittsformular"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-red text-white text-[14px] font-medium
                           rounded-sm hover:bg-red/90 transition-colors text-center"
              >
                Beitrittsformular →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="bg-grey-50 border-t border-grey-200">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <p className="eyebrow mb-2">Vorteile</p>
          <h2 className="font-display text-[24px] text-navy font-normal mb-8">Was du als Mitglied erhältst</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white border border-grey-200 rounded-lg p-5">
                <div className="w-8 h-8 bg-red/10 rounded-sm flex items-center justify-center mb-3">
                  <span className="text-red text-[16px]">✓</span>
                </div>
                <h3 className="text-[14px] font-medium text-navy mb-1.5">{b.title}</h3>
                <p className="text-[13px] text-grey-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white border-t border-grey-200">
        <div className="max-w-5xl mx-auto px-7 py-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-[14px] font-medium text-navy mb-1">Fragen zur Mitgliedschaft?</p>
            <p className="text-[13px] text-grey-600">
              Kontaktiere uns unter{' '}
              <a href={`mailto:${SITE.email}`} className="text-red hover:underline">{SITE.email}</a>
              {' '}oder{' '}
              <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="text-red hover:underline">{SITE.phone}</a>
            </p>
          </div>
          <a
            href="https://www.camfomedics.org/beitrittsformular"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-red text-white text-[13px] font-medium rounded-sm
                       hover:bg-red/90 transition-colors"
          >
            Jetzt Mitglied werden
          </a>
        </div>
      </section>
    </>
  )
}
