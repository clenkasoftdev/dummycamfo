import type { Metadata } from 'next'
import PageHeader from '@/components/ui/PageHeader'
import { YOUTUBE_VIDEOS, YOUTUBE_CHANNEL } from '@/lib/site-config'

export const metadata: Metadata = { title: 'Videogalerie — Medien' }

export default function VideogalleriePage() {
  return (
    <>
      <PageHeader
        title="Videogalerie"
        eyebrow="Medien"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Medien', href: '/medien/' },
          { label: 'Videogalerie' },
        ]}
      />
      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-[24px] text-navy font-normal">
              Camfomedics Videos
            </h2>
            <a
              href={YOUTUBE_CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] text-red hover:underline"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z"/>
              </svg>
              YouTube Channel
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {YOUTUBE_VIDEOS.map((v) => (
              <a
                key={v.id}
                href={`https://www.youtube.com/watch?v=${v.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-lg overflow-hidden border border-grey-200
                           hover:shadow-[0_2px_12px_rgba(12,26,60,0.08)] transition-shadow bg-white"
              >
                <div className="relative h-[160px] bg-black overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/mqdefault.jpg`}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red/90 flex items-center justify-center
                                    group-hover:bg-red transition-colors">
                      <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-3.5">
                  <p className="text-[13px] text-grey-700 leading-snug">{v.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
