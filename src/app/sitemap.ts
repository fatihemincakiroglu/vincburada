import type { MetadataRoute } from 'next'

const SITE_URL = 'https://vincburada.com.tr'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/vinc',
    '/sepetli-vinc',
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

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }))
}
