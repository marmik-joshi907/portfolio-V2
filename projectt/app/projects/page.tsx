import type { Metadata } from 'next';
import { ProjectsClient } from './client';

export const metadata: Metadata = {
  title: 'Projects - Marmik Joshi',
  description: 'Explore projects built by Marmik Joshi - from maintenance systems to blockchain applications and AI-powered APIs.',
  openGraph: {
    title: 'Projects - Marmik Joshi',
    description: 'Explore innovative projects built by Marmik Joshi.',
  },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
