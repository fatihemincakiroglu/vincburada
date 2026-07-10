import { getTumKategoriListeleri } from '@/data/kategori-urunleri'
import { getMarkalar } from '@/data/markalar'
import { getSepetliVincListings } from '@/data/sepetli-vinc-listings'
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://vincburada.com.tr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/vinc',
    '/sepetli-vinc',
    '/kule-vinc',
    '/elektrikli-vinc',
    '/mobil-vinc',
    '/hiyap-vinc',
    '/markalar',
    '/hakkimizda',
    '/referanslar',
    '/blog',
    '/sss',
    '/iletisim',
  ]

  const sepetli = await getSepetliVincListings()
  const sepetliRoutes = sepetli.map((u) => `/sepetli-vinc/${u.handle}`)

  const kategoriListeleri = await getTumKategoriListeleri()
  const kategoriRoutes = kategoriListeleri.flatMap((liste) =>
    liste.urunler.map((u) => `/${liste.handle}/${u.handle}`)
  )

  const markalar = await getMarkalar()
  const markaRoutes = markalar.map((m) => `/markalar/${m.handle}`)

  return [...routes, ...sepetliRoutes, ...kategoriRoutes, ...markaRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }))
}
