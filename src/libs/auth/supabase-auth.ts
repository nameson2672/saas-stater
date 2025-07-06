import { createSupabaseServerClient } from '@/libs/supabase/supabase-server-client';
import type { User } from '@supabase/supabase-js';

export async function getUser(): Promise<User | null> {
  const supabase = await createSupabaseServerClient();

  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser();

    if (error) {
      console.error('Error fetching user:', error.message);
      return null;
    }

    return user;
  } catch (error) {
    console.error('Unexpected error fetching user:', error);
    return null;
  }
}

export async function getSession() {
  const supabase = await createSupabaseServerClient();

  try {
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();

    if (error) {
      console.error('Error fetching session:', error.message);
      return null;
    }

    return session;
  } catch (error) {
    console.error('Unexpected error fetching session:', error);
    return null;
  }
}

export async function signOut() {
  const supabase = await createSupabaseServerClient();

  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw error;
    }

    return { success: true };
  } catch (error) {
    console.error('Error signing out:', error);
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// OAuth sign in
export async function signInWithOAuth(provider: 'github' | 'google' | 'azure') {
  const supabase = await createSupabaseServerClient();

  try {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      throw error;
    }

    return { data, success: true };
  } catch (error) {
    console.error(`Error signing in with ${provider}:`, error);
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Email sign in
export async function signInWithEmail(email: string) {
  const supabase = await createSupabaseServerClient();

  try {
    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/auth/callback`,
      },
    });

    if (error) {
      throw error;
    }

    return { data, success: true };
  } catch (error) {
    console.error('Error signing in with email:', error);
    return { error: error instanceof Error ? error.message : 'Unknown error' };
  }
}
