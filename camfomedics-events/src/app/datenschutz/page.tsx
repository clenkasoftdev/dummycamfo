import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/site-config'

export const metadata: Metadata = { title: 'Datenschutzerklärung' }

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h3 className="text-[16px] font-semibold text-navy mb-3 pb-2 border-b border-grey-200">{title}</h3>
      <div className="text-[13px] text-grey-600 leading-loose space-y-3">{children}</div>
    </section>
  )
}

const TOC = [
  { id: 'begriffsbestimmungen',   label: '1. Begriffsbestimmungen' },
  { id: 'verantwortlicher',       label: '2. Name und Kontaktdaten des Verantwortlichen' },
  { id: 'erhebung',               label: '3. Erhebung und Speicherung personenbezogener Daten' },
  { id: 'kontaktformular',        label: '4. Kontaktformular' },
  { id: 'cookies',                label: '5. Cookies' },
  { id: 'analyse',                label: '6. Analyse-Tools' },
  { id: 'weitergabe',             label: '7. Weitergabe von Daten' },
  { id: 'betroffenenrechte',      label: '8. Rechte der betroffenen Person' },
  { id: 'aktualitaet',            label: '9. Aktualität dieser Erklärung' },
]

export default function DatenschutzPage() {
  return (
    <>
      <PageHeader
        title="Datenschutzerklärung"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Datenschutz' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 items-start">

            {/* Sticky TOC */}
            <aside className="hidden lg:block sticky top-24 self-start">
              <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-4">Inhalt</p>
              <nav className="space-y-1">
                {TOC.map((t) => (
                  <a
                    key={t.id}
                    href={`#${t.id}`}
                    className="block text-[12px] text-grey-500 hover:text-red py-0.5
                               transition-colors leading-snug"
                  >
                    {t.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="max-w-2xl">
              <p className="text-[14px] text-grey-600 leading-loose mb-10">
                Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen. Datenschutz hat
                einen besonders hohen Stellenwert für die Geschäftsleitung der Camfomedics e.V.
                Eine Nutzung der Internetseiten der Camfomedics e.V. ist grundsätzlich ohne jede
                Angabe personenbezogener Daten möglich. Sofern eine betroffene Person besondere
                Services über unsere Internetseite in Anspruch nehmen möchte, könnte jedoch eine
                Verarbeitung personenbezogener Daten erforderlich werden.
              </p>

              {/* 1 */}
              <Section id="begriffsbestimmungen" title="1. Begriffsbestimmungen">
                <p>
                  Die Datenschutzerklärung der Camfomedics e.V. beruht auf den Begrifflichkeiten,
                  die durch den Europäischen Richtlinien- und Verordnungsgeber beim Erlass der
                  Datenschutz-Grundverordnung (DS-GVO) verwendet wurden.
                </p>
                <p>
                  <strong className="text-navy">a) Personenbezogene Daten</strong> sind alle
                  Informationen, die sich auf eine identifizierte oder identifizierbare natürliche
                  Person beziehen.
                </p>
                <p>
                  <strong className="text-navy">b) Betroffene Person</strong> ist jede
                  identifizierte oder identifizierbare natürliche Person, deren personenbezogene
                  Daten vom Verantwortlichen verarbeitet werden.
                </p>
                <p>
                  <strong className="text-navy">c) Verarbeitung</strong> ist jeder mit oder ohne
                  Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit
                  personenbezogenen Daten.
                </p>
                <p>
                  <strong className="text-navy">d) Profiling</strong> ist jede Art der
                  automatisierten Verarbeitung personenbezogener Daten, die darin besteht,
                  bestimmte persönliche Aspekte einer natürlichen Person zu bewerten.
                </p>
                <p>
                  <strong className="text-navy">e) Pseudonymisierung</strong> ist die Verarbeitung
                  personenbezogener Daten in einer Weise, auf welche diese ohne Hinzuziehung
                  zusätzlicher Informationen nicht mehr einer spezifischen betroffenen Person
                  zugeordnet werden können.
                </p>
              </Section>

              {/* 2 */}
              <Section id="verantwortlicher" title="2. Name und Kontaktdaten des Verantwortlichen">
                <p>
                  Verantwortlicher im Sinne der Datenschutz-Grundverordnung sowie sonstiger
                  datenschutzrechtlicher Bestimmungen ist:
                </p>
                <div className="bg-grey-50 border border-grey-200 rounded-sm p-4">
                  <p className="font-medium text-navy">Camfomedics e.V.</p>
                  <p>{SITE.address}</p>
                  <p>Telefon: {SITE.phone}</p>
                  <p>E-Mail: <a href={`mailto:${SITE.email}`} className="text-red hover:underline">{SITE.email}</a></p>
                </div>
              </Section>

              {/* 3 */}
              <Section id="erhebung" title="3. Erhebung und Speicherung personenbezogener Daten">
                <p>
                  Bei der Nutzung unserer Website werden automatisch technische Informationen
                  erhoben, die Ihr Browser an unseren Server übermittelt. Dies sind unter anderem:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-3">
                  <li>IP-Adresse des anfragenden Rechners</li>
                  <li>Datum und Uhrzeit der Anfrage</li>
                  <li>Name und URL der abgerufenen Datei</li>
                  <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                  <li>Verwendeter Browser und ggf. das Betriebssystem</li>
                </ul>
                <p>
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt und nach
                  statistischer Auswertung gelöscht.
                </p>
              </Section>

              {/* 4 */}
              <Section id="kontaktformular" title="4. Kontaktformular">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben
                  aus dem Anfrageformular inklusive der von Ihnen angegebenen Kontaktdaten zwecks
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                  Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt
                  ausschließlich auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DS-GVO).
                  Sie können diese Einwilligung jederzeit widerrufen.
                </p>
              </Section>

              {/* 5 */}
              <Section id="cookies" title="5. Cookies">
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf
                  Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten der
                  von uns verwendeten Cookies sind sogenannte „Session-Cookies", die nach Ende
                  Ihres Besuchs automatisch gelöscht werden.
                </p>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies
                  informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von
                  Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                  Löschen der Cookies beim Schließen des Browsers aktivieren.
                </p>
              </Section>

              {/* 6 */}
              <Section id="analyse" title="6. Analyse-Tools">
                <p>
                  Diese Website nutzt keine externen Analyse-Tools, die personenbezogene Daten
                  erheben oder an Dritte übermitteln. Eine Einbindung von Google Analytics oder
                  vergleichbaren Diensten erfolgt nicht.
                </p>
              </Section>

              {/* 7 */}
              <Section id="weitergabe" title="7. Weitergabe von Daten">
                <p>
                  Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im
                  Folgenden aufgeführten Zwecken findet nicht statt. Wir geben Ihre persönlichen
                  Daten nur an Dritte weiter, wenn:
                </p>
                <ul className="list-disc list-inside space-y-1 pl-3">
                  <li>Sie Ihre ausdrückliche Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DS-GVO),</li>
                  <li>die Weitergabe zur Erfüllung eines Vertrages erforderlich ist (Art. 6 Abs. 1 lit. b DS-GVO),</li>
                  <li>eine gesetzliche Verpflichtung zur Weitergabe besteht (Art. 6 Abs. 1 lit. c DS-GVO).</li>
                </ul>
              </Section>

              {/* 8 */}
              <Section id="betroffenenrechte" title="8. Rechte der betroffenen Person">
                <p>Sie haben das Recht:</p>
                <ul className="list-disc list-inside space-y-1 pl-3">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten (Art. 15 DS-GVO),</li>
                  <li>die Berichtigung unrichtiger Daten zu verlangen (Art. 16 DS-GVO),</li>
                  <li>die Löschung Ihrer Daten zu verlangen (Art. 17 DS-GVO),</li>
                  <li>die Einschränkung der Verarbeitung zu verlangen (Art. 18 DS-GVO),</li>
                  <li>der Verarbeitung Ihrer Daten zu widersprechen (Art. 21 DS-GVO),</li>
                  <li>die Datenübertragbarkeit zu verlangen (Art. 20 DS-GVO),</li>
                  <li>Beschwerde bei einer Datenschutzbehörde einzureichen (Art. 77 DS-GVO).</li>
                </ul>
                <p>
                  Zur Ausübung dieser Rechte wenden Sie sich bitte an:{' '}
                  <a href={`mailto:${SITE.email}`} className="text-red hover:underline">
                    {SITE.email}
                  </a>
                </p>
              </Section>

              {/* 9 */}
              <Section id="aktualitaet" title="9. Aktualität dieser Erklärung">
                <p>
                  Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026.
                  Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher
                  bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung
                  zu ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser
                  Seite abgerufen werden.
                </p>
              </Section>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
