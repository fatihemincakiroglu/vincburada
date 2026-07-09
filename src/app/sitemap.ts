import { getSepetliVincListings } from '@/data/sepetli-vinc-listings'
import type { MetadataRoute } from 'next'

const SITE_URL = 'https://vincburada.com.tr'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = [
    '',
    '/vinc',
    '/sepetli-vinc',
    '/sepetli-vinc/modeller',
    '/kule-vinc',
    '/elektrikli-vinc',
    '/mobil-vinc',
    '/hiyap-vinc',
    '/hakkimizda',
    '/referanslar',
    '/blog',
    '/sss',
    '/iletisim',
  ]

  const sepetliVincModelleri = await getSepetliVincListings()
  const modelRoutes = sepetliVincModelleri.map((l) => `/sepetli-vinc/modeller/${l.handle}`)

  return [...routes, ...modelRoutes].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }))
}
