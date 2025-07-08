import { PropsWithChildren } from 'react';
import type { Metadata } from 'next';
import { Montserrat, Montserrat_Alternates } from 'next/font/google';
import Link from 'next/link';
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io5';

import { Logo, UserInfo } from '@/components/common';
import { Toaster } from '@/components/ui';
import { Navigation } from '@/components/navigation';
import { StructuredData } from '@/shared/components';
import { cn } from '@/shared/utils';
import { Analytics } from '@vercel/analytics/react';
import { Providers } from './providers';

import '@/styles/globals.css';

export const dynamic = 'force-dynamic';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const montserratAlternates = Montserrat_Alternates({
  variable: '--font-montserrat-alternates',
  weight: ['500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'BannerCraft AI - AI-Powered Twitter Banner Generator',
    template: '%s | BannerCraft AI',
  },
  description: 'Create stunning Twitter banners instantly with AI. Generate professional social media graphics with DALL·E integration. Start for free.',
  keywords: ['AI banner generator', 'Twitter banners', 'DALL-E', 'social media graphics', 'AI design tool'],
  authors: [{ name: 'BannerCraft Team' }],
  creator: 'BannerCraft AI',
  publisher: 'BannerCraft AI',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://localhost:3000'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'BannerCraft AI - AI-Powered Twitter Banner Generator',
    description: 'Create stunning Twitter banners instantly with AI. Generate professional social media graphics with DALL·E integration. Start for free.',
    siteName: 'BannerCraft AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BannerCraft AI - Create stunning Twitter banners with AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BannerCraft AI - AI-Powered Twitter Banner Generator',
    description: 'Create stunning Twitter banners instantly with AI. Generate professional social media graphics with DALL·E integration. Start for free.',
    images: ['/og-image.png'],
    creator: '@bannercraft',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <head>
        <StructuredData type="WebSite" />
        <StructuredData type="Organization" />
      </head>
      <body className={cn('font-sans antialiased', montserrat.variable, montserratAlternates.variable)} suppressHydrationWarning={true}>
        <Providers>
          <div className='m-auto flex h-full max-w-[1440px] flex-col px-4'>
            <AppBar />
            <main className='relative flex-1' role='main'>
              <div className='relative h-full'>{children}</div>
            </main>
            <Footer />
          </div>
          <Toaster />
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}

async function AppBar() {
  return (
    <header className='flex items-center justify-between py-8'>
      <div className='flex items-center gap-4'>
        <Logo />
        <UserInfo />
      </div>
      <Navigation />
    </header>
  );
}

function Footer() {
  return (
    <footer className='mt-8 flex flex-col gap-8 text-neutral-400 lg:mt-32' role='contentinfo'>
      <div className='flex flex-col justify-between gap-8 lg:flex-row'>
        <div>
          <Logo />
        </div>
        <div className='grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4 lg:gap-16'>
          <div className='flex flex-col gap-2 lg:gap-6'>
            <h3 className='font-semibold text-neutral-100'>Product</h3>
            <nav className='flex flex-col gap-2 lg:gap-6' aria-label='Product navigation'>
              <Link href='/pricing' className='hover:text-white transition-colors'>Pricing</Link>
            </nav>
          </div>
          <div className='flex flex-col gap-2 lg:gap-6'>
            <h3 className='font-semibold text-neutral-100'>Company</h3>
            <nav className='flex flex-col gap-2 lg:gap-6' aria-label='Company navigation'>
              <Link href='/about-us' className='hover:text-white transition-colors'>About Us</Link>
              <Link href='/privacy' className='hover:text-white transition-colors'>Privacy</Link>
            </nav>
          </div>
          <div className='flex flex-col gap-2 lg:gap-6'>
            <h3 className='font-semibold text-neutral-100'>Support</h3>
            <nav className='flex flex-col gap-2 lg:gap-6' aria-label='Support navigation'>
              <Link href='/support' className='hover:text-white transition-colors'>Get Support</Link>
            </nav>
          </div>
          <div className='flex flex-col gap-2 lg:gap-6'>
            <h3 className='font-semibold text-neutral-100'>Follow us</h3>
            <nav className='flex flex-col gap-2 lg:gap-6' aria-label='Social media links'>
              <Link href='#' className='hover:text-white transition-colors' aria-label='Follow us on Twitter'>
                <span className='flex items-center gap-2'>
                  <IoLogoTwitter size={22} aria-hidden='true' /> <span>Twitter</span>
                </span>
              </Link>
              <Link href='#' className='hover:text-white transition-colors' aria-label='Follow us on Facebook'>
                <span className='flex items-center gap-2'>
                  <IoLogoFacebook size={22} aria-hidden='true' /> <span>Facebook</span>
                </span>
              </Link>
              <Link href='#' className='hover:text-white transition-colors' aria-label='Follow us on Instagram'>
                <span className='flex items-center gap-2'>
                  <IoLogoInstagram size={22} aria-hidden='true' /> <span>Instagram</span>
                </span>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className='border-t border-zinc-800 py-6 text-center'>
        <p className='text-neutral4 text-xs'>
          Copyright {new Date().getFullYear()} © BannerCraft AI
        </p>
      </div>
    </footer>
  );
}
