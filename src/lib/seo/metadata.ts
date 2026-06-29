import { SEO_CONFIG } from './config';

export interface Metadata {
  title?: string;
  description?: string;
  keywords?: string;
  relatedSearches?: string; // Search queries for intent relevance
  canonicalPath?: string;
  noindex?: boolean; // Support legacy single-flag option
  robots?: {
    index: boolean;
    follow: boolean;
  };
  openGraph?: {
    title?: string;
    description?: string;
    url?: string;
    siteName?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: string;
  };
  twitter?: {
    card?: 'summary' | 'summary_large_image';
    title?: string;
    description?: string;
    images?: string[];
    site?: string;
  };
}

export function generateMetadata(pageMeta: Metadata): Metadata {
  const brandSuffix = ` | ${SEO_CONFIG.brandName}`;
  const title = pageMeta.title 
    ? (pageMeta.title.includes(SEO_CONFIG.brandName) ? pageMeta.title : `${pageMeta.title}${brandSuffix}`)
    : SEO_CONFIG.brandName;

  const description = pageMeta.description || SEO_CONFIG.description;
  const canonicalUrl = `${SEO_CONFIG.siteUrl}${pageMeta.canonicalPath || ''}`;

  // If noindex is explicitly true, default to index: false, follow: false
  const indexable = pageMeta.noindex ? false : (pageMeta.robots?.index !== false);
  const followable = pageMeta.noindex ? false : (pageMeta.robots?.follow !== false);

  const defaultOgImage = pageMeta.openGraph?.images?.[0]?.url || SEO_CONFIG.imageUrl;

  return {
    title,
    description,
    keywords: pageMeta.keywords || SEO_CONFIG.keywords,
    relatedSearches: pageMeta.relatedSearches || SEO_CONFIG.relatedSearches,
    canonicalPath: pageMeta.canonicalPath || '/',
    robots: {
      index: indexable,
      follow: followable,
    },
    openGraph: {
      title: pageMeta.openGraph?.title || title,
      description: pageMeta.openGraph?.description || description,
      url: canonicalUrl,
      siteName: SEO_CONFIG.brandName,
      type: pageMeta.openGraph?.type || 'website',
      images: [
        {
          url: defaultOgImage.startsWith('http') ? defaultOgImage : `${SEO_CONFIG.siteUrl}${defaultOgImage}`,
          alt: pageMeta.openGraph?.images?.[0]?.alt || SEO_CONFIG.brandName,
        }
      ]
    },
    twitter: {
      card: pageMeta.twitter?.card || 'summary_large_image',
      title: pageMeta.twitter?.title || title,
      description: pageMeta.twitter?.description || description,
      images: [
        defaultOgImage.startsWith('http') ? defaultOgImage : `${SEO_CONFIG.siteUrl}${defaultOgImage}`
      ],
      site: '@designculturezw',
    }
  };
}
