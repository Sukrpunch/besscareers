import fs from 'fs';
import path from 'path';

interface SitemapEntry {
  url: string;
  lastModified: Date;
  changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';
  priority: number;
}

export default function sitemap(): SitemapEntry[] {
  const entries: SitemapEntry[] = [
    {
      url: 'https://besscareers.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Add all article URLs
  try {
    const contentDir = path.join(process.cwd(), 'content');
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.mdx'));
      
      files.forEach(file => {
        const slug = file.replace('.mdx', '');
        entries.push({
          url: `https://besscareers.com/${slug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      });
    }
  } catch (error) {
    console.error('Error generating sitemap:', error);
  }

  return entries;
}
