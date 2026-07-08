export async function getNavigation(): Promise<TNavigationItem[]> {
  return [
    {
      id: '1',
      href: '/',
      name: 'Ana Sayfa',
    },
    {
      id: '2',
      href: '/about',
      name: 'Hakkımızda',
    },
    {
      id: '3',
      href: '/contact',
      name: 'İletişim',
    },
  ]
}

export async function getNavMegaMenu(): Promise<TNavigationItem> {
  return {}
}

// ============ TYPE =============
export type TNavigationItem = Partial<{
  id: string
  href: string
  name: string
  type?: 'dropdown' | 'mega-menu'
  isNew?: boolean
  children?: TNavigationItem[]
}>
