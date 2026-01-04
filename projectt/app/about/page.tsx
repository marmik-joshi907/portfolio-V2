import type { Metadata } from 'next';
import { AboutClient } from './client';

export const metadata: Metadata = {
  title: 'About - Marmik Joshi',
  description: 'Learn about Marmik Joshi - Software Engineer, Computer Engineering student with 9.0 SPI, passionate about full-stack development and AI technologies.',
  openGraph: {
    title: 'About - Marmik Joshi',
    description: 'Learn about Marmik Joshi - Software Engineer and Computer Engineering student.',
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
