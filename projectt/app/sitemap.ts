// app/sitemap.ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://marmik907.vercel.app';
  
  return [
    { url: baseUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/projects`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/experience`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/achievements`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
