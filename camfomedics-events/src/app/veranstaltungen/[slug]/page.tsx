import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getEvents, getEventBySlug } from '@/lib/events'
import EventHero       from '@/components/sections/event-detail/EventHero'
import EventAbout      from '@/components/sections/event-detail/EventAbout'
import ProgramBlocks   from '@/components/sections/event-detail/ProgramBlocks'
import SpeakersGrid    from '@/components/sections/event-detail/SpeakersGrid'
import ScheduleSection from '@/components/sections/event-detail/ScheduleSection'
import TicketsSection  from '@/components/sections/event-detail/TicketsSection'
import SponsorsSection from '@/components/sections/event-detail/SponsorsSection'

export async function generateStaticParams() {
  const events = await getEvents()
  return events
    .map((e: any) => ({ slug: e.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const event = await getEventBySlug(slug)
  if (!event) return {}
  return { title: event.title, description: event.excerpt }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const event = await getEventBySlug(slug)

  if (!event) notFound()

  return (
    <>
      <div className="bg-grey-50 border-b border-grey-200">
        <div className="max-w-5xl mx-auto px-7 h-[38px] flex items-center">
          <Link href="/veranstaltungen/" className="text-[13px] text-grey-600 hover:text-navy transition-colors">
            ← Alle Veranstaltungen
          </Link>
        </div>
      </div>
      <EventHero       event={event} />
      <EventAbout      event={event} />
      <ProgramBlocks   event={event} />
      <SpeakersGrid    event={event} />
      <ScheduleSection event={event} />
      <TicketsSection  event={event} />
      <SponsorsSection event={event} />
    </>
  )
}