'use client'

import { useEffect, useRef, useState } from 'react'
import { STATS } from '@/lib/site-config'

function Counter({ target }: { target: number }) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        if (target === 0) return
        const duration = 1800
        const start = performance.now()
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1)
          setValue(Math.floor(p * target))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className="font-display text-[48px] text-navy leading-none">{value.toLocaleString()}</div>
}

export default function StatsSection() {
  return (
    <section className="bg-grey-50 border-t border-b border-grey-200">
      <div className="max-w-5xl mx-auto px-7 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map((s) => (
            <div key={s.label}>
              <Counter target={s.value} />
              <p className="text-[12px] text-grey-400 mt-2 leading-snug uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
