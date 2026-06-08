import type { Metadata } from 'next'
import HeroCarousel        from '@/components/sections/home/HeroCarousel'
import UpcomingEventBanner from '@/components/sections/home/UpcomingEventBanner'
import AboutSection        from '@/components/sections/home/AboutSection'
import StatsSection        from '@/components/sections/home/StatsSection'
import MembershipCTA       from '@/components/sections/home/MembershipCTA'
import YoutubeSection      from '@/components/sections/home/YoutubeSection'
import ContactCTA          from '@/components/sections/home/ContactCTA'

export const metadata: Metadata = {
  title: 'Camfomedics e.V. | Deutsch-Kamerunische Medizingesellschaft',
  description:
    'Camfomedics e.V. ist die Deutsch-Kamerunische Medizingesellschaft — gegründet 1994 in Tübingen zur Förderung medizinischer Ausbildung und Zusammenarbeit zwischen Deutschland und Kamerun.',
}

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <UpcomingEventBanner />
      <AboutSection />
      <StatsSection />
      <MembershipCTA />
      <YoutubeSection />
      <ContactCTA />
    </>
  )
}
