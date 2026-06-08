'use client'

import { useEffect, useState } from 'react'

interface Props { targetDate: string }

function calc(target: string) {
  const ms = new Date(target + 'T08:00:00').getTime() - Date.now()
  if (ms <= 0) return { d: 0, h: 0, m: 0 }
  return {
    d: Math.floor(ms / 86_400_000),
    h: Math.floor((ms % 86_400_000) / 3_600_000),
    m: Math.floor((ms % 3_600_000) / 60_000),
  }
}

export default function Countdown({ targetDate }: Props) {
  // Start with zeros — populated client-side only to avoid static prerender issues
  const [t, setT] = useState({ d: 0, h: 0, m: 0 })

  useEffect(() => {
    setT(calc(targetDate))
    const id = setInterval(() => setT(calc(targetDate)), 60_000)
    return () => clearInterval(id)
  }, [targetDate])

  return (
    <div className="flex gap-10">
      {[{ v: t.d, l: 'Tage' }, { v: t.h, l: 'Stunden' }, { v: t.m, l: 'Minuten' }].map(({ v, l }) => (
        <div key={l} className="text-center">
          <div className="font-display text-[30px] text-white leading-none">{v}</div>
          <div className="text-[10px] text-white/40 uppercase tracking-[1px] mt-0.5">{l}</div>
        </div>
      ))}
    </div>
  )
}
