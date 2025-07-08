import { generateJsonLd } from '@/shared/utils';

interface StructuredDataProps {
  type: 'WebSite' | 'Organization' | 'Product' | 'Article';
  data?: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const jsonLd = generateJsonLd(type, data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}