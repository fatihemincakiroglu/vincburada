import { getMarkalar } from '@/data/markalar'

export async function getNavigation(): Promise<TNavigationItem[]> {
  const markalar = await getMarkalar()

  return [
    {
      id: '1',
      href: '/',
      name: 'Ana Sayfa',
    },
    {
      id: '2',
      href: '/vinc',
      name: 'Vinç Çeşitleri',
      type: 'dropdown',
      children: [
        { id: '2-1', href: '/vinc', name: 'Vinç' },
        { id: '2-2', href: '/sepetli-vinc', name: 'Sepetli Vinç' },
        { id: '2-3', href: '/kule-vinc', name: 'Kule Vinç' },
        { id: '2-4', href: '/elektrikli-vinc', name: 'Elektrikli Vinç' },
        { id: '2-5', href: '/mobil-vinc', name: 'Mobil Vinç' },
        { id: '2-6', href: '/hiyap-vinc', name: 'Hiyap Vinç' },
      ],
    },
    {
      id: '8',
      href: '/markalar',
      name: 'Markalar',
      type: 'dropdown',
      children: markalar.map((m) => ({
        id: `8-${m.handle}`,
        href: `/markalar/${m.handle}`,
        name: m.marka,
      })),
    },
    {
      id: '3',
      href: '/hakkimizda',
      name: 'Hakkımızda',
    },
    {
      id: '4',
      href: '/referanslar',
      name: 'Referanslar',
    },
    {
      id: '5',
      href: '/blog',
      name: 'Blog',
    },
    {
      id: '6',
      href: '/sss',
      name: 'SSS',
    },
    {
      id: '7',
      href: '/iletisim',
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
