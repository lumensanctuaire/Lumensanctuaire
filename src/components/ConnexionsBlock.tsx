import Link from 'next/link'

interface ConnexionsBlockProps {
  figures?: Array<{ slug: string; nom: string }>
  lectures?: Array<{ slug: string; titre: string; auteur: string }>
  lois?: Array<{ numero: string; enonce: string }>
  cartes?: Array<{ slug: string; titre: string }>
  domaines?: Array<{ slug: string; domaine: string }>
}

const labelStyle = {
  color: 'rgba(207,174,106,0.28)',
  width: '5rem',
} as const

const linkStyle = {
  color: 'rgba(232,226,211,0.26)',
} as const

export default function ConnexionsBlock({
  figures = [],
  lectures = [],
  lois = [],
  cartes = [],
  domaines = [],
}: ConnexionsBlockProps) {
  if (!figures.length && !lectures.length && !lois.length && !cartes.length && !domaines.length) return null

  const rows: Array<{ key: string; label: string; nodes: React.ReactNode[] }> = []

  if (figures.length) {
    rows.push({
      key: 'figures',
      label: 'Figures',
      nodes: figures.map((f) => (
        <Link
          key={f.slug}
          href={`/chambres/figures#${f.slug}`}
          className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
          style={linkStyle}
        >
          {f.nom}
        </Link>
      )),
    })
  }

  if (lectures.length) {
    rows.push({
      key: 'lectures',
      label: 'Lectures',
      nodes: lectures.map((l) => (
        <Link
          key={l.slug}
          href={`/chambres/lectures#${l.slug}`}
          className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
          style={linkStyle}
        >
          {l.auteur}
        </Link>
      )),
    })
  }

  if (lois.length) {
    rows.push({
      key: 'lois',
      label: 'Lois',
      nodes: lois.map((l) => (
        <Link
          key={l.numero}
          href={`/chambres/lois#${l.numero}`}
          title={l.enonce}
          className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
          style={linkStyle}
        >
          {l.numero}
        </Link>
      )),
    })
  }

  if (cartes.length) {
    rows.push({
      key: 'cartes',
      label: 'Cartes',
      nodes: cartes.map((c) => (
        <Link
          key={c.slug}
          href={`/chambres/cartes#${c.slug}`}
          className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
          style={linkStyle}
        >
          {c.titre}
        </Link>
      )),
    })
  }

  if (domaines.length) {
    rows.push({
      key: 'domaines',
      label: 'Réel',
      nodes: domaines.map((d) => (
        <Link
          key={d.slug}
          href={`/chambres/reel#${d.slug}`}
          className="font-cinzel text-[9px] tracking-[0.2em] uppercase transition-colors duration-300 hover:text-[#E8E2D3]"
          style={linkStyle}
        >
          {d.domaine}
        </Link>
      )),
    })
  }

  return (
    <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid rgba(232,226,211,0.06)' }}>
      {rows.map((row, i) => (
        <div
          key={row.key}
          className="flex items-baseline gap-5"
          style={{ marginBottom: i < rows.length - 1 ? '0.5rem' : 0 }}
        >
          <span
            className="font-cinzel text-[9px] tracking-[0.3em] uppercase shrink-0"
            style={labelStyle}
          >
            {row.label}
          </span>
          <div className="flex flex-wrap gap-x-5 gap-y-1">{row.nodes}</div>
        </div>
      ))}
    </div>
  )
}
