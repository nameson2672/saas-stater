'use client';

import { useEffect, useState } from 'react';
import { User } from 'next-auth';

import { Container } from '@/components/container';

import { NewUserOnboarding } from './new-user-onboarding';
import { ReturningUserWelcome } from './returning-user-welcome';

interface AppWelcomeProps {
  user: User;
}

export function AppWelcome({ user }: AppWelcomeProps) {
  const [isNewUser, setIsNewUser] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is new by looking at local storage or user creation date
    const checkUserStatus = () => {
      const lastVisit = localStorage.getItem('lastAppVisit');
      const userCreatedAt = user.id; // You might want to get actual creation date from DB
      
      if (!lastVisit) {
        // First time visiting the app
        setIsNewUser(true);
        localStorage.setItem('lastAppVisit', new Date().toISOString());
      } else {
        setIsNewUser(false);
      }
    };

    checkUserStatus();
  }, [user]);

  if (isNewUser === null) {
    return (
      <Container className='flex min-h-screen items-center justify-center'>
        <div className='text-center'>
          <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-white'></div>
          <p className='mt-4 text-lg'>Loading...</p>
        </div>
      </Container>
    );
  }

  return (
    <Container className='min-h-screen py-8'>
      {isNewUser ? (
        <NewUserOnboarding user={user} />
      ) : (
        <ReturningUserWelcome user={user} />
      )}
    </Container>
  );
}