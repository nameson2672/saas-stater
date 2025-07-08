import { PropsWithChildren, ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import { generateMetadata as generateSEOMetadata } from '@/shared/utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Account Settings',
  description: 'Manage your BannerCraft AI account, subscription, and billing settings. View your current plan and upgrade options.',
  canonical: '/account',
  noIndex: true, // Don't index private account pages
});

import { Button } from '@/components/ui';
import { getSession } from '@/core/account/controllers/get-session';
import { getSubscription } from '@/core/account/controllers/get-subscription';
import { PricingCard } from '@/features/pricing/components/price-card';
import { getProducts } from '@/features/pricing/controllers/get-products';
import { Price, ProductWithPrices } from '@/features/pricing/types';

export default async function AccountPage() {
  const [session, subscription, products] = await Promise.all([getSession(), getSubscription(), getProducts()]);

  if (!session) {
    redirect('/login');
  }

  let userProduct: ProductWithPrices | undefined;
  let userPrice: Price | undefined;

  if (subscription) {
    for (const product of products) {
      for (const price of product.prices) {
        if (price.id === subscription.price_id) {
          userProduct = product;
          userPrice = price;
        }
      }
    }
  }

  return (
    <section className='rounded-lg bg-black px-4 py-16'>
      <h1 className='mb-8 text-center'>Account</h1>

      <div className='flex flex-col gap-4'>
        <Card
          title='Your Plan'
          footer={
            subscription ? (
              <Button size='sm' variant='secondary' asChild>
                <Link href='/manage-subscription'>Manage your subscription</Link>
              </Button>
            ) : (
              <Button size='sm' variant='secondary' asChild>
                <Link href='/pricing'>Start a subscription</Link>
              </Button>
            )
          }
        >
          {userProduct && userPrice ? (
            <PricingCard product={userProduct} price={userPrice} />
          ) : (
            <p>You don&apos;t have an active subscription</p>
          )}
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  footer,
  children,
}: PropsWithChildren<{
  title: string;
  footer?: ReactNode;
}>) {
  return (
    <div className='m-auto w-full max-w-3xl rounded-md bg-zinc-900'>
      <div className='p-4'>
        <h2 className='mb-1 text-xl font-semibold'>{title}</h2>
        <div className='py-4'>{children}</div>
      </div>
      <div className='flex justify-end rounded-b-md border-t border-zinc-800 p-4'>{footer}</div>
    </div>
  );
}
