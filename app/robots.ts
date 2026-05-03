import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/cms/', '/admin/'],
    },
    sitemap: 'https://fin2excel.com/sitemap.xml',
  }
}
