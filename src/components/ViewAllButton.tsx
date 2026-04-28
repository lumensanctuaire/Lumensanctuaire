'use client'

export default function ViewAllButton() {
  return (
    <button
      className="font-cinzel text-[9.5px] tracking-[0.18em] uppercase transition-colors duration-300"
      style={{ color: 'rgba(207,174,106,0.45)' }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color = '#CFAE6A')
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = 'rgba(207,174,106,0.45)')
      }
    >
      Voir tout
    </button>
  )
}
