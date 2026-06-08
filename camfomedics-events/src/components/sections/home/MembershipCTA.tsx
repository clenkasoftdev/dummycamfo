import Link from 'next/link'
import Image from 'next/image'
import { MEMBERSHIP_SECTION as M } from '@/lib/site-config'

export default function MembershipCTA() {
  return (
    <section className="bg-white">
      <div className="max-w-5xl mx-auto px-7 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Photo */}
          <div className="relative h-[340px] overflow-hidden rounded-sm">
            <Image
              src={M.image}
              alt="Camfomedics Mitglieder"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* Text */}
          <div>
            <p className="eyebrow mb-3">{M.subheading}</p>
            <h2 className="font-display text-[30px] text-navy font-normal mb-5 leading-snug">
              {M.heading}
            </h2>
            <p className="text-[14px] text-grey-600 leading-loose mb-7">
              {M.body}
            </p>
            <Link
              href={M.ctaHref}
              className="inline-flex items-center px-7 py-2.5 bg-red text-white text-[14px]
                         font-medium rounded-sm hover:bg-red/90 transition-colors"
            >
              {M.ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
