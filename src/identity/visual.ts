export const colors = {
  noir:          '#02040A',
  ivoire:        '#E8E2D3',
  orEteint:      '#CFAE6A',
  violetMineral: '#6B5B8E',
  grisPierre:    '#8A8880',
} as const

// violetMineral : réservé aux labels de section de la Bibliothèque (rang 3 uniquement)

export const typography = {
  corps:  'Manrope',
  titres: 'Cinzel',
} as const

export const typographicRanks = {
  rang1: { fontFamily: 'Cinzel',  fontSize: 'clamp(2rem, 4vw, 3rem)',      fontWeight: '600', letterSpacing: '0.05em' },
  rang2: { fontFamily: 'Cinzel',  fontSize: 'clamp(1.3rem, 2.5vw, 2rem)', fontWeight: '400', letterSpacing: '0.04em' },
  rang3: { fontFamily: 'Cinzel',  fontSize: '10px',                         fontWeight: '400', letterSpacing: '0.4em',  textTransform: 'uppercase' as const },
  rang4: { fontFamily: 'Manrope', fontSize: '14px',                         fontWeight: '400', letterSpacing: 'normal' },
  rang5: { fontFamily: 'Manrope', fontSize: '12px',                         fontWeight: '400', letterSpacing: '0.02em' },
} as const

export const spacing = {
  margeFranche:    '2rem',
  blocRespiration: '5rem',
  encadreInset:    '1.5rem',
} as const

export const borders = {
  fin:           '1px solid rgba(207,174,106,0.15)',
  architectural: '1px solid rgba(232,226,211,0.08)',
} as const
