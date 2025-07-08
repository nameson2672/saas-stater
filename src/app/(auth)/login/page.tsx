import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { generateMetadata as generateSEOMetadata } from '@/shared/utils';
import { getSession } from '@/core/auth';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sign In',
  description: 'Sign in to your BannerCraft AI account to create stunning Twitter banners with AI. Access your dashboard and start generating professional banners.',
  canonical: '/login',
  noIndex: true, // Don't index auth pages
  keywords: ['login', 'sign in', 'banner creator account'],
});

import { signInWithEmail, signInWithOAuth } from '../auth-actions';
import { AuthUI } from '../auth-ui';

export default async function LoginPage() {
  const session = await getSession();

  if (session) {
    redirect('/app');
  }

  return (
    <section className='py-xl m-auto flex h-full max-w-lg items-center'>
      <AuthUI mode='login' signInWithOAuth={signInWithOAuth} signInWithEmail={signInWithEmail} />
    </section>
  );
}
