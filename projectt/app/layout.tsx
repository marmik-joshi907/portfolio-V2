// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://marmik907.vercel.app'),
  title: 'Marmik Joshi - Software Engineer Portfolio',
  description:
    'Portfolio of Marmik Joshi, a passionate Software Engineer and Computer Engineering student with expertise in full-stack development, Java, Python, React, and AI technologies.',
  keywords: [
    'Marmik Joshi',
    'Software Engineer',
    'Computer Engineering',
    'Full-stack Developer',
    'Java',
    'Python',
    'React',
    'AI',
    'Machine Learning',
    'Portfolio',
  ],
  authors: [{ name: 'Marmik Joshi', url: 'mailto:marmikjoshi52@gmail.com' }],
  creator: 'Marmik Joshi',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://marmik907.vercel.app/',
    siteName: 'Marmik Joshi Portfolio',
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description:
      'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
    images: [
      {
        url: '/og-image.jpg', // will resolve using metadataBase
        width: 1200,
        height: 630,
        alt: 'Marmik Joshi - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@marmikjoshi1409',
    creator: '@marmikjoshi1409',
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description:
      'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // replace with real code from Search Console
    google: 'your-google-verification-code',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest', // optional if you add it
  appleWebApp: {
    title: 'Marmik Joshi',
    statusBarStyle: 'default',
    capable: true,
  },
  category: 'technology',
};

export const viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className={`${inter.className} antialiased`}>
        {/* JSON-LD (SSR) */}
        <Script
          id="ld-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Marmik Joshi',
              jobTitle: 'Software Engineer',
              url: 'https://marmik907.vercel.app/',
              email: 'mailto:marmikjoshi52@gmail.com',
              image: 'https://marmik907.vercel.app/og-image.jpg',
              sameAs: [
                // fill with your actual profiles
                'https://github.com/<your-handle>',
                'https://www.linkedin.com/in/<your-handle>',
                'https://twitter.com/marmikjoshi1409',
              ],
              worksFor: { '@type': 'Organization', name: 'Freelance' },
            }),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Marmik Joshi Portfolio',
              url: 'https://marmik907.vercel.app/',
            }),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
