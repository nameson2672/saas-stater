import { redirect } from 'next/navigation';

import { getSession } from '@/libs/auth/session';

import { AuthUI } from '../auth-ui';

export default async function SignUp() {
  const session = await getSession();

  if (session) {
    redirect('/account');
  }

  return (
    <section className='py-xl m-auto flex h-full max-w-lg items-center'>
      <AuthUI mode='signup' />
    </section>
  );
}
