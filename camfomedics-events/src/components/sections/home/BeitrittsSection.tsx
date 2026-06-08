import Link from 'next/link'
import Image from 'next/image'

export default function BeitrittsSection() {
  return (
    <section className="relative overflow-hidden min-h-[420px] flex items-center">
      {/* Background photo */}
      <Image
        src="https://cloud-1de12d.becdn.net/media/iW=819&iH=690&oX=146&oY=0&cW=478&cH=690/bd6508daaad63255ddee7474c794292a/image.png"
        alt=""
        fill
        className="object-cover object-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content — centred */}
      <div className="relative z-10 max-w-2xl mx-auto px-7 py-16 text-center">
        <p className="text-[11px] tracking-[2px] uppercase text-white/50 mb-4">
          Camfomedics e.V. Beitritt
        </p>
        <h2 className="font-display text-[26px] text-white font-normal mb-6 leading-snug">
          Werde Mitglied – Gemeinsam für eine bessere Gesundheitsversorgung in Kamerun!
        </h2>
        <div className="text-[14px] text-white/70 leading-loose space-y-4 mb-6">
          <p>
            Wir freuen uns, dass du Interesse an einer Mitgliedschaft in unserem medizinischen Verein hast.
            Unser Ziel ist es, die Zusammenarbeit zwischen verschiedenen Gesundheitsberufen zu stärken und
            Pflegekräfte aktiv einzubeziehen, um gemeinsam die Qualität der Versorgung sowohl in Deutschland
            als auch in Kamerun zu verbessern.
          </p>
          <p>
            Als Mitglied trägst du dazu bei, die Arbeitsbedingungen in der Pflege zu stärken und innovative
            Ansätze für eine menschliche, kompetente und umfassende Betreuung voranzutreiben.
          </p>
          <p>
            Fülle einfach das untenstehende Formular aus, um Teil unserer Gemeinschaft zu werden.
            Lass uns gemeinsam die Zukunft der Medizin in unserer Heimat gestalten!
          </p>
        </div>
        <p className="text-[14px] text-white/70 mb-8">
          Der jährliche Mitgliedsbeitrag beträgt{' '}
          <strong className="text-white">50 Euro</strong>{' '}
          und unterstützt dich dabei, deine beruflichen Ziele in einem starken Netzwerk zu erreichen!
        </p>
        <Link
          href="/mitgliedschaft/"
          className="inline-flex items-center gap-2 px-7 py-2.5 bg-red text-white text-[14px]
                     font-medium rounded-sm hover:bg-red/90 transition-colors"
        >
          Beitrittsformular →
        </Link>
      </div>
    </section>
  )
}
