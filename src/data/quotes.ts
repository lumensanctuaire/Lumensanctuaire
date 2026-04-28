export interface Quote {
  id: string
  text: string
  author: string
  source?: string
  era?: string
}

export const featuredQuote: Quote = {
  id: 'marc-aurele-1',
  text: "Tu as le pouvoir sur ton esprit, pas sur les événements. Réalise cela, et tu trouveras la force.",
  author: 'Marc Aurèle',
  source: 'Pensées pour moi-même',
  era: 'Stoïcisme, IIe siècle',
}

export const heroQuote: Quote = {
  id: 'lumen-1',
  text: "La vraie connaissance n'ajoute pas. Elle révèle.",
  author: 'LUMEN',
  source: 'Système de connaissance',
}

export const quotes: Quote[] = [
  {
    id: 'marc-aurele-1',
    text: "Tu as le pouvoir sur ton esprit, pas sur les événements. Réalise cela, et tu trouveras la force.",
    author: 'Marc Aurèle',
    source: 'Pensées pour moi-même',
    era: 'Stoïcisme, IIe siècle',
  },
  {
    id: 'lao-tseu-1',
    text: "Connais les autres, c'est la sagesse. Te connaître toi-même, c'est l'éveil.",
    author: 'Lao Tseu',
    source: 'Tao Te Ching',
    era: 'Orient, VIe siècle av. J.-C.',
  },
  {
    id: 'epictete-1',
    text: "Ce n'est pas ce qui t'arrive qui te trouble, mais l'opinion que tu as de ce qui t'arrive.",
    author: 'Épictète',
    source: 'Manuel',
    era: 'Stoïcisme',
  },
]
