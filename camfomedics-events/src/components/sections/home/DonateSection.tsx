import { SITE } from '@/lib/site-config'

export default function DonateSection() {
  return (
    <section className="bg-grey-100 border-t border-grey-200">
      <div className="max-w-5xl mx-auto px-7 py-10">
        <h2 className="font-display text-[22px] text-navy font-normal mb-6 text-center">
          Helfen Sie uns, einen Unterschied zu machen
        </h2>

        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 justify-between">
          {/* Bank details */}
          <div>
            <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-3">Sofort Überweisung mit</p>
            <dl className="text-[13px] space-y-1">
              <div className="flex gap-2">
                <dt className="text-grey-400 w-20 shrink-0">KONTONAME</dt>
                <dd className="font-medium text-navy">{SITE.bank.name}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-grey-400 w-20 shrink-0">Bank</dt>
                <dd className="text-grey-600">{SITE.bank.bank}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-grey-400 w-20 shrink-0">IBAN</dt>
                <dd className="font-medium text-navy font-mono">{SITE.bank.iban}</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-grey-400 w-20 shrink-0">BIC</dt>
                <dd className="font-medium text-navy font-mono">{SITE.bank.bic}</dd>
              </div>
            </dl>
          </div>

          {/* Online Donation button */}
          <div className="text-center">
            <a
              href={`https://www.paypal.com/paypalme/${SITE.paypalEmail}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-navy text-white text-[13px]
                         font-medium px-6 py-3 rounded-sm hover:bg-navy/90 transition-colors"
            >
              Online Donation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M18 8l4 4-4 4M2 12h20"/>
              </svg>
            </a>
            <p className="text-[11px] text-grey-400 mt-2">Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  )
}
