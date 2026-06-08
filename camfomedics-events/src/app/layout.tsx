import type { Metadata } from 'next'
import './globals.css'
import Navbar            from '@/components/Navbar'
import Footer            from '@/components/Footer'
import FeaturedEvents    from '@/components/sections/home/FeaturedEvents'
import NewsSection       from '@/components/sections/home/NewsSection'
import BeitrittsSection  from '@/components/sections/home/BeitrittsSection'
import DonateSection     from '@/components/sections/home/DonateSection'
import { SITE }          from '@/lib/site-config'
import { getEvents }     from '@/lib/events'

export const metadata: Metadata = {
  title: {
    default:  `${SITE.name} | ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description:
    'Camfomedics e.V. ist die Deutsch-Kamerunische Medizingesellschaft — gegründet 1994 in Tübingen zur Förderung medizinischer Ausbildung und Zusammenarbeit zwischen Deutschland und Kamerun.',
  metadataBase: new URL('https://www.camfomedics.org'),
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const events = await getEvents()
  const jahrestagungen = events
    .filter((e: any) => e.type === 'jahrestagung')
    .sort((a: any, b: any) => b.year - a.year)
    .slice(0, 6)

  return (
    <html lang="de">
      <body className="font-sans">
        <Navbar jahrestagungen={jahrestagungen} />
        <main>{children}</main>
        <FeaturedEvents />
        <NewsSection />
        <BeitrittsSection />
        <DonateSection />
        <Footer />
      </body>
    </html>
  )
}