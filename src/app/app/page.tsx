import { redirect } from 'next/navigation';

import { getSession, getCurrentUser } from '@/libs/auth/session';

import { AppWelcome } from './components/app-welcome';

export default async function AppPage() {
  const session = await getSession();
  const user = await getCurrentUser();

  if (!session || !user) {
    redirect('/login');
  }

  return <AppWelcome user={user} />;
}