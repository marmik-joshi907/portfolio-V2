// app/sitemap.ts
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://marmik907.vercel.app/', changeFrequency: 'monthly', priority: 1 },
  ];
}
