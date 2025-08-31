import { useEffect } from 'react';

export type SEOOptions = {
  title?: string;
  description?: string;
  canonicalPath?: string; // e.g. "/services"
  noindex?: boolean; // add noindex robots
  ogImage?: string; // absolute or root-relative path
  twitterCard?: 'summary' | 'summary_large_image';
};

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

export function useSEO(opts: SEOOptions) {
  useEffect(() => {
    const origin = window.location.origin;

    // Title
    if (opts.title) {
      document.title = opts.title;
      upsertMetaByProperty('og:title', opts.title);
      upsertMetaByName('twitter:title', opts.title);
    }

    // Description
    if (opts.description) {
      upsertMetaByName('description', opts.description);
      upsertMetaByProperty('og:description', opts.description);
      upsertMetaByName('twitter:description', opts.description);
    }

    // Canonical
    const canonical = opts.canonicalPath
      ? (opts.canonicalPath.startsWith('http') ? opts.canonicalPath : `${origin}${opts.canonicalPath}`)
      : window.location.href;
    upsertLink('canonical', canonical);
    upsertMetaByProperty('og:url', canonical);

    // Open Graph basic
    upsertMetaByProperty('og:type', 'website');

    // Images
    if (opts.ogImage) {
      const img = opts.ogImage.startsWith('http') ? opts.ogImage : `${origin}${opts.ogImage}`;
      upsertMetaByProperty('og:image', img);
      upsertMetaByName('twitter:image', img);
    }

    // Twitter card
    upsertMetaByName('twitter:card', opts.twitterCard || 'summary');

    // Robots
    if (opts.noindex) {
      upsertMetaByName('robots', 'noindex, nofollow');
    } else {
      // Avoid leaving a stale noindex from previous pages
      const robots = document.head.querySelector('meta[name="robots"]');
      if (robots) robots.setAttribute('content', 'index, follow');
    }
  }, [opts.title, opts.description, opts.canonicalPath, opts.noindex, opts.ogImage, opts.twitterCard]);
}

export default useSEO;
