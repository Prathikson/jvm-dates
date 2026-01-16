import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { generateMetadata, generateOrganizationJsonLd, generateLocalBusinessJsonLd } from '@/components/ui/SEO';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  ...generateMetadata({}),
  icons: {
    icon: [
      { url: '/assets/icon.svg', type: 'image/svg+xml' },
      { url: '/assets/icon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/assets/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = generateOrganizationJsonLd();
  const localBusinessSchema = generateLocalBusinessJsonLd();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/assets/icon.svg" />
        <link rel="alternate icon" type="image/png" href="/assets/icon.svg" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icon.svg" />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#6f4a38" />
        <meta name="msapplication-TileColor" content="#6f4a38" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}