'use client';

import { useEffect, useState } from 'react';
import { IoCreate, IoImages, IoStatsChart, IoTime } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import type { User } from '@supabase/supabase-js';

interface ReturningUserWelcomeProps {
  user: User;
}

interface UserStats {
  bannersCreated: number;
  lastVisit: string;
  favoriteTemplate: string;
  totalUsageHours: number;
}

export function ReturningUserWelcome({ user }: ReturningUserWelcomeProps) {
  const [stats, setStats] = useState<UserStats>({
    bannersCreated: 0,
    lastVisit: '',
    favoriteTemplate: 'Modern Gradient',
    totalUsageHours: 0,
  });

  useEffect(() => {
    // In a real app, you'd fetch this from your database
    const mockStats: UserStats = {
      bannersCreated: Math.floor(Math.random() * 50) + 5,
      lastVisit: localStorage.getItem('lastAppVisit') || new Date().toISOString(),
      favoriteTemplate: 'Modern Gradient',
      totalUsageHours: Math.floor(Math.random() * 20) + 2,
    };
    setStats(mockStats);
  }, []);

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const formatLastVisit = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'today';
    if (diffInDays === 1) return 'yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <div className='mx-auto max-w-6xl'>
      <div className='mb-8'>
        <h1 className='mb-2 text-4xl font-bold'>
          Good {getTimeOfDay()}, {user.user_metadata?.name?.split(' ')[0] || user.user_metadata?.full_name?.split(' ')[0] || 'there'}! 👋
        </h1>
        <p className='text-xl text-gray-300'>
          Welcome back! Ready to create some amazing banners?
        </p>
      </div>

      <div className='mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4'>
        <div className='rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-6'>
          <div className='mb-2 flex items-center gap-2'>
            <IoImages className='h-6 w-6 text-blue-400' />
            <h3 className='font-semibold'>Banners Created</h3>
          </div>
          <p className='text-3xl font-bold text-blue-400'>{stats.bannersCreated}</p>
        </div>

        <div className='rounded-lg bg-gradient-to-br from-green-500/20 to-green-600/20 p-6'>
          <div className='mb-2 flex items-center gap-2'>
            <IoTime className='h-6 w-6 text-green-400' />
            <h3 className='font-semibold'>Last Visit</h3>
          </div>
          <p className='text-lg font-semibold text-green-400'>{formatLastVisit(stats.lastVisit)}</p>
        </div>

        <div className='rounded-lg bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-6'>
          <div className='mb-2 flex items-center gap-2'>
            <IoStatsChart className='h-6 w-6 text-purple-400' />
            <h3 className='font-semibold'>Usage Hours</h3>
          </div>
          <p className='text-3xl font-bold text-purple-400'>{stats.totalUsageHours}h</p>
        </div>

        <div className='rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/20 p-6'>
          <div className='mb-2 flex items-center gap-2'>
            <IoImages className='h-6 w-6 text-orange-400' />
            <h3 className='font-semibold'>Favorite Style</h3>
          </div>
          <p className='text-lg font-semibold text-orange-400'>{stats.favoriteTemplate}</p>
        </div>
      </div>

      <div className='mb-8 grid gap-6 lg:grid-cols-2'>
        <div className='rounded-lg bg-gray-800 p-6'>
          <h2 className='mb-4 text-2xl font-semibold'>Quick Actions</h2>
          <div className='space-y-3'>
            <Button className='w-full justify-start' variant='default'>
              <IoCreate className='mr-2 h-5 w-5' />
              Create New Banner
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <IoImages className='mr-2 h-5 w-5' />
              Browse Templates
            </Button>
            <Button className='w-full justify-start' variant='outline'>
              <IoStatsChart className='mr-2 h-5 w-5' />
              View Analytics
            </Button>
          </div>
        </div>

        <div className='rounded-lg bg-gray-800 p-6'>
          <h2 className='mb-4 text-2xl font-semibold'>Recent Activity</h2>
          <div className='space-y-4'>
            <div className='flex items-center gap-3 rounded bg-gray-700/50 p-3'>
              <div className='h-2 w-2 rounded-full bg-green-400'></div>
              <div>
                <p className='font-medium'>Created "Tech Startup Banner"</p>
                <p className='text-sm text-gray-400'>2 hours ago</p>
              </div>
            </div>
            <div className='flex items-center gap-3 rounded bg-gray-700/50 p-3'>
              <div className='h-2 w-2 rounded-full bg-blue-400'></div>
              <div>
                <p className='font-medium'>Updated profile settings</p>
                <p className='text-sm text-gray-400'>1 day ago</p>
              </div>
            </div>
            <div className='flex items-center gap-3 rounded bg-gray-700/50 p-3'>
              <div className='h-2 w-2 rounded-full bg-purple-400'></div>
              <div>
                <p className='font-medium'>Downloaded "Minimalist Design"</p>
                <p className='text-sm text-gray-400'>3 days ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 p-6'>
        <h2 className='mb-3 text-xl font-semibold'>💡 Pro Tip</h2>
        <p className='text-gray-300'>
          Try using our new AI-powered suggestions feature to get personalized banner recommendations 
          based on your previous creations and preferences!
        </p>
      </div>
    </div>
  );
}