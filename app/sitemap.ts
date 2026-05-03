import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // In a full integration, you would fetch all dynamic blog slugs from Strapi here
  // const posts = await getStrapiArticles();
  // const blogUrls = posts.map(post => ({
  //   url: `https://fin2excel.com/blog/${post.slug}`,
  //   lastModified: new Date(post.updatedAt),
  //   changeFrequency: 'weekly',
  //   priority: 0.8,
  // }))

  return [
    {
      url: 'https://fin2excel.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://fin2excel.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fin2excel.com/services',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://fin2excel.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.9,
    },
    {
      url: 'https://fin2excel.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // ...blogUrls
  ]
}
