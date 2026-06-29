import { useEffect } from 'react';
import { Metadata, generateMetadata } from '../lib/seo/metadata';
import { SEO_CONFIG } from '../lib/seo/config';

function upsertMetaByName(name: string, content: string) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertMetaByProperty(property: string, content: string) {
  if (!content) return;
  let tag = document.head.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null;
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('property', property);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  if (!href) return;
  let link = document.head.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', rel);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export function useSEO(opts: Metadata & { jsonLd?: Record<string, unknown> | Record<string, unknown>[] }) {
  useEffect(() => {
    // Generate standardized metadata matching the Next.js Metadata architecture
    const meta = generateMetadata(opts);

    // Title
    if (meta.title) {
      document.title = meta.title;
      upsertMetaByProperty('og:title', meta.openGraph?.title || meta.title);
      upsertMetaByName('twitter:title', meta.twitter?.title || meta.title);
    }

    // Description
    if (meta.description) {
      upsertMetaByName('description', meta.description);
      upsertMetaByProperty('og:description', meta.openGraph?.description || meta.description);
      upsertMetaByName('twitter:description', meta.twitter?.description || meta.description);
    }

    // Canonical
    if (meta.canonicalPath) {
      const canonicalUrl = meta.openGraph?.url || '';
      upsertLink('canonical', canonicalUrl);
      upsertMetaByProperty('og:url', canonicalUrl);
    }

    // Open Graph basic
    if (meta.openGraph?.siteName) {
      upsertMetaByProperty('og:site_name', meta.openGraph.siteName);
    }
    if (meta.openGraph?.type) {
      upsertMetaByProperty('og:type', meta.openGraph.type);
    }

    // Images
    const ogImage = meta.openGraph?.images?.[0]?.url;
    if (ogImage) {
      upsertMetaByProperty('og:image', ogImage);
    }
    const twitterImage = meta.twitter?.images?.[0];
    if (twitterImage) {
      upsertMetaByName('twitter:image', twitterImage);
    }

    // Twitter card details
    if (meta.twitter?.card) {
      upsertMetaByName('twitter:card', meta.twitter.card);
    }
    if (meta.twitter?.site) {
      upsertMetaByName('twitter:site', meta.twitter.site);
    }

    // Robots meta
    if (meta.robots?.index === false || meta.robots?.follow === false) {
      const robotsVal = `${meta.robots.index ? 'index' : 'noindex'}, ${meta.robots.follow ? 'follow' : 'nofollow'}`;
      upsertMetaByName('robots', robotsVal);
    } else {
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots) {
        robots.setAttribute('content', 'index, follow');
      }
    }
    // Keywords
    if (meta.keywords) {
      upsertMetaByName('keywords', meta.keywords);
    }

    // Related Searches
    if (meta.relatedSearches) {
      upsertMetaByName('related-searches', meta.relatedSearches);
    }

    // Author
    if (SEO_CONFIG.brandName) {
      upsertMetaByName('author', SEO_CONFIG.brandName);
    }

    // Theme Color
    upsertMetaByName('theme-color', '#1F2429');

    // JSON-LD Structured Data
    const existingJsonLd = document.head.querySelectorAll('script[data-seo-jsonld="true"]');
    existingJsonLd.forEach((script) => script.remove());

    if (opts.jsonLd) {
      const entries = Array.isArray(opts.jsonLd) ? opts.jsonLd : [opts.jsonLd];
      entries.forEach((entry) => {
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo-jsonld', 'true');
        script.textContent = JSON.stringify(entry);
        document.head.appendChild(script);
      });
    }
  }, [opts]);
}

export default useSEO;
