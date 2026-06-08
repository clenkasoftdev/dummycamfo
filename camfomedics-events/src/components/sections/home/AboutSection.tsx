import { ABOUT_SECTION } from '@/lib/site-config'

// Line-style SVG icons matching the original site
const ICONS = [
  // Heart with plus — Hingabe
  <svg key="heart" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mx-auto mb-5">
    <path d="M24 42s-18-10.5-18-22a10 10 0 0 1 18-6 10 10 0 0 1 18 6c0 11.5-18 22-18 22z"/>
    <line x1="24" y1="16" x2="24" y2="26"/><line x1="19" y1="21" x2="29" y2="21"/>
  </svg>,
  // Grid/network — Aufgaben
  <svg key="grid" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mx-auto mb-5">
    <rect x="8" y="8" width="12" height="12"/><rect x="28" y="8" width="12" height="12"/>
    <rect x="8" y="28" width="12" height="12"/><rect x="28" y="28" width="12" height="12"/>
    <line x1="20" y1="14" x2="28" y2="14"/><line x1="14" y1="20" x2="14" y2="28"/>
    <line x1="34" y1="20" x2="34" y2="28"/><line x1="20" y1="34" x2="28" y2="34"/>
  </svg>,
  // Branch/history — Geschichte
  <svg key="branch" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mx-auto mb-5">
    <circle cx="12" cy="12" r="4"/><circle cx="36" cy="12" r="4"/><circle cx="24" cy="36" r="4"/>
    <line x1="16" y1="12" x2="32" y2="12"/>
    <line x1="12" y1="16" x2="24" y2="32"/><line x1="36" y1="16" x2="24" y2="32"/>
  </svg>,
  // Cake/founding — Gründung
  <svg key="cake" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-10 h-10 mx-auto mb-5">
    <rect x="8" y="24" width="32" height="16" rx="1"/>
    <path d="M16 24v-4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v4"/>
    <line x1="24" y1="12" x2="24" y2="8"/>
    <circle cx="24" cy="7" r="2"/>
  </svg>,
]

export default function AboutSection() {
  return (
    <section className="bg-grey-100">
      <div className="max-w-5xl mx-auto px-7 py-14 text-center">
        {/* Eyebrow with small icon */}
        <div className="flex flex-col items-center mb-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="#d41e44" strokeWidth="1.5" className="w-5 h-5 mb-1.5">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
          </svg>
          <p className="text-[11px] tracking-[2px] uppercase text-red">Über Uns</p>
        </div>

        <h2 className="font-display text-[34px] md:text-[40px] text-navy font-normal mb-10 leading-tight max-w-xl mx-auto">
          {ABOUT_SECTION.heading}
        </h2>

        {/* 4 icon cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-grey-200 rounded-sm overflow-hidden">
          {ABOUT_SECTION.goals.map((g, i) => (
            <div
              key={g.title}
              className={`px-6 py-8 text-center border-r border-grey-200 last:border-r-0
                ${i === 1 ? 'bg-red text-white' : 'bg-white text-grey-800'}`}
            >
              <div className={i === 1 ? 'text-white' : 'text-grey-400'}>
                {ICONS[i]}
              </div>
              <h3 className={`text-[15px] font-medium mb-3 ${i === 1 ? 'text-white' : 'text-navy'}`}>
                {g.title}
              </h3>
              <p className={`text-[13px] leading-relaxed ${i === 1 ? 'text-white/85' : 'text-grey-600'}`}>
                {g.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
