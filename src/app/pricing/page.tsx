import type { Metadata } from 'next';

import { PricingSection } from '@/features/pricing/components/pricing-section';
import { generateMetadata as generateSEOMetadata } from '@/shared/utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Pricing Plans',
  description: 'Choose the perfect plan for your banner creation needs. Start free or upgrade to Pro for unlimited AI-generated Twitter banners and premium features.',
  canonical: '/pricing',
  keywords: ['pricing', 'plans', 'banner generator pricing', 'AI banner costs', 'subscription'],
  ogType: 'website',
});

export default async function PricingPage() {
  return <PricingSection isPricingPage />;
}
