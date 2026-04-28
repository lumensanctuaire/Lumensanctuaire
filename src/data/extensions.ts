export interface Extension {
  id: string
  name: string
  description: string
  unlocked: number
  total: number
  percentage: number
  locked: boolean
}

export const extensions: Extension[] = [
  {
    id: 'les-figures',
    name: 'Les Figures',
    description: "Les grands architectes de la pensée humaine",
    unlocked: 8,
    total: 32,
    percentage: 25,
    locked: false,
  },
  {
    id: 'frise-du-monde',
    name: 'La Frise du Monde',
    description: "L'histoire des idées qui ont façonné l'humanité",
    unlocked: 3,
    total: 7,
    percentage: 43,
    locked: false,
  },
  {
    id: 'protocoles-mentaux',
    name: 'Protocoles Mentaux',
    description: "Les structures de pensée pour l'action lucide",
    unlocked: 0,
    total: 18,
    percentage: 12,
    locked: true,
  },
]
