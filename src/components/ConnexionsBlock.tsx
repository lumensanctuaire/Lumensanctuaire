import Link from 'next/link'

interface ConnexionsBlockProps {
  figures?: Array<{ slug: string; nom: string }>
  lectures?: Array<{ slug: string; titre: string; auteur: string }>
  lois?: Array<{ numero: string; enonce: string }>
}

export default function ConnexionsBlock({ figures = [], lectures = [], lois = [] }: ConnexionsBlockProps) {
  if (!figures.length && !lectures.length && !lois.length) return null

  return (
    <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(232,226,211,0.06)' }}>
      {figures.length > 0 && (
        <div className="flex items-baseline gap-5 mb-2">
          <span
            className="font-cinzel text-[9px] tracking-[0.3em] uppercase shrink-0"
            style={{ color: 'rgba(207,174,106,0.28)', width: '5rem' }}
          >
            Figures
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {figures.map((f) => (
              <Link
                key={f.slug}
                href={`/chambres/figures#${f.slug}`}
                className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
                style={{ color: 'rgba(232,226,211,0.26)' }}
              >
                {f.nom}
              </Link>
            ))}
          </div>
        </div>
      )}
      {lectures.length > 0 && (
        <div className="flex items-baseline gap-5" style={{ marginBottom: lois.length > 0 ? '0.5rem' : 0 }}>
          <span
            className="font-cinzel text-[9px] tracking-[0.3em] uppercase shrink-0"
            style={{ color: 'rgba(207,174,106,0.28)', width: '5rem' }}
          >
            Lectures
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {lectures.map((l) => (
              <Link
                key={l.slug}
                href={`/chambres/lectures#${l.slug}`}
                className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
                style={{ color: 'rgba(232,226,211,0.26)' }}
              >
                {l.auteur}
              </Link>
            ))}
          </div>
        </div>
      )}
      {lois.length > 0 && (
        <div className="flex items-baseline gap-5">
          <span
            className="font-cinzel text-[9px] tracking-[0.3em] uppercase shrink-0"
            style={{ color: 'rgba(207,174,106,0.28)', width: '5rem' }}
          >
            Lois
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            {lois.map((l) => (
              <Link
                key={l.numero}
                href={`/chambres/lois#${l.numero}`}
                title={l.enonce}
                className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
                style={{ color: 'rgba(232,226,211,0.26)' }}
              >
                {l.numero}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
