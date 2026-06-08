'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { SITE, PROJECTS } from '@/lib/site-config'

export default function Navbar({ jahrestagungen = [] }: { jahrestagungen?: any[] }) {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const getYear = (date: string) => {
    if (/^\d{4}-/.test(date)) return date.substring(0, 4)
    const match = date.match(/\d{4}/)
    return match ? match[0] : ''
  }

  const NAV = [
    { label: 'Startseite', href: '/' },
    {
      label: 'Veranstaltungen',
      href: '/veranstaltungen/',
      children: [
        { label: 'Alle Veranstaltungen', href: '/veranstaltungen/' },
        ...jahrestagungen.map((e: any) => ({
           label: e.menuName ?? e.title,
          href: `/veranstaltungen/${e.slug}/`,
        })),
      ],
    },
    {
      label: 'Verein',
      href: '/verein/',
      children: [
        { label: 'Über Uns',              href: '/verein/ueber-uns/' },
        { label: 'Partner und Sponsoren', href: '/verein/partner/' },
        { label: 'Vorstand',              href: '/verein/vorstand/' },
        { label: 'Vision und Strategie',  href: '/verein/vision-und-strategie/' },
        { label: 'Geschichte',            href: '/verein/geschichte/' },
        { label: 'Aufgaben',              href: '/verein/aufgaben/' },
      ],
    },
    { label: 'Service', href: '/service/' },
    {
      label: 'Projekte',
      href: '/projekte/',
      children: [
        { label: 'Alle Projekte', href: '/projekte/' },
        ...PROJECTS
          .filter((p) => p.active)
          .map((p) => ({ label: p.label, href: `/projekte/${p.slug}/` })),
      ],
    },
    {
      label: 'Pflege',
      href: '/pflege/',
      children: [
        { label: 'Aktuelles',       href: '/pflege/aktuelles/' },
        { label: 'Dein Angebot',    href: '/pflege/dein-angebot/' },
        { label: 'Partner',         href: '/pflege/partner/' },
        { label: 'Beitritt',        href: '/pflege/beitritt/' },
        { label: 'Ansprechpartner', href: '/pflege/ansprechpartner/' },
      ],
    },
    {
      label: 'Medien',
      href: '/medien/',
      children: [
        { label: 'Fotogallerie',      href: '/medien/fotogallerie/' },
        { label: 'Videogalerie',      href: '/medien/videogalerie/' },
        { label: 'Dokumente',         href: '/medien/dokumente/' },
        { label: 'Newsletter-Archiv', href: '/medien/newsletter-archiv/' },
      ],
    },
    { label: 'Mitgliedschaft', href: '/mitgliedschaft/' },
  ]

  return (
    <header className="sticky top-0 z-50 shadow-sm">

      {/* ── Top contact bar ── */}
      <div className="bg-navy border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto px-7 h-9 flex items-center justify-between">
          <div className="flex items-center gap-5 text-[12px] text-white/60">
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g,'')}`} className="hover:text-white transition-colors">
              {SITE.phone}
            </a>
          </div>
          <div className="flex items-center gap-2">
            
              <a href={`${SITE.mainSiteUrl}/donate`}
              className="text-[12px] bg-red text-white px-3 py-0.5 rounded-sm hover:bg-red/90 transition-colors"
            >
              Donate Now
            </a>
            
              <a href={`${SITE.mainSiteUrl}/kontakt`}
              className="text-[12px] border border-white/30 text-white/70 px-3 py-0.5 rounded-sm hover:text-white hover:border-white transition-colors"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>

      {/* ── Main nav bar ── */}
      <div className="bg-white border-b border-grey-200">
        <div className="max-w-7xl mx-auto px-7 flex items-center justify-between h-[64px]">

          {/* Logo */}
          <Link href="/" aria-label="Camfomedics Startseite">
            <Image
              src="/images/camfomedics_logo.png"
              alt="Camfomedics e.V."
              width={180}
              height={60}
              className="h-[44px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                
                 <a href={item.href}
                  className={`flex items-center gap-0.5 px-3.5 py-2 text-[13px] font-medium transition-colors
                    ${pathname === item.href || pathname.startsWith(item.href === '/' ? '/_never_' : item.href)
                      ? 'text-red border-b-2 border-red'
                      : 'text-grey-800 hover:text-red'}`}
                >
                  {item.label}
                  {item.children && (
                    <svg className="w-3 h-3 mt-0.5 text-grey-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path d="M6 9l6 6 6-6"/>
                    </svg>
                  )}
                </a>

                {/* Dropdown */}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 w-56 bg-white border border-grey-200
                                  shadow-lg rounded-b-md py-1 z-50">
                    {item.children.map((child) => (
                      
                      <a key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-[13px] text-grey-700 hover:bg-grey-50
                                   hover:text-red transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-navy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen
                ? <path d="M6 18L18 6M6 6l12 12"/>
                : <path d="M4 6h16M4 12h16M4 18h16"/>}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-grey-200 bg-white pb-4">
            {NAV.map((item) => (
              <div key={item.label}>
                <a
                  href={item.href}
                  className={`block px-7 py-2.5 text-[14px] font-medium
                    ${pathname === item.href || pathname.startsWith(item.href === '/' ? '/_never_' : item.href) ? 'text-red' : 'text-grey-800'}`}
                >
                  {item.label}
                </a>
                {item.children && (
                  <div className="bg-grey-50 border-t border-b border-grey-100">
                    {item.children.map((child) => (
                      
                     <a key={child.label}
                        href={child.href}
                        className="block px-10 py-2 text-[13px] text-grey-600 hover:text-red"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}