import type { Metadata } from 'next';
import { Anton, Manrope } from 'next/font/google';
import './globals.css';

const display = Anton({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-display',
  display: 'swap',
});

const body = Manrope({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-body',
  display: 'swap',
});

const siteUrl = 'https://jeyvetrivel-r.com';
const title = "Jeyvetrivel R | Digital Marketer | SEO Specialist";
const description =
  'Jeyvetrivel R is a Digital Marketing Professional specializing in SEO, Technical SEO, Content Marketing, Google Ads, and Performance Marketing — helping brands turn visibility into measurable growth.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  keywords: [
    'Jeyvetrivel R',
    'Digital Marketer',
    'SEO Specialist',
    'Technical SEO',
    'Content Marketing',
    'Google Ads',
    'Performance Marketing',
  ],
  authors: [{ name: 'Jeyvetrivel R' }],
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Jeyvetrivel R — Digital Marketing Portfolio',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Jeyvetrivel R — Digital Marketing Professional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Jeyvetrivel R',
  jobTitle: 'Digital Marketing Professional',
  description,
  url: siteUrl,
  knowsAbout: [
    'Search Engine Optimization',
    'Technical SEO',
    'Content Marketing',
    'Google Ads',
    'Performance Marketing',
    'Social Media Marketing',
  ],
  sameAs: ['https://www.linkedin.com/in/jeyvetrivel-raja-12a6b71b3'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-paper font-body antialiased selection:bg-paper selection:text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-paper focus:text-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
