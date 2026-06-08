import type { Event, ScheduleItem } from '@/types'

function ScheduleRow({ item }: { item: ScheduleItem }) {
  return (
    <div
      className={`flex gap-4 px-6 py-3 border-b border-grey-100 last:border-b-0
                  ${item.isBreak ? 'bg-grey-50' : 'bg-white'}`}
    >
      <span
        className={`text-[12px] font-medium min-w-[90px] shrink-0 pt-0.5
                    ${item.isBreak ? 'text-grey-400' : 'text-red'}`}
      >
        {item.time}
      </span>
      <div>
        <strong
          className={`block text-[13px] mb-0.5 font-medium
                      ${item.isBreak ? 'text-grey-400 font-normal' : 'text-grey-800'}`}
        >
          {item.title}
        </strong>
        {item.speaker && (
          <em className="text-[12px] text-grey-400 not-italic">{item.speaker}</em>
        )}
      </div>
    </div>
  )
}

export default function ScheduleSection({ event }: { event: Event }) {
  if (!event.schedule?.length) return null
  return (
    <section className="bg-grey-50">
      <div className="max-w-5xl mx-auto px-7 py-11">
      <p className="eyebrow mb-2">Zeitplan</p>
      <h2 className="font-display text-[24px] text-navy font-normal mb-6">
        Programm im Überblick
      </h2>

      <div className="space-y-4">
        {event.schedule.map((day) => (
          <div
            key={day.date}
            className="border border-grey-200 rounded-lg overflow-hidden"
          >
            {/* Day header */}
            <div className="bg-navy px-6 py-3.5 flex justify-between items-center">
              <h3 className="font-display text-[17px] text-white font-normal">
                {day.date}
              </h3>
              <span className="text-[12px] text-white/50">{day.label}</span>
            </div>

            {/* Blocks */}
            {day.blocks.map((block, bi) => (
              <div key={bi}>
                {block.blockLabel && (
                  <div className="bg-grey-50 px-6 py-1.5 border-t border-b border-grey-200">
                    <span className="text-[10px] tracking-[1.5px] uppercase text-red">
                      {block.blockLabel}
                    </span>
                  </div>
                )}
                {block.items.map((item, ii) => (
                  <ScheduleRow key={ii} item={item} />
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
