export interface Dimension {
  number: number
  romanNumeral: string
  name: string
  tagline: string
  description: string
}

export const levels: Dimension[] = [
  {
    number: 1,
    romanNumeral: 'I',
    name: 'Voir',
    tagline: 'Lire ce qui échappe.',
    description:
      'Le monde est lisible pour qui sait regarder. Cette dimension ouvre la perception aux lois invisibles, aux schémas sous-jacents, à ce qui structure le réel derrière les apparences.',
  },
  {
    number: 2,
    romanNumeral: 'II',
    name: 'Comprendre',
    tagline: 'Lire ce qui dirige.',
    description:
      'Derrière chaque événement se trouve une logique. Derrière chaque décision, un système. Cette dimension révèle les dynamiques humaines, les structures de pouvoir, les mécanismes qui gouvernent les interactions.',
  },
  {
    number: 3,
    romanNumeral: 'III',
    name: 'Maîtriser',
    tagline: 'Lire ce qui n\u2019est pas encore.',
    description:
      'La maîtrise n\u2019est pas le contrôle \u2014 c\u2019est la clarté. Voir les cycles, anticiper les mouvements, agir avec la précision de celui qui tient le réel dans sa profondeur.',
  },
]
