import { PAST_EVENTS } from './site-config'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'https://camfomedics.clenkasoft.com'


export async function getEvents() {
  let futureEvents = []
  try {
    console.log('Fetching future events from API...')
    const res = await fetch(`${API}/api/events.php`, { cache: 'no-store' })
    console.log('API status:', res.status)
    futureEvents = await res.json()
  } catch (e) {
    console.log('Error fetching future events from API:', e)
    console.warn('Could not fetch future events:', e)
  }
  console.log('Future events from API:', futureEvents)
  return [...futureEvents, ...PAST_EVENTS]
}

export async function getEventBySlug(slug: string) {
  // Check future events from API first
  try {
    console.log(`Fetching event with slug "${slug}" from API...`)
    const res = await fetch(`${API}/api/events.php?slug=${slug}`, { cache: 'no-store' })
    console.log('API status:', res.status)
    if (res.ok) {
      const event = await res.json()
      if (event && !event.error) return event
    }
  } catch (e) {
    console.warn('Could not fetch event from API:', e)
  }
  // Fall back to static past events
  return PAST_EVENTS.find((e) => e.slug === slug) ?? null
}