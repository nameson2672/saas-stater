'use client';

import { useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { IoCheckmarkCircle, IoCreate, IoImages, IoSettings, IoStatsChart } from 'react-icons/io5';

import { Button } from '@/components/ui/button';

interface NewUserOnboardingProps {
  user: User;
}

const onboardingSteps = [
  {
    id: 1,
    title: 'Create Your First Banner',
    description: 'Use our AI-powered banner generator to create stunning Twitter banners in seconds.',
    icon: IoCreate,
    location: 'Top navigation → Create Banner',
  },
  {
    id: 2,
    title: 'Browse Templates',
    description: 'Explore our collection of pre-made templates to get started quickly.',
    icon: IoImages,
    location: 'Sidebar → Templates Gallery',
  },
  {
    id: 3,
    title: 'Track Your Usage',
    description: 'Monitor your banner generation usage and see your remaining credits.',
    icon: IoStatsChart,
    location: 'Dashboard → Usage Statistics',
  },
  {
    id: 4,
    title: 'Customize Settings',
    description: 'Personalize your experience and set your preferences.',
    icon: IoSettings,
    location: 'Profile Menu → Settings',
  },
];

export function NewUserOnboarding({ user }: NewUserOnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const handleStepComplete = (stepId: number) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId]);
    }
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSkipOnboarding = () => {
    localStorage.setItem('onboardingCompleted', 'true');
    window.location.reload();
  };

  return (
    <div className='mx-auto max-w-4xl'>
      <div className='mb-8 text-center'>
        <h1 className='mb-4 text-4xl font-bold'>
          Welcome to the app, {user.user_metadata?.name?.split(' ')[0] || user.user_metadata?.full_name?.split(' ')[0] || 'there'}! 🎉
        </h1>
        <p className='text-xl text-gray-300'>
          Let's get you started with a quick tour of the main features.
        </p>
      </div>

      <div className='mb-8 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6'>
        <h2 className='mb-4 text-2xl font-semibold'>Getting Started Guide</h2>
        <p className='text-gray-300'>
          Follow these steps to make the most of your banner creation experience:
        </p>
      </div>

      <div className='grid gap-6 md:grid-cols-2'>
        {onboardingSteps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = index === currentStep;

          return (
            <div
              key={step.id}
              className={`rounded-lg border p-6 transition-all ${
                isCurrent
                  ? 'border-blue-500 bg-blue-500/10'
                  : isCompleted
                  ? 'border-green-500 bg-green-500/10'
                  : 'border-gray-700 bg-gray-800/50'
              }`}
            >
              <div className='mb-4 flex items-center gap-3'>
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    isCompleted
                      ? 'bg-green-500'
                      : isCurrent
                      ? 'bg-blue-500'
                      : 'bg-gray-600'
                  }`}
                >
                  {isCompleted ? (
                    <IoCheckmarkCircle className='h-6 w-6 text-white' />
                  ) : (
                    <Icon className='h-6 w-6 text-white' />
                  )}
                </div>
                <h3 className='text-xl font-semibold'>{step.title}</h3>
              </div>
              
              <p className='mb-3 text-gray-300'>{step.description}</p>
              
              <div className='mb-4 rounded bg-gray-700/50 p-3'>
                <p className='text-sm font-medium text-blue-300'>📍 Find it here:</p>
                <p className='text-sm text-gray-300'>{step.location}</p>
              </div>

              {isCurrent && !isCompleted && (
                <Button
                  onClick={() => handleStepComplete(step.id)}
                  className='w-full'
                  variant='default'
                >
                  Mark as Complete
                </Button>
              )}
            </div>
          );
        })}
      </div>

      <div className='mt-8 text-center'>
        {completedSteps.length === onboardingSteps.length ? (
          <div>
            <h3 className='mb-4 text-2xl font-semibold text-green-400'>
              🎊 Congratulations! You're all set up!
            </h3>
            <Button onClick={handleSkipOnboarding} variant='sexy' size='lg'>
              Start Creating Banners
            </Button>
          </div>
        ) : (
          <Button onClick={handleSkipOnboarding} variant='outline'>
            Skip Tutorial
          </Button>
        )}
      </div>

      <div className='mt-8 rounded-lg bg-gray-800 p-6'>
        <h3 className='mb-3 text-lg font-semibold'>Need Help?</h3>
        <p className='text-gray-300'>
          If you have any questions, check out our help center or contact support.
          We're here to help you create amazing banners!
        </p>
      </div>
    </div>
  );
}