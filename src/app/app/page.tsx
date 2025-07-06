import { redirect } from 'next/navigation';

import { getSession, getUser } from '@/libs/auth/supabase-auth';

import { AppWelcome } from './components/app-welcome';

export default async function AppPage() {
  const session = await getSession();
  const user = await getUser();

  if (!session || !user) {
    redirect('/login');
  }

  return <AppWelcome user={user} />;
}