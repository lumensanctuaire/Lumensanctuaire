export interface NavItem {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Portail', href: '/' },
  { label: 'Parcours', href: '/parcours' },
  { label: 'Chambres', href: '/chambres' },
  { label: 'Bibliothèque', href: '/bibliotheque' },
  { label: 'Figures', href: '/chambres/figures' },
]
