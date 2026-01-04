import type { Metadata } from 'next';
import { ContactClient } from './client';

export const metadata: Metadata = {
  title: 'Contact - Marmik Joshi',
  description: 'Get in touch with Marmik Joshi for collaboration, job opportunities, or just to say hello.',
  openGraph: {
    title: 'Contact - Marmik Joshi',
    description: 'Get in touch with Marmik Joshi.',
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
