import Link from 'next/link'

interface Crumb { label: string; href?: string }

interface Props {
  title: string
  eyebrow?: string
  breadcrumbs?: Crumb[]
}

export default function PageHeader({ title, eyebrow, breadcrumbs }: Props) {
  return (
    <div className="bg-navy">
      {/* Breadcrumb */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <div className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-7 h-9 flex items-center gap-2 text-[12px]">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/25">›</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/50 hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white/75">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Title */}
      <div className="max-w-5xl mx-auto px-7 py-12">
        {eyebrow && (
          <p className="text-[11px] tracking-[2.5px] uppercase text-red mb-2">{eyebrow}</p>
        )}
        <h1 className="font-display text-[38px] text-white font-normal leading-tight">
          {title}
        </h1>
      </div>
    </div>
  )
}
