import { SEO_CONFIG } from './config';

/**
 * Generates the primary LocalBusiness (or Organization) schema for Design Culture.
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SEO_CONFIG.siteUrl}/#local-business`,
    'name': SEO_CONFIG.brandName,
    'url': SEO_CONFIG.siteUrl,
    'logo': SEO_CONFIG.logoUrl,
    'image': SEO_CONFIG.imageUrl,
    'description': SEO_CONFIG.description,
    'telephone': SEO_CONFIG.telephone,
    'priceRange': SEO_CONFIG.priceRange,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': SEO_CONFIG.address.streetAddress,
      'addressLocality': SEO_CONFIG.address.addressLocality,
      'addressRegion': SEO_CONFIG.address.addressRegion,
      'postalCode': SEO_CONFIG.address.postalCode,
      'addressCountry': SEO_CONFIG.address.addressCountry,
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': SEO_CONFIG.geo.latitude,
      'longitude': SEO_CONFIG.geo.longitude,
    },
    'openingHoursSpecification': {
      '@type': 'OpeningHoursSpecification',
      'dayOfWeek': [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday'
      ],
      'opens': '09:00',
      'closes': '17:00'
    },
    'sameAs': SEO_CONFIG.sameAs,
  };
}

/**
 * Generates the WebSite schema with Sitelinks Searchbox support.
 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SEO_CONFIG.siteUrl}/#website`,
    'name': SEO_CONFIG.brandName,
    'url': SEO_CONFIG.siteUrl,
    'publisher': {
      '@id': `${SEO_CONFIG.siteUrl}/#local-business`,
    },
    'potentialAction': {
      '@type': 'SearchAction',
      'target': {
        '@type': 'EntryPoint',
        'urlTemplate': `${SEO_CONFIG.siteUrl}/search?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    }
  };
}

/**
 * Generates a Service schema, linked back to the provider.
 */
export function getServiceSchema(id: string, name: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SEO_CONFIG.siteUrl}/services/#${id}`,
    'name': name,
    'description': description,
    'provider': {
      '@id': `${SEO_CONFIG.siteUrl}/#local-business`
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Zimbabwe'
    }
  };
}

/**
 * Generates a Product schema with offering/pricing and rating info.
 */
export function getProductSchema(
  id: string,
  name: string,
  description: string,
  price: number,
  currency = 'USD',
  ratingValue?: number,
  reviewCount?: number
) {
  const schema: Record<string, any> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SEO_CONFIG.siteUrl}/products/#${id}`,
    'name': name,
    'description': description,
    'image': SEO_CONFIG.imageUrl,
    'offers': {
      '@type': 'Offer',
      'price': price,
      'priceCurrency': currency,
      'availability': 'https://schema.org/InStock',
      'seller': {
        '@id': `${SEO_CONFIG.siteUrl}/#local-business`
      }
    }
  };

  if (ratingValue && reviewCount) {
    schema['aggregateRating'] = {
      '@type': 'AggregateRating',
      'ratingValue': ratingValue,
      'reviewCount': reviewCount,
      'bestRating': 5,
      'worstRating': 1
    };
  }

  return schema;
}

/**
 * Generates an FAQPage schema.
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

/**
 * Generates a BreadcrumbList schema to show hierarchy.
 */
export function getBreadcrumbSchema(crumbs: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': crumbs.map((crumb, idx) => ({
      '@type': 'ListItem',
      'position': idx + 1,
      'name': crumb.name,
      'item': crumb.path.startsWith('http') ? crumb.path : `${SEO_CONFIG.siteUrl}${crumb.path}`,
    })),
  };
}
