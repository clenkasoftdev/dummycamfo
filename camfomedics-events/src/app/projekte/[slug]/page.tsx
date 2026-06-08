import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '@/lib/site-config'
import PageHeader from '@/components/ui/PageHeader'

// Pre-render a page for every active project slug
export function generateStaticParams() {
  return PROJECTS.filter((p) => p.active).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: `${project.label} — Projekte` }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project || !project.active) notFound()

  return (
    <>
      <PageHeader
        title={project.label}
        eyebrow="Projekte"
        breadcrumbs={[
          { label: 'Startseite', href: '/' },
          { label: 'Projekte', href: '/projekte/' },
          { label: project.label },
        ]}
      />

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-7 py-14">

          {/* Optional logo */}
          {project.logoUrl && (
            <div className="mb-5">
              <Image
                src={project.logoUrl}
                alt={`${project.label} Logo`}
                width={120}
                height={78}
                className="object-contain"
              />
            </div>
          )}

          {/* Tag + full title */}
          <span className="inline-block text-[10px] tracking-[1.5px] uppercase
                           bg-red/10 text-red px-2.5 py-1 rounded-sm mb-4">
            {project.tag}
          </span>
          <h2 className="font-display text-[26px] text-navy font-normal mb-8 max-w-2xl leading-snug">
            {project.fullTitle ?? project.label}
          </h2>

          {/* Hero image + intro — two col when hero exists */}
          {project.heroImage ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
              <div className="relative h-[340px] rounded-sm overflow-hidden border border-grey-200">
                <Image src={project.heroImage} alt={project.label} fill className="object-cover" />
                {project.heroCaption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-navy/70 px-4 py-2">
                    <p className="text-[12px] text-white/80">{project.heroCaption}</p>
                  </div>
                )}
              </div>
              <div className="space-y-4 text-[14px] text-grey-600 leading-loose">
                {project.intro.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-[14px] text-grey-600 leading-loose max-w-3xl mb-12">
              {project.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}

          {/* Goals — bullet list */}
          {project.goals && project.goals.length > 0 && (
            <div className="bg-grey-50 border border-grey-200 rounded-lg p-8 max-w-3xl mb-12">
              <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-5">Unsere Ziele</p>
              <p className="text-[14px] text-grey-600 leading-loose mb-5">Wir möchten:</p>
              <ul className="space-y-3">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] text-grey-700 leading-relaxed">
                    <span className="text-red mt-1 shrink-0">›</span>
                    {g}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Numbered process steps */}
          {project.steps && project.steps.length > 0 && (
            <div className="bg-grey-50 border border-grey-200 rounded-lg p-8 max-w-3xl mb-12">
              <p className="text-[11px] tracking-[2px] uppercase text-grey-400 mb-5">Unser Vorgehen</p>
              {project.stepsPreamble && (
                <p className="text-[14px] text-grey-600 leading-loose mb-6">{project.stepsPreamble}</p>
              )}
              <ol className="space-y-3">
                {project.steps.map((s, i) => (
                  <li key={i} className="flex gap-4 text-[14px] text-grey-700 leading-relaxed">
                    <span className="w-6 h-6 rounded-full bg-red text-white text-[12px] font-medium
                                     flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {s}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Activities photo grid */}
          {project.activities && project.activities.length > 0 && (
            <div className="mb-12">
              <p className="eyebrow mb-5">Aktivitäten</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {project.activities.map((a) => (
                  <div key={a.caption} className="rounded-sm overflow-hidden border border-grey-200">
                    <div className="relative h-[200px]">
                      <Image src={a.image} alt={a.caption} fill className="object-cover" />
                    </div>
                    <p className="text-[12px] text-grey-500 px-4 py-2.5 bg-grey-50">{a.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA box */}
          {project.ctaText && (
            <div className="border border-grey-200 rounded-lg p-7 max-w-xl bg-grey-50">
              <p className="font-display text-[18px] text-navy font-normal mb-3">
                Helfen Sie uns, einen Unterschied zu machen
              </p>
              <p className="text-[13px] text-grey-600 leading-loose mb-5">{project.ctaText}</p>
              <Link
                href="/mitgliedschaft/"
                className="inline-flex items-center px-5 py-2.5 bg-red text-white text-[13px]
                           font-medium rounded-sm hover:bg-red/90 transition-colors"
              >
                Mitglied werden →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
