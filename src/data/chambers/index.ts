import { colors } from '@/identity/visual'

type PaletteColor = typeof colors[keyof typeof colors]

export interface Chamber {
  slug: string
  name: string
  declaration: string
  dimension: 'I' | 'II' | 'III' | 'I–III'
  accentColor: PaletteColor
  isOpen: boolean
}

export const chambers: Chamber[] = [
  {
    slug: 'lois',
    name: 'Chambre des Lois',
    declaration: 'Les principes non négociables. Brefs, mémorables, fondateurs.',
    dimension: 'I–III',
    accentColor: colors.orEteint,
    isOpen: true,
  },
  {
    slug: 'figures',
    name: 'Chambre des Figures',
    declaration: 'Auteurs, bâtisseurs, stratèges, penseurs. Pour orienter, non pour idolâtrer.',
    dimension: 'I',
    accentColor: colors.ivoire,
    isOpen: true,
  },
  {
    slug: 'lectures',
    name: 'Chambre des Lectures',
    declaration: 'Livres, textes, citations, notes. Bibliothèque commentée.',
    dimension: 'I',
    accentColor: colors.grisPierre,
    isOpen: true,
  },
  {
    slug: 'cartes',
    name: 'Chambre des Cartes',
    declaration: 'Schémas mentaux, taxonomies, architectures de pensée.',
    dimension: 'II',
    accentColor: colors.grisPierre,
    isOpen: true,
  },
  {
    slug: 'reel',
    name: 'Chambre du Réel',
    declaration: "Pouvoir, travail, transmission, psychologie, création. Le monde tel qu'il est.",
    dimension: 'II',
    accentColor: colors.grisPierre,
    isOpen: true,
  },
  {
    slug: 'oeuvres',
    name: 'Chambre des Œuvres',
    declaration: 'Essais, traités, séries, capsules. Les formes achevées.',
    dimension: 'III',
    accentColor: colors.ivoire,
    isOpen: true,
  },
  {
    slug: 'feu',
    name: 'Chambre du Feu',
    declaration: "Manifestes, paroles de seuil, appels à l'élévation.",
    dimension: 'III',
    accentColor: colors.violetMineral,
    isOpen: true,
  },
]

export function getChamber(slug: string): Chamber | undefined {
  return chambers.find((c) => c.slug === slug)
}
