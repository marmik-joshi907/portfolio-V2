import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono'
});

export const metadata: Metadata = {
  title: 'Marmik Joshi - Software Engineer Portfolio',
  description: 'Portfolio of Marmik Joshi, a passionate Software Engineer and Computer Engineering student with expertise in full-stack development, Java, Python, React, and AI technologies.',
  keywords: 'Marmik Joshi, Software Engineer, Computer Engineering, Full-stack Developer, Java, Python, React, Portfolio, AI, Machine Learning',
  authors: [{ name: 'Marmik Joshi', url: 'mailto:marmikjoshi52@gmail.com' }],
  creator: 'Marmik Joshi',
  openGraph: {
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description: 'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
    type: 'website',
    locale: 'en_US',
    url: 'https://marmik907.vercel.app/',
    siteName: 'Marmik Joshi Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marmik Joshi - Software Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marmik Joshi - Software Engineer Portfolio',
    description: 'Portfolio of Marmik Joshi, a passionate Software Engineer specializing in full-stack development and AI technologies.',
    creator: '@marmikjoshi1409',
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}