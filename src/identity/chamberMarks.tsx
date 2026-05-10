export type ChamberMarkSlug =
  | 'lois'
  | 'figures'
  | 'lectures'
  | 'cartes'
  | 'reel'
  | 'oeuvres'
  | 'feu'

interface ChamberMarkProps {
  slug: ChamberMarkSlug
  size?: number
  color?: string
  strokeWidth?: number
  className?: string
}

export default function ChamberMark({
  slug,
  size = 20,
  color = 'currentColor',
  strokeWidth = 1,
  className,
}: ChamberMarkProps) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  }

  switch (slug) {
    case 'lois':
      // Axe vertical traversant un cercle — la loi traverse le réel
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="3" x2="12" y2="21" />
        </svg>
      )

    case 'figures':
      // Cercle de présence + axe horizontal — une présence orientée
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="6" />
          <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
      )

    case 'lectures':
      // Trois lignes horizontales — lignes de lecture, longueurs décroissantes
      return (
        <svg {...common}>
          <line x1="5" y1="8"  x2="19" y2="8"  />
          <line x1="5" y1="12" x2="17" y2="12" />
          <line x1="5" y1="16" x2="15" y2="16" />
        </svg>
      )

    case 'cartes':
      // Constellation — 3 nœuds reliés en triangle
      return (
        <svg {...common}>
          <line x1="12" y1="6"  x2="6"  y2="18" />
          <line x1="12" y1="6"  x2="18" y2="18" />
          <line x1="6"  y1="18" x2="18" y2="18" />
          <circle cx="12" cy="6"  r="1.5" fill={color} stroke="none" />
          <circle cx="6"  cy="18" r="1.5" fill={color} stroke="none" />
          <circle cx="18" cy="18" r="1.5" fill={color} stroke="none" />
        </svg>
      )

    case 'reel':
      // Réseau 2×2 — 4 nœuds reliés par une croix diagonale
      return (
        <svg {...common}>
          <line x1="8"  y1="8"  x2="16" y2="16" />
          <line x1="16" y1="8"  x2="8"  y2="16" />
          <circle cx="8"  cy="8"  r="1.5" fill={color} stroke="none" />
          <circle cx="16" cy="8"  r="1.5" fill={color} stroke="none" />
          <circle cx="8"  cy="16" r="1.5" fill={color} stroke="none" />
          <circle cx="16" cy="16" r="1.5" fill={color} stroke="none" />
        </svg>
      )

    case 'oeuvres':
      // Rectangle vertical + ligne médiane — forme avec articulation interne
      return (
        <svg {...common}>
          <rect x="8" y="4" width="8" height="16" />
          <line x1="8" y1="12" x2="16" y2="12" />
        </svg>
      )

    case 'feu':
      // Point central + 3 traits radiaux courts à 120° — irradiation contenue
      return (
        <svg {...common}>
          <line x1="12"  y1="4"  x2="12"   y2="8"  />
          <line x1="19"  y1="16" x2="15.5" y2="14" />
          <line x1="5"   y1="16" x2="8.5"  y2="14" />
          <circle cx="12" cy="12" r="1.5" fill={color} stroke="none" />
        </svg>
      )
  }
}
