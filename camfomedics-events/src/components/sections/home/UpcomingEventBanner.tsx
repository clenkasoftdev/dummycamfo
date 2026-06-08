import Link from 'next/link'
import { UPCOMING_EVENT_BANNER as E } from '@/lib/site-config'

export default function UpcomingEventBanner() {
  return (
    <section className="bg-grey-100 py-10">
      <div className="max-w-sm mx-auto px-4">
        {/* Navy card — matches the design exactly */}
        <div className="bg-navy text-center px-8 py-10 rounded-sm">
          <p className="text-red text-[13px] font-medium tracking-wide mb-1">
            {E.edition}
          </p>
          <p className="text-red font-display text-[15px] font-normal mb-4">
            Annual Meeting
          </p>
          <p className="text-white font-display text-[28px] font-normal leading-tight mb-3">
            {E.date}
          </p>
          <div className="border-t border-white/15 pt-4 mb-6">
            <p className="text-white text-[13px] leading-loose">
              {E.venue}<br />
              {E.street}<br />
              {E.city}
            </p>
          </div>
          <a
            href={E.programUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-white/40 text-white
                       text-[13px] px-5 py-2 rounded-sm hover:border-white hover:bg-white/10
                       transition-colors"
          >
            Zum vorläufigen Programm →
          </a>
        </div>
      </div>
    </section>
  )
}
