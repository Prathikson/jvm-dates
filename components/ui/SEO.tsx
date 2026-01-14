import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  jsonLd?: object;
}

export function generateMetadata({
  title = 'JVM Dates - Premium Dry Fruits, Dates & Nuts Wholesale in Coimbatore',
  description = 'Your trusted wholesaler for premium quality dry fruits, dates, and nuts in Coimbatore. Competitive wholesale pricing, 5-star rated service, bulk orders available.',
  keywords = ['dry fruits Coimbatore', 'dates wholesale', 'premium nuts', 'JVM Dates', 'Medjool dates', 'Ajwa dates', 'wholesale dry fruits', 'Coimbatore nuts supplier'],
  ogImage = '/images/og-image.jpg',
  ogType = 'website',
  canonicalUrl = 'https://jvmdates.com',
}: SEOProps): Metadata {
  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: [{ name: 'JVM Dates' }],
    creator: 'JVM Dates',
    publisher: 'JVM Dates',
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
    openGraph: {
      type: ogType as any,
      locale: 'en_IN',
      url: canonicalUrl,
      title,
      description,
      siteName: 'JVM Dates',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: '@jvmdates',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    verification: {
      google: 'your-google-verification-code',
    },
  };
}

export function generateProductJsonLd(product: {
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  inStock: boolean;
  brand?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      '@type': 'Brand',
      name: product.brand || 'JVM Dates',
    },
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: 'INR',
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      seller: {
        '@type': 'Organization',
        name: 'JVM Dates',
      },
    },
    category: product.category,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '4',
    },
  };
}

export function generateOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JVM Dates',
    alternateName: 'JVM Dates - Premium Dry Fruits & Dates',
    url: 'https://jvmdates.com',
    logo: 'https://jvmdates.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-98422-93927',
      contactType: 'Customer Service',
      areaServed: 'IN',
      availableLanguage: ['en', 'ta'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24, Periya Thambi Nagar, Selvapuram South',
      addressLocality: 'Selvapuram',
      addressRegion: 'Tamil Nadu',
      postalCode: '641026',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.google.com/maps/place/JVM+Dates',
      'https://facebook.com/jvmdates',
      'https://instagram.com/jvmdates',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '4',
    },
  };
}

export function generateBreadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateLocalBusinessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://jvmdates.com',
    name: 'JVM Dates',
    description: 'Premium dry fruits, dates, and nuts wholesale supplier in Coimbatore',
    url: 'https://jvmdates.com',
    telephone: '+91-98422-93927',
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '24, Periya Thambi Nagar, Selvapuram South',
      addressLocality: 'Selvapuram, Coimbatore',
      addressRegion: 'Tamil Nadu',
      postalCode: '641026',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.0168',
      longitude: '76.9558',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      reviewCount: '4',
    },
    image: 'https://jvmdates.com/images/store.jpg',
  };
}