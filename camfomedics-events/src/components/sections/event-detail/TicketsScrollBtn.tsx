'use client'

interface Props {
  variant?: 'solid' | 'outline'
}

export default function TicketsScrollBtn({ variant = 'solid' }: Props) {
  const base = 'inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-[14px] font-medium transition-colors'
  const styles = {
    solid:   `${base} bg-red text-white hover:bg-red/90`,
    outline: `${base} border border-white/40 text-white hover:border-white hover:bg-white/10`,
  }

  return (
    <button
      onClick={() => document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' })}
      className={styles[variant]}
    >
      Online anmelden
    </button>
  )
}
