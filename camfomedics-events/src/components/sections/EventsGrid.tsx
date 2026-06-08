'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Event, EventType } from '@/types'
import { EVENT_TYPE_COLOURS, EVENT_TYPE_LABELS } from '@/lib/site-config'

const FILTERS: { label: string; value: 'all' | EventType }[] = [
  { label: 'Alle',             value: 'all' },
  { label: 'Jahrestagung',     value: 'jahrestagung' },
  { label: 'Meet the Experts', value: 'meet-experts' },
  { label: 'Webinar',          value: 'webinar' },
  { label: 'Workshop',         value: 'workshop' },
]

function EventCard({ event }: { event: Event }) {
  const bg       = EVENT_TYPE_COLOURS[event.type] ?? '#0c1a3c'
  const typeLabel = EVENT_TYPE_LABELS[event.type] ?? event.type
  const editionNum = event.type === 'jahrestagung'
    ? event.title.split('.')[0]
    : null

  return (
    <Link
      href={event.slug ? `/veranstaltungen/${event.slug}/` : '#'}
      className="group bg-white border border-grey-200 rounded-[10px] overflow-hidden block
                 hover:shadow-[0_2px_16px_rgba(12,26,60,0.08)] transition-shadow"
    >
      {/* Thumbnail */}
      <div className="h-[300px] relative flex items-end p-3 overflow-hidden" style={{ background: bg }}>
        {/* Real photo when available */}
        {event.thumbnailImage && (
          <Image
            src={event.thumbnailImage}
            alt={event.title}
            fill
            className="object-cover object-center"
          />
        )}
        {/* Dark overlay so badges stay legible over any photo */}
        <div className="absolute inset-0" style={{ background: 'rgba(12,26,60,0.45)' }} />

        {event.upcoming && (
          <span className="absolute top-2.5 right-2.5 bg-red text-white text-[10px] px-2 py-0.5 rounded-sm z-10">
            Bevorstehend
          </span>
        )}
        <span className="relative z-10 bg-black/40 text-white text-[10px] tracking-[1.5px] uppercase px-2 py-0.5 rounded-sm">
          {typeLabel}
        </span>
        {editionNum && (
          <span className="absolute right-3 bottom-2 font-display text-white/15 text-[42px] leading-none select-none z-10">
            {editionNum}.
          </span>
        )}
      </div>

      {/* Body */}
      <div className="px-4 pt-3.5 pb-4">
        <p className="text-[12px] text-grey-400 mb-1.5">{event.date} · {event.location}</p>
        <h3 className="font-display text-[16px] text-grey-800 mb-1.5 leading-snug">{event.title}</h3>
        <p className="text-[13px] text-grey-600 leading-relaxed mb-3.5 line-clamp-3">{event.excerpt}</p>
        <span className="text-[13px] text-red font-medium group-hover:underline">
          {event.slug ? 'Details anzeigen →' : 'Mehr erfahren →'}
        </span>
      </div>
    </Link>
  )
}

export default function EventsGrid({ events }: { events: Event[] }) {
  const [active, setActive] = useState<'all' | EventType>('all')

  const filtered = active === 'all'
    ? events
    : events.filter((e) => e.type === active)

  return (
    <>
      {/* Filter pills */}
      <div className="flex gap-1.5 flex-wrap px-7 py-4 border-b border-grey-200 bg-white">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`px-4 py-1.5 rounded-full text-[13px] border transition-colors
              ${active === f.value
                ? 'bg-navy text-white border-navy'
                : 'bg-transparent text-grey-600 border-grey-200 hover:border-grey-400'}`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-7 bg-grey-50">
        {filtered.map((e) => (
          <EventCard key={e.slug} event={e} />
        ))}
        {filtered.length === 0 && (
          <p className="col-span-full text-grey-400 text-sm py-12 text-center">
            Keine Veranstaltungen in dieser Kategorie.
          </p>
        )}
      </div>
    </>
  )
}
