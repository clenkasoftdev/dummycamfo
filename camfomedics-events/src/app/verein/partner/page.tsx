import type { Metadata } from 'next'
import Image from 'next/image'
import PageHeader from '@/components/ui/PageHeader'

export const metadata: Metadata = { title: 'Partner und Sponsoren' }

const PARTNERS = [
  { name: 'MSD',           logo: 'https://cloud-1de12d.becdn.net/media/iW=143&iH=80&oX=0&oY=0&cW=143&cH=80/0a740ce256bfc0191d3629efab68bc9c/image.png',  url: 'https://www.msd.de' },
  { name: 'Partner 2',     logo: 'https://cloud-1de12d.becdn.net/media/iW=204&iH=73&oX=0&oY=0&cW=204&cH=73/f85dc4002ffd4dda91946e8d9bf239a8/image.png',  url: '#' },
  { name: 'Partner 3',     logo: 'https://cloud-1de12d.becdn.net/media/iW=204&iH=73&oX=0&oY=0&cW=204&cH=73/870637c0ec72a2bac37ddcfda19aa64e/image.png',  url: '#' },
  { name: 'Partner 4',     logo: 'https://cloud-1de12d.becdn.net/media/iW=114&iH=68&oX=0&oY=0&cW=114&cH=68/b8e794fea0f868a5153bcba914e65ff7/image.png',  url: '#' },
  { name: 'GHC',           logo: 'https://cloud-1de12d.becdn.net/media/iW=114&iH=100&oX=0&oY=16&cW=114&cH=68/bd1d7f76c505b0a35484e1f23eb6f25d/ghc.jpg',   url: '#' },
]

const SPONSORS = [
  { name: 'MSD',      logo: 'https://cloud-1de12d.becdn.net/media/iW=232&iH=167&oX=0&oY=0&cW=232&cH=166/2f7e633a9fc6e7bd9fcbfea0946f563f/partner-sponsors-logo-0002-Merck-Sharp-Dohme-logo.jpg', url: 'https://www.msd.de' },
  { name: 'Gilead',   logo: 'https://cloud-1de12d.becdn.net/media/iW=232&iH=174&oX=0&oY=4&cW=232&cH=166/871f31c8124a18bb9b6f8bd751a461f6/gilead.jpg', url: 'https://www.gilead.com' },
  { name: 'E.G. Labo',logo: 'https://cloud-1de12d.becdn.net/media/iW=232&iH=234&oX=0&oY=3&cW=232&cH=166/e242d1aadded8f55e12ad6e3a7247353/E-G.jpg',    url: 'https://www.eg-labo.fr' },
]

function LogoGrid({ items, title }: { items: typeof PARTNERS; title: string }) {
  return (
    <div className="mb-12">
      <h2 className="font-display text-[22px] text-navy font-normal mb-6">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {items.map((p) => (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center h-[80px] px-6 bg-white border border-grey-200
                       rounded-sm hover:border-grey-400 transition-colors min-w-[140px]"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={120}
              height={60}
              className="object-contain max-h-[56px] w-auto"
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default function PartnerPage() {
  return (
    <>
      <PageHeader
        title="Partner und Sponsoren"
        eyebrow="Verein"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Verein', href: '/verein/' },
          { label: 'Partner und Sponsoren' },
        ]}
      />

      <section className="bg-grey-50">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <LogoGrid items={SPONSORS} title="Mit freundlicher Unterstützung von" />
          <LogoGrid items={PARTNERS} title="Unsere Partner" />
        </div>
      </section>
    </>
  )
}
