import Link from 'next/link'
import Image from 'next/image'
import { PAST_EVENTS, FEATURED_EVENTS_SLUGS, EVENT_TYPE_LABELS, EVENT_TYPE_COLOURS } from '@/lib/site-config'

export default function FeaturedEvents() {
  const featured = FEATURED_EVENTS_SLUGS
    .map((slug) => PAST_EVENTS.find((e) => e.slug === slug))
    .filter(Boolean) as typeof PAST_EVENTS

  return (
    <section className="bg-grey-50">
      <div className="max-w-5xl mx-auto px-7 py-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="eyebrow mb-1.5">Veranstaltungen</p>
            <h2 className="font-display text-[26px] text-navy font-normal">Camfomedics Events</h2>
          </div>
          <Link href="/veranstaltungen/" className="text-[13px] text-red hover:underline">
            Alle anzeigen →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {featured.map((event) => (
            <Link
              key={event.slug}
              href={`/veranstaltungen/${event.slug}/`}
              className="group bg-white border border-grey-200 rounded-lg overflow-hidden
                         hover:shadow-[0_2px_16px_rgba(12,26,60,0.08)] transition-shadow"
            >
              <div
                className="h-44 relative overflow-hidden"
                style={{ background: EVENT_TYPE_COLOURS[event.type] ?? '#0c1a3c' }}
              >
                {event.thumbnailImage && (
                  <Image src={event.thumbnailImage} alt={event.title} fill className="object-cover" />
                )}
                <div className="absolute inset-0" style={{ background: 'rgba(12,26,60,0.35)' }} />
                {event.upcoming && (
                  <span className="absolute top-2.5 right-2.5 bg-red text-white text-[10px] px-2 py-0.5 rounded-sm z-10">
                    Bevorstehend
                  </span>
                )}
              </div>
              <div className="p-4">
                <p className="text-[11px] text-grey-400 mb-1">{event.date} · {event.location}</p>
                <h3 className="font-display text-[15px] text-navy font-normal leading-snug group-hover:text-red transition-colors">
                  {event.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}