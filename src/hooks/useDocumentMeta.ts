import { useEffect } from 'react';

interface DocumentMeta {
  title: string;
  description: string;
  canonicalPath?: string;
}

function setMetaTag(attr: string, key: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(path: string) {
  const url = `https://www.soumyosinha.com${path}`;
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', url);
}

export function useDocumentMeta({ title, description, canonicalPath }: DocumentMeta) {
  useEffect(() => {
    const fullTitle = title.includes('Soumyo') ? title : `${title} | Soumyo Sinha`;
    document.title = fullTitle;

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', `https://www.soumyosinha.com${canonicalPath || ''}`);
    setMetaTag('property', 'twitter:title', fullTitle);
    setMetaTag('property', 'twitter:description', description);
    setMetaTag('property', 'twitter:url', `https://www.soumyosinha.com${canonicalPath || ''}`);

    if (canonicalPath) {
      setCanonical(canonicalPath);
    }
  }, [title, description, canonicalPath]);
}
