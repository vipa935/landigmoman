import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// La web es estática (output: 'export'), así que este archivo se genera una vez al compilar
export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
