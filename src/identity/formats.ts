export const layoutConstraints = {
  maxWidth:      '1400px',
  paddingH:      { mobile: '1.5rem', desktop: '3rem' },
  sectionGap:    '5rem',
  titreHierarchie: ['H1', 'H2', 'H3', 'H4'] as const,
} as const

// Interdits de design — à respecter dans tous les composants
export const designProhibitions = [
  'Aucune animation sur éléments structurels (float, breathe interdits)',
  'Aucun filter:blur() empilé plus d\'une fois par page',
  'Aucune couleur hors des 5 tokens de visual.ts',
  'Aucun système de particules',
  'Aucun effet de brume ou fog',
  'Aucune fonte tierce — Cinzel et Manrope uniquement',
  'Aucun dégradé radial au-delà d\'un seul par section',
  'Aucune barre de progression quantifiée',
  'Aucun social proof sans source réelle vérifiable',
  'Aucune intensité mystique non ancrée doctrinalement',
] as const
