import type { Event } from '@/types'
import Image from 'next/image'

export default function SpeakersGrid({ event }: { event: Event }) {
  if (!event.speakers?.length) return null
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-7 py-11">
      <p className="eyebrow mb-2">Referentinnen und Referenten</p>
      <h2 className="font-display text-[24px] text-navy font-normal mb-7">
        Unsere Expertinnen und Experten
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {event.speakers.map((spk) => (
          <div key={spk.name} className="text-center">
            {/* Photo box or initials fallback */}
            <div className="w-[100px] h-[100px] rounded-lg mx-auto mb-3 overflow-hidden border border-grey-200">
              {spk.photoUrl ? (
                <Image
                  src={spk.photoUrl}
                  alt={spk.name}
                  width={100}
                  height={100}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center font-display text-[22px] text-white"
                  style={{ background: spk.colour ?? '#0c1a3c' }}
                >
                  {spk.initials}
                </div>
              )}
            </div>
            <p className="text-[13px] font-medium text-navy leading-snug mb-1">
              {spk.name}
            </p>
            <p className="text-[11px] text-grey-400 leading-relaxed">
              {spk.role}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
