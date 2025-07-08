import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

import { generateMetadata as generateSEOMetadata } from '@/shared/utils';
import { getSession, getUser } from '@/core/auth';
import { AppWelcome } from '@/features/dashboard';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Dashboard',
  description: 'Your BannerCraft AI dashboard. Create, manage, and download your AI-generated Twitter banners.',
  canonical: '/app',
  noIndex: true, // Don't index private app pages
});

export default async function AppPage() {
  const session = await getSession();
  const user = await getUser();

  if (!session || !user) {
    redirect('/login');
  }

  return <AppWelcome user={user} />;
}