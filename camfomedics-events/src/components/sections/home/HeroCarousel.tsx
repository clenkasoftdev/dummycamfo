'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HERO_SLIDES } from '@/lib/site-config'

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setCurrent((c) => (c + 1) % HERO_SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const slide = HERO_SLIDES[current]

  return (
    <section className="relative min-h-[620px] flex items-center overflow-hidden bg-navy">

      {/* Background image — crossfades between slides */}
      {HERO_SLIDES.map((s, i) => (
        s.image && (
          <Image
            key={s.image}
            src={s.image}
            alt=""
            fill
            priority={i === 0}
            className="object-cover object-top transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          />
        )
      ))}

      {/* Dark overlay so text is always legible */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Red accent bar left */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-7 py-20 w-full">
        <p className="text-[11px] tracking-[3px] uppercase text-white/50 mb-4">
          Camfomedics e.V. · Deutsch-Kamerunische Medizingesellschaft
        </p>
        <h1 className="font-display text-[42px] md:text-[56px] text-white font-normal leading-tight max-w-2xl mb-3">
          {slide.headline}
        </h1>
        {slide.subline && (
          <p className="text-[18px] text-white/70 mb-8">{slide.subline}</p>
        )}
        <div className="flex flex-wrap gap-3 mt-8">
          <Link
            href={slide.ctaPrimary.href}
            className="px-6 py-2.5 bg-red text-white text-[14px] font-medium rounded-sm
                       hover:bg-red/90 transition-colors uppercase tracking-wide"
          >
            {slide.ctaPrimary.label}
          </Link>
          <Link
            href={slide.ctaSecondary.href}
            className="px-6 py-2.5 border border-white/30 text-white text-[14px] font-medium
                       rounded-sm hover:border-white hover:bg-white/10 transition-colors uppercase tracking-wide"
          >
            {slide.ctaSecondary.label}
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-red w-6' : 'bg-white/30 w-1.5'}`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
