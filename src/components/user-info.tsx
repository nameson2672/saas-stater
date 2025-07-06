'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { createSupabaseClient } from '@/libs/supabase/supabase-client';
import type { User } from '@supabase/supabase-js';

export function UserInfo() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createSupabaseClient();

  useEffect(() => {
    // Get initial user
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
    };

    getUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  if (loading) {
    return (
      <div className='flex items-center gap-3'>
        <div className='h-8 w-8 animate-pulse rounded-full bg-gray-600'></div>
        <div className='hidden sm:block'>
          <div className='h-4 w-20 animate-pulse rounded bg-gray-600'></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const displayName = user.user_metadata?.full_name || user.user_metadata?.name || user.email?.split('@')[0];
  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture;

  return (
    <div className='flex items-center gap-3'>
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={displayName || 'User avatar'}
          width={32}
          height={32}
          className='rounded-full ring-2 ring-gray-600'
        />
      )}
      <div className='hidden sm:block'>
        <p className='text-sm font-medium text-white'>
          {displayName}
        </p>
        {user.user_metadata?.full_name && user.email && (
          <p className='text-xs text-gray-400'>{user.email}</p>
        )}
      </div>
    </div>
  );
}