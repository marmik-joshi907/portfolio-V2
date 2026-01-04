import type { Metadata } from 'next';
import { ExperienceClient } from './client';

export const metadata: Metadata = {
  title: 'Experience - Marmik Joshi',
  description: 'Professional experience and career journey of Marmik Joshi - Java Software Developer at Lumynixx Technology and ISTE Committee Member.',
  openGraph: {
    title: 'Experience - Marmik Joshi',
    description: 'Professional experience and career journey of Marmik Joshi.',
  },
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
