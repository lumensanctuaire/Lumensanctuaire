export interface Module {
  id: string
  title: string
  subtitle: string
  progress: number
  levelNumber: number
  accentColor: string
}

export const currentModules: Module[] = [
  {
    id: 'cause-effet',
    title: 'Cause → Effet',
    subtitle: 'Les chaînes de causalité invisibles',
    progress: 74,
    levelNumber: 1,
    accentColor: '#CFAE6A',
  },
  {
    id: 'biais-cognitifs',
    title: 'Biais cognitifs',
    subtitle: 'Les filtres de la perception',
    progress: 48,
    levelNumber: 1,
    accentColor: '#8BA4C8',
  },
  {
    id: 'regle-21-90',
    title: 'Règle 21/90',
    subtitle: 'La transformation par la répétition',
    progress: 30,
    levelNumber: 1,
    accentColor: '#6A9E8A',
  },
  {
    id: 'narration-realite',
    title: 'Narration vs Réalité',
    subtitle: "Ce que tu crois voir n'est pas ce qui est",
    progress: 12,
    levelNumber: 2,
    accentColor: '#9A7AC0',
  },
]
