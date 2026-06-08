import type { Event } from '@/types'
import Image from 'next/image'

export default function SponsorsSection({ event }: { event: Event }) {
  if (!event.sponsors?.length) return null
  return (
    <section className="bg-white border-t border-grey-200">
      <div className="max-w-5xl mx-auto px-7 py-7">
      <p className="eyebrow mb-4">Mit freundlicher Unterstützung von</p>
      <div className="flex flex-wrap gap-4 items-center">
        {event.sponsors.map((s) => {
          const inner = s.logoUrl ? (
            <Image
              src={s.logoUrl}
              alt={s.name}
              width={120}
              height={60}
              className="object-contain max-h-[48px] w-auto"
            />
          ) : (
            <span className="text-[12px] text-grey-400 tracking-wide">{s.name}</span>
          )

          return s.url ? (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="h-[68px] px-5 bg-grey-50 border border-grey-200 rounded-md
                         flex items-center justify-center hover:border-grey-400 transition-colors"
            >
              {inner}
            </a>
          ) : (
            <div
              key={s.name}
              className="h-[68px] px-5 bg-grey-50 border border-grey-200 rounded-md
                         flex items-center justify-center"
            >
              {inner}
            </div>
          )
        })}
        <div className="h-[68px] px-5 bg-grey-50 border border-grey-200 border-dashed rounded-md
                        flex items-center justify-center text-[12px] text-grey-400">
          + Partner werden
        </div>
      </div>
      </div>
    </section>
  )
}
