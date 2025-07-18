'use server';

import { redirect } from 'next/navigation';

import { createSupabaseServerClient } from '@/core/database/supabase/supabase-server-client';
import { ActionResponse } from '@/shared/types';
import { getURL } from '@/shared/utils';

export async function signInWithOAuth(provider: 'github' | 'google' | 'azure'): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient();

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: getURL('/auth/callback'),
    },
  });

  if (error) {
    console.error(`OAuth error for ${provider}:`, error);
    return { data: null, error: error };
  }

  if (data.url) {
    redirect(data.url);
  }

  return { data: null, error: new Error('No redirect URL received') };
}

export async function signInWithEmail(email: string): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: getURL('/auth/callback'),
    },
  });

  if (error) {
    console.error(error);
    return { data: null, error: error };
  }

  return { data: null, error: null };
}

export async function signOut(): Promise<ActionResponse> {
  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error(error);
    return { data: null, error: error };
  }

  return { data: null, error: null };
}
