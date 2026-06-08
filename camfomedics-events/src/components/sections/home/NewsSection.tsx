import Image from 'next/image'
import { NEWS_ARTICLES } from '@/lib/site-config'

export default function NewsSection() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-7 py-14">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="eyebrow mb-1.5">Nachrichten</p>
            <h2 className="font-display text-[26px] text-navy font-normal">Aktuelles</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {NEWS_ARTICLES.map((article) => (
            <a
              key={article.title}
              href={article.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-grey-200 rounded-lg overflow-hidden
                         hover:shadow-[0_2px_16px_rgba(12,26,60,0.08)] transition-shadow bg-white"
            >
              <div className="relative h-44 bg-grey-100 overflow-hidden">
                {article.image && (
                  <Image src={article.image} alt={article.title} fill className="object-cover" />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-[14px] font-medium text-navy leading-snug group-hover:text-red transition-colors">
                  {article.title}
                </h3>
                <p className="text-[12px] text-red mt-2">Weiterlesen →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
