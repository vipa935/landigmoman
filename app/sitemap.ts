import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// La web es estática (output: 'export'), así que este archivo se genera una vez al compilar
export const dynamic = 'force-static'

// Si añades una página nueva a la web, añádela también aquí
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: '2026-11-13', changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/privacidad`, lastModified: '2026-11-09', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/condiciones`, lastModified: '2026-11-13', changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/eliminar-cuenta`, lastModified: '2026-11-09', changeFrequency: 'yearly', priority: 0.3 },
  ]
}
