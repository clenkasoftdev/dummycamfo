import { YOUTUBE_VIDEOS, YOUTUBE_CHANNEL } from '@/lib/site-config'

export default function YoutubeSection() {
  return (
    <section className="bg-grey-50 border-t border-grey-200">
      <div className="max-w-5xl mx-auto px-7 py-10">
        <div className="flex items-center justify-between mb-5">
          <p className="text-[13px] font-medium text-navy">Camfomedics-Videos</p>
          <a
            href={YOUTUBE_CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[12px] text-red hover:underline"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
            </svg>
            YouTube Channel
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {YOUTUBE_VIDEOS.map((v) => (
            <a
              key={v.id}
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-lg overflow-hidden border border-grey-200 bg-white
                         hover:shadow-[0_2px_12px_rgba(12,26,60,0.08)] transition-shadow"
            >
              {/* YouTube thumbnail */}
              <div className="relative h-[130px] bg-black overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                  alt={v.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-red/90 flex items-center justify-center
                                  group-hover:bg-red transition-colors">
                    <svg className="w-4 h-4 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-3">
                <p className="text-[12px] text-grey-600 leading-snug line-clamp-2">{v.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
