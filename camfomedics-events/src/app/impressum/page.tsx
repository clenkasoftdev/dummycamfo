import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import { SITE } from '@/lib/site-config'

export const metadata: Metadata = { title: 'Impressum' }

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        title="Impressum"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Impressum' },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-7 py-14 prose-legal">
          <h2 className="font-display text-[22px] text-navy font-normal mb-6">Angaben gemäß § 5 TMG</h2>

          <div className="bg-grey-50 border border-grey-200 rounded-lg p-6 mb-8 text-[14px] space-y-1 text-grey-700">
            <p className="font-medium text-navy">Dr. med. Ivo Azeh</p>
            <p>{SITE.address}</p>
          </div>

          {/* Vertreten durch */}
          <section className="mb-8">
            <h3 className="text-[14px] font-semibold text-navy mb-3 uppercase tracking-wide">Vertreten durch</h3>
            <p className="text-[14px] text-grey-700 leading-relaxed">
              Dr. med. Fonyuy Nyuyki<br />
              {SITE.impressum.vorsitzende}
            </p>
          </section>

          {/* Registereintrag */}
          <section className="mb-8">
            <h3 className="text-[14px] font-semibold text-navy mb-3 uppercase tracking-wide">Registereintrag</h3>
            <div className="text-[14px] text-grey-700 leading-loose">
              <p>Eintragung im Vereinsregister</p>
              <p>Registergericht: <strong className="text-navy">Giessen</strong></p>
              <p>Registernummer: <strong className="text-navy">VR2295</strong></p>
              <p className="mt-2">Berufsbezeichnung: Ärzte, Studenten der Medizin, Pharmazie und Zahnheilkunde</p>
            </div>
          </section>

          {/* Kontakt */}
          <section className="mb-8">
            <h3 className="text-[14px] font-semibold text-navy mb-3 uppercase tracking-wide">Kontakt</h3>
            <div className="text-[14px] text-grey-700 leading-loose">
              <p>Telefon: <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="text-red hover:underline">{SITE.phone}</a></p>
              <p>E-Mail: <a href={`mailto:${SITE.email}`} className="text-red hover:underline">{SITE.email}</a></p>
            </div>
          </section>

          <hr className="border-grey-200 my-8" />

          {/* Haftungsausschluss */}
          <section className="mb-8">
            <h3 className="text-[14px] font-semibold text-navy mb-4 uppercase tracking-wide">Haftungsausschluss</h3>

            <h4 className="text-[13px] font-semibold text-navy mb-2">Haftung für Inhalte</h4>
            <p className="text-[13px] text-grey-600 leading-loose mb-5">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
              Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der
              Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
              Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer
              konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h4 className="text-[13px] font-semibold text-navy mb-2">Haftung für Links</h4>
            <p className="text-[13px] text-grey-600 leading-loose">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
              Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen
              werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          {/* Urheberrecht */}
          <section className="mb-8">
            <h3 className="text-[14px] font-semibold text-navy mb-3 uppercase tracking-wide">Urheberrecht</h3>
            <p className="text-[13px] text-grey-600 leading-loose">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung
              und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
              dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit
              die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
              gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam
              werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>

          <p className="text-[12px] text-grey-400 italic">Stand: 2026 · Camfomedics e.V.</p>
        </div>
      </section>
    </>
  )
}
