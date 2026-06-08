export type EventType = 'jahrestagung' | 'meet-experts' | 'webinar' | 'workshop'

export interface Speaker {
  initials: string
  name: string
  role: string
  colour?: string   // tailwind bg colour class or hex
  photoUrl?: string // URL to speaker photo
}

export interface ScheduleItem {
  time: string
  title: string
  speaker?: string
  isBreak?: boolean
}

export interface ScheduleDay {
  date: string
  label: string
  blocks: Array<{
    blockLabel?: string  // e.g. "Block I — Prävention"
    items: ScheduleItem[]
  }>
}

export interface ProgramBlock {
  label: string
  title: string
  description: string
}

export interface TicketTier {
  audience: string
  price: number
  subLabel: string
  features: string[]
  dimFeature?: string
}

export interface ProjectActivity {
  image:   string
  caption: string
}

export interface Project {
  slug:        string
  label:       string
  tag:         string
  active:      boolean   // only active projects get their own detail page
  shortDesc:   string    // for the index card
  fullTitle?:  string    // longer heading for detail page
  logoUrl?:    string
  heroImage?:  string
  heroCaption?:string
  intro:       string[]  // paragraphs
  goals?:      string[]  // bullet list
  steps?:      string[]  // numbered process steps
  stepsPreamble?: string
  activities?: ProjectActivity[]
  ctaText?:    string
}

export interface Sponsor {
  name: string
  logoUrl?: string
  url?: string      // link to sponsor's website
}

export interface Event {
  slug: string
  type: EventType
  menuName?: string  // optional override for navbar (e.g. "31. Jahrestagung" instead of "31-annual-meeting-2025")
  year: number
  upcoming: boolean
  title: string
  date: string
  location: string
  excerpt: string
  // detail-page fields (optional — only annual meetings need these)
  edition?: string
  format?: string
  thumbnailImage?: string  // card thumbnail, CDN or local path
  heroImage?: string        // path relative to /public, e.g. '/images/events/cam2026-hero.jpg'
  registrationFormUrl?: string  // PDF download link shown as primary CTA in hero
  description?: string
  speakers?: Speaker[]
  programBlocks?: ProgramBlock[]
  schedule?: ScheduleDay[]
  tickets?: TicketTier[]
  sponsors?: Sponsor[]
  paypalEmail?: string
  bankIban?: string
  bankBic?: string
  bankName?: string
}
