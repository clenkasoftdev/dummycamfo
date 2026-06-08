import type { Event } from '@/types'

export default function EventAbout({ event }: { event: Event }) {
  if (!event.description) return null
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-7 py-11">
      <p className="eyebrow mb-2">Über die Veranstaltung</p>
      <h2 className="font-display text-[24px] text-navy font-normal mb-5">
        Afrikanische Ärzteexzellenz in Deutschland
      </h2>
      <div className="text-[14px] text-grey-600 leading-loose max-w-2xl space-y-4">
        {event.description.split('\n\n').map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      </div>
    </section>
  )
}
