import type { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { generateMetadata as generateSEOMetadata } from '@/shared/utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Page Not Found',
  description: 'The page you are looking for does not exist. Return to BannerCraft AI to create stunning Twitter banners with AI.',
  noIndex: true,
});

export default function NotFound() {
  return (
    <div className='flex min-h-[60vh] flex-col items-center justify-center text-center'>
      <div className='space-y-6'>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl'>
            404 - Page Not Found
          </h1>
          <p className='text-gray-400 text-lg max-w-md mx-auto'>
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Button asChild variant='default'>
            <Link href='/'>
              Return Home
            </Link>
          </Button>
          <Button asChild variant='outline'>
            <Link href='/signup'>
              Start Creating Banners
            </Link>
          </Button>
        </div>

        <div className='pt-8'>
          <h2 className='text-lg font-semibold mb-4'>Popular Pages</h2>
          <nav className='flex flex-wrap gap-4 justify-center text-sm'>
            <Link href='/pricing' className='text-blue-400 hover:text-blue-300 transition-colors'>
              Pricing
            </Link>
            <Link href='/login' className='text-blue-400 hover:text-blue-300 transition-colors'>
              Sign In
            </Link>
            <Link href='/signup' className='text-blue-400 hover:text-blue-300 transition-colors'>
              Get Started
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
}