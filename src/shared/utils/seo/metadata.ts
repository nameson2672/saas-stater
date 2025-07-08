import type { Metadata } from 'next';

export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  noIndex?: boolean;
  noFollow?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

const defaultSEOConfig = {
  siteName: 'BannerCraft AI',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.com',
  defaultTitle: 'BannerCraft AI - AI-Powered Twitter Banner Generator',
  defaultDescription: 'Create stunning Twitter banners instantly with AI. Generate professional social media graphics with DALL·E integration. Start for free.',
  defaultOgImage: '/og-image.png',
  twitterHandle: '@bannercraft',
  author: 'BannerCraft Team',
  themeColor: '#000000',
};

export function generateMetadata({
  title,
  description,
  canonical,
  noIndex = false,
  noFollow = false,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
}: SEOConfig): Metadata {
  const fullTitle = title === defaultSEOConfig.siteName 
    ? defaultSEOConfig.defaultTitle 
    : `${title} | ${defaultSEOConfig.siteName}`;
  
  const canonicalUrl = canonical 
    ? `${defaultSEOConfig.siteUrl}${canonical}`
    : undefined;
  
  const imageUrl = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${defaultSEOConfig.siteUrl}${ogImage}`)
    : `${defaultSEOConfig.siteUrl}${defaultSEOConfig.defaultOgImage}`;

  const robots = {
    index: !noIndex,
    follow: !noFollow,
    googleBot: {
      index: !noIndex,
      follow: !noFollow,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  };

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords.join(', ') : undefined,
    authors: author ? [{ name: author }] : [{ name: defaultSEOConfig.author }],
    creator: defaultSEOConfig.author,
    publisher: defaultSEOConfig.siteName,
    robots,
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
    openGraph: {
      type: ogType,
      locale: 'en_US',
      url: canonicalUrl,
      title: fullTitle,
      description,
      siteName: defaultSEOConfig.siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title} - ${defaultSEOConfig.siteName}`,
        },
      ],
    },
    twitter: {
      card: twitterCard,
      title: fullTitle,
      description,
      site: defaultSEOConfig.twitterHandle,
      creator: defaultSEOConfig.twitterHandle,
      images: [imageUrl],
    },
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION,
      yandex: process.env.YANDEX_VERIFICATION,
      yahoo: process.env.YAHOO_VERIFICATION,
    },
    category: 'technology',
    classification: 'AI Tools, Social Media, Design',
  };

  // Add article-specific metadata
  if (ogType === 'article' && (publishedTime || modifiedTime)) {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: author ? [author] : [defaultSEOConfig.author],
      section: 'Technology',
      tags: keywords,
    };
  }

  return metadata;
}

export function generateJsonLd(type: 'WebSite' | 'Organization' | 'Product' | 'Article', data: any) {
  const baseJsonLd = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  switch (type) {
    case 'WebSite':
      return {
        ...baseJsonLd,
        name: defaultSEOConfig.siteName,
        url: defaultSEOConfig.siteUrl,
        description: defaultSEOConfig.defaultDescription,
        publisher: {
          '@type': 'Organization',
          name: defaultSEOConfig.siteName,
          url: defaultSEOConfig.siteUrl,
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: `${defaultSEOConfig.siteUrl}/search?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      };

    case 'Organization':
      return {
        ...baseJsonLd,
        name: defaultSEOConfig.siteName,
        url: defaultSEOConfig.siteUrl,
        logo: `${defaultSEOConfig.siteUrl}/logo.png`,
        description: defaultSEOConfig.defaultDescription,
        sameAs: [
          'https://twitter.com/bannercraft',
          'https://facebook.com/bannercraft',
          'https://instagram.com/bannercraft',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'English',
        },
      };

    case 'Product':
      return {
        ...baseJsonLd,
        name: data.name,
        description: data.description,
        brand: {
          '@type': 'Brand',
          name: defaultSEOConfig.siteName,
        },
        offers: data.offers ? {
          '@type': 'Offer',
          price: data.offers.price,
          priceCurrency: data.offers.currency,
          availability: 'https://schema.org/InStock',
          url: `${defaultSEOConfig.siteUrl}${data.offers.url}`,
        } : undefined,
      };

    case 'Article':
      return {
        ...baseJsonLd,
        headline: data.title,
        description: data.description,
        author: {
          '@type': 'Person',
          name: data.author || defaultSEOConfig.author,
        },
        publisher: {
          '@type': 'Organization',
          name: defaultSEOConfig.siteName,
          logo: {
            '@type': 'ImageObject',
            url: `${defaultSEOConfig.siteUrl}/logo.png`,
          },
        },
        datePublished: data.publishedTime,
        dateModified: data.modifiedTime || data.publishedTime,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${defaultSEOConfig.siteUrl}${data.url}`,
        },
      };

    default:
      return baseJsonLd;
  }
}