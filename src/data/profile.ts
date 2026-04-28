export interface UserProfile {
  name: string
  title: string
  badge: string
  level: number
  levelName: string
  modulesCompleted: number
  totalModules: number
  learningHours: number
  extensionsUnlocked: number
  totalExtensions: number
  keysUnlocked: number
  totalKeys: number
  overallProgress: number
  levelProgress: {
    voir: number
    comprendre: number
    maitriser: number
  }
}

export const userProfile: UserProfile = {
  name: 'Aurelius',
  title: 'Chercheur de vérité',
  badge: 'Niveau Voir',
  level: 1,
  levelName: 'Voir',
  modulesCompleted: 6,
  totalModules: 14,
  learningHours: 12,
  extensionsUnlocked: 3,
  totalExtensions: 10,
  keysUnlocked: 7,
  totalKeys: 24,
  overallProgress: 42,
  levelProgress: {
    voir: 68,
    comprendre: 12,
    maitriser: 0,
  },
}
