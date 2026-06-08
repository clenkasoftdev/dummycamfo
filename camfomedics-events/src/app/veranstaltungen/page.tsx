import type { Metadata } from 'next'
import { getEvents } from '@/lib/events'
import EventsGrid from '@/components/sections/EventsGrid'

export const metadata: Metadata = {
  title: 'Veranstaltungen',
  description: 'Alle Veranstaltungen der Deutsch-Kamerunischen Medizingesellschaft — Jahrestagungen, Webinare, Meet-the-Experts-Tage und Workshops.',
}

export default async function EventsPage() {
  const events = await getEvents()
  return (
    <>
      <section className="bg-navy px-7 pt-14 pb-12">
        <p className="eyebrow mb-2.5">Camfomedics e.V.</p>
        <h1 className="font-display text-[40px] text-white font-normal leading-tight mb-2.5">
          Veranstaltungen
        </h1>
        <p className="text-[14px] text-white/60 max-w-lg leading-loose">
          Alle Veranstaltungen der Deutsch-Kamerunischen Medizingesellschaft —
          Jahrestagungen, Webinare, Meet-the-Experts-Tage und Workshops auf einer
          zentralen Plattform.
        </p>
      </section>
      <EventsGrid events={events} />
    </>
  )
}