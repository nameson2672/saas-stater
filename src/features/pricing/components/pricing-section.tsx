import Image from 'next/image';

import { PricingCard } from '@/features/pricing/components/price-card';

import { createCheckoutAction } from '../actions/create-checkout-action';
import { ProductWithPrices } from '../types';

export async function PricingSection({ isPricingPage }: { isPricingPage?: boolean }) {
  const mockProducts: ProductWithPrices[] = [
    {
      id: 'free',
      name: 'Free',
      description: 'Perfect for getting started',
      active: true,
      image: null,
      metadata: {
        price_card_variant: 'basic',
        generated_images: '5',
        image_editor: 'basic',
        support_level: 'email',
      },
      prices: [],
    },
    {
      id: 'basic',
      name: 'Basic',
      description: 'Great for individuals and small teams',
      active: true,
      image: null,
      metadata: {
        price_card_variant: 'pro',
        generated_images: '50',
        image_editor: 'pro',
        support_level: 'email',
      },
      prices: [
        {
          id: 'price_basic_monthly',
          product_id: 'basic',
          active: true,
          description: 'Basic plan monthly',
          unit_amount: 999,
          currency: 'usd',
          type: 'recurring',
          interval: 'month',
          interval_count: 1,
          trial_period_days: null,
          metadata: null,
        },
        {
          id: 'price_basic_yearly',
          product_id: 'basic',
          active: true,
          description: 'Basic plan yearly',
          unit_amount: 9999,
          currency: 'usd',
          type: 'recurring',
          interval: 'year',
          interval_count: 1,
          trial_period_days: null,
          metadata: null,
        },
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      description: 'For large teams and organizations',
      active: true,
      image: null,
      metadata: {
        price_card_variant: 'enterprise',
        generated_images: 'unlimited',
        image_editor: 'pro',
        support_level: 'live',
      },
      prices: [],
    },
  ];

  const HeadingLevel = isPricingPage ? 'h1' : 'h2';

  return (
    <section className='relative rounded-lg bg-black py-8'>
      <div className='relative z-10 m-auto flex max-w-[1200px] flex-col items-center gap-8 px-4 pt-8 lg:pt-[140px]'>
        <HeadingLevel className='max-w-4xl bg-gradient-to-br from-white to-neutral-200 bg-clip-text text-center text-4xl font-bold text-transparent lg:text-6xl'>
          Predictable pricing for every use case.
        </HeadingLevel>
        <p className='text-center text-xl'>
          Find a plan that fits you. Upgrade at any time to enable additional features.
        </p>
        <div className='flex w-full flex-col items-center justify-center gap-2 lg:flex-row lg:gap-8'>
          {mockProducts.map((product) => {
            return <PricingCard key={product.id} product={product} createCheckoutAction={createCheckoutAction} />;
          })}
        </div>
      </div>
      <Image
        src='/section-bg.png'
        width={1440}
        height={462}
        alt=''
        className='absolute left-0 top-0 rounded-t-lg'
        priority={isPricingPage}
        quality={100}
      />
    </section>
  );
}
