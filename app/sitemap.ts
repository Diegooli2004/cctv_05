import { MetadataRoute } from 'next'

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

  return [...staticPages, ...servicePages, ...locationServicePages]
}