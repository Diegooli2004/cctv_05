import { MetadataRoute } from 'next'
import { blogPosts } from '@/data/blog-posts'

const baseUrl = 'https://cctvinstallersnearme.com'

// List of locations and services
const locations = [
  { name: "new-york" },
  { name: "los-angeles" },
  { name: "chicago" },
  { name: "houston" },
  { name: "phoenix" },
  { name: "philadelphia" },
  { name: "san-antonio" },
  { name: "san-diego" },
  { name: "dallas" }
]

const services = [
  { name: "residential-cctv" },
  { name: "commercial-cctv" },
  { name: "ip-cameras" },
  { name: "wireless-cctv" },
  { name: "maintenance-repair" }
]

export default function sitemap(): MetadataRoute.Sitemap {
  // Core pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ] as MetadataRoute.Sitemap

  // Service pages
  const servicePages = services.map((service) => ({
    url: `${baseUrl}/services/${service.name}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  // Location-specific service pages
  const locationServicePages = locations.flatMap((location) =>
    services.map((service) => ({
      url: `${baseUrl}/installers/${location.name}/${service.name}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  ) as MetadataRoute.Sitemap

  // Location index pages
  const locationPages = locations.map((location) => ({
    url: `${baseUrl}/installers/${location.name}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  })) as MetadataRoute.Sitemap

  // Blog posts pages
  const blogPostPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date), // Use the post's date
    changeFrequency: 'monthly',
    priority: 0.6,
  })) as MetadataRoute.Sitemap

  // Category pages if you have them
  const categories = [...new Set(blogPosts.map(post => post.category))]
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase()}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  })) as MetadataRoute.Sitemap

  return [
    ...staticPages,
    ...servicePages,
    ...locationPages,
    ...locationServicePages,
    ...blogPostPages,
    ...categoryPages,
  ]
}
