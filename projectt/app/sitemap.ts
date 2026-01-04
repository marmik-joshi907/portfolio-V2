// app/sitemap.ts
import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://marmik907.vercel.app/', changeFrequency: 'monthly', priority: 1 },
  ];
}
