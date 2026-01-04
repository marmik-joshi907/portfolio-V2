import type { Metadata } from 'next';
import { AchievementsClient } from './client';

export const metadata: Metadata = {
  title: 'Achievements - Marmik Joshi',
  description: 'Certifications, awards, hackathons, and achievements of Marmik Joshi - Software Engineer.',
  openGraph: {
    title: 'Achievements - Marmik Joshi',
    description: 'Certifications, awards, and achievements of Marmik Joshi.',
  },
};

export default function AchievementsPage() {
  return <AchievementsClient />;
}
