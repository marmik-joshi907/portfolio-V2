import type { Metadata } from 'next';
import { BlogClient } from './client';

export const metadata: Metadata = {
  title: 'Blog - Marmik Joshi',
  description: 'Technical blog posts and articles by Marmik Joshi on software development, AI, and technology.',
  openGraph: {
    title: 'Blog - Marmik Joshi',
    description: 'Technical blog posts by Marmik Joshi.',
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
