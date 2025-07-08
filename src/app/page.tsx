import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout';
import { Badge, Button } from '@/components/ui';
import { FAQSection, FeaturesSection, TechStackSection, TestimonialsSection } from '@/features/landing-page';
import { PricingSection } from '@/features/pricing/components/pricing-section';
import { generateMetadata as generateSEOMetadata } from '@/shared/utils';

export const metadata: Metadata = generateSEOMetadata({
  title: 'BannerCraft AI',
  description: 'Create stunning Twitter banners instantly with AI. Generate professional social media graphics with DALL·E integration. Start for free and transform your social presence.',
  canonical: '/',
  keywords: ['AI banner generator', 'Twitter banners', 'DALL-E', 'social media graphics', 'AI design tool', 'banner creator', 'Twitter header generator'],
  ogType: 'website',
});

export default async function HomePage() {
  return (
    <article className='flex flex-col gap-8 lg:gap-32'>
      <HeroSection />
      <ExamplesSection />
      <FeaturesSection />
      <TechStackSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
    </article>
  );
}

function HeroSection() {
  return (
    <section className='relative overflow-hidden lg:overflow-visible' aria-labelledby='hero-heading'>
      <Container className='relative rounded-lg bg-black py-20 lg:py-[140px]'>
        <div className='relative z-10 flex flex-col gap-6 lg:max-w-xl lg:pl-8'>
          <Badge variant='secondary' className='w-fit bg-gradient-to-r from-[#616571] via-[#7782A9] to-[#826674] text-black font-semibold border-none'>
            ✨ Powered by DALL·E AI
          </Badge>
          <div className='space-y-4'>
            <h1 id='hero-heading' className='text-4xl font-bold text-white lg:text-6xl'>
              Create stunning Twitter banners with AI
            </h1>
            <p className='text-gray-300 text-lg lg:text-xl max-w-lg leading-relaxed'>
              Generate professional social media graphics in seconds using advanced AI technology. 
              No design skills required.
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-4'>
            <Button asChild variant='sexy' size='lg'>
              <Link href='/signup'>Get started for free</Link>
            </Button>
            <Button asChild variant='outline' size='lg'>
              <Link href='#examples'>View examples</Link>
            </Button>
          </div>
          <div className='flex items-center gap-6 text-sm text-gray-400'>
            <span className='flex items-center gap-2'>
              ⚡ Generate in 30 seconds
            </span>
            <span className='flex items-center gap-2'>
              🎨 Professional quality
            </span>
            <span className='flex items-center gap-2'>
              🆓 Free to start
            </span>
          </div>
        </div>
      </Container>
      <Image
        src='/hero-shape.png'
        width={867}
        height={790}
        alt='Abstract geometric design element for banner creation interface'
        className='absolute right-0 top-0 rounded-tr-lg'
        priority
        quality={100}
      />
    </section>
  );
}

function ExamplesSection() {
  return (
    <section id='examples' className='flex flex-col gap-4 overflow-hidden rounded-lg bg-black py-16' aria-labelledby='examples-heading'>
      <Container>
        <header className='text-center mb-12'>
          <Badge variant='secondary' className='mb-4'>
            Gallery
          </Badge>
          <h2 id='examples-heading' className='text-3xl font-bold text-white mb-4 lg:text-4xl'>
            AI-Generated Banner Examples
          </h2>
          <p className='text-gray-300 text-lg max-w-2xl mx-auto'>
            See the power of AI in action. These stunning Twitter banners were created in seconds using our DALL·E integration.
          </p>
        </header>
        <div className='flex justify-center gap-4 mb-4'>
          <Image
            className='flex-shrink-0'
            src='/example1.png'
            width={600}
            height={200}
            alt='AI-generated Twitter banner example featuring modern typography and professional design'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example2.png'
            width={600}
            height={200}
            alt='Creative Twitter banner template generated with DALL·E AI technology'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example3.png'
            width={600}
            height={200}
            alt='Professional social media banner design created using AI banner generator'
            quality={100}
          />
        </div>
        <div className='flex gap-4 mb-4'>
          <Image
            className='flex-shrink-0'
            src='/example4.png'
            width={600}
            height={200}
            alt='Vibrant Twitter header design showcasing AI-powered banner creation capabilities'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example5.png'
            width={600}
            height={200}
            alt='Minimalist Twitter banner example with clean typography and modern aesthetic'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example6.png'
            width={600}
            height={200}
            alt='Dynamic social media banner template featuring gradient designs and bold text'
            quality={100}
          />
        </div>
        <div className='flex justify-center gap-4'>
          <Image
            className='flex-shrink-0'
            src='/example7.png'
            width={600}
            height={200}
            alt='Creative Twitter banner featuring abstract artwork generated by AI technology'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example8.png'
            width={600}
            height={200}
            alt='Professional business Twitter header design with sophisticated color scheme'
            quality={100}
          />
          <Image
            className='flex-shrink-0'
            src='/example9.png'
            width={600}
            height={200}
            alt='Eye-catching social media banner with bold graphics and artistic elements'
            quality={100}
          />
        </div>
      </Container>
    </section>
  );
}
