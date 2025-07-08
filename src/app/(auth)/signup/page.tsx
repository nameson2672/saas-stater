import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { generateMetadata as generateSEOMetadata } from '@/shared/utils';
import { getSession } from '@/core/auth';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Sign Up',
  description: 'Create your free BannerCraft AI account and start generating stunning Twitter banners with AI. Join thousands of creators using AI-powered design tools.',
  canonical: '/signup',
  keywords: ['sign up', 'register', 'create account', 'free banner generator'],
});

import { signInWithEmail, signInWithOAuth } from '../auth-actions';
import { AuthUI } from '../auth-ui';

export default async function SignUp() {
  const session = await getSession();

  if (session) {
    redirect('/app');
  }

  return (
    <section className='py-xl m-auto flex h-full max-w-lg items-center'>
      <AuthUI mode='signup' signInWithOAuth={signInWithOAuth} signInWithEmail={signInWithEmail} />
    </section>
  );
}
