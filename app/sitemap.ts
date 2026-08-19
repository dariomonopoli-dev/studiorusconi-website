import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.studiorusconi.ch'

const routes = [
  { path: '', priority: 1, changeFrequency: 'monthly' as const },
  { path: '/igiene-dentale', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/podologia', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/tariffe', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/galleria', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/cookie-policy', priority: 0.3, changeFrequency: 'yearly' as const },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
