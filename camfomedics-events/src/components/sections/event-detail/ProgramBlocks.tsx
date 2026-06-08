import type { Event } from '@/types'

export default function ProgramBlocks({ event }: { event: Event }) {
  if (!event.programBlocks?.length) return null
  return (
    <section className="bg-grey-50">
      <div className="max-w-5xl mx-auto px-7 py-11">
      <p className="eyebrow mb-2">Wissenschaftliches Programm</p>
      <h2 className="font-display text-[24px] text-navy font-normal mb-6">
        Schwerpunktthemen 2026
      </h2>
      {/* Tile grid — 1px grey gap between cells */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                   border border-grey-200 rounded-lg overflow-hidden"
        style={{ gap: '1px', background: '#e2e4ea' }}
      >
        {event.programBlocks.map((block) => (
          <div key={block.title} className="bg-white p-5">
            <p className="text-[10px] tracking-[1.5px] uppercase text-red mb-1.5">
              {block.label}
            </p>
            <h3 className="font-display text-[15px] text-navy font-normal mb-1.5">
              {block.title}
            </h3>
            <p className="text-[13px] text-grey-600 leading-relaxed">
              {block.description}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
