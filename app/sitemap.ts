import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://besscareers.com';

  return [
    {
      url: baseUrl,
      lastModified: new Date('2026-04-16'),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
  ];
}
