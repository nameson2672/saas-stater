import Link from 'next/link';
import { IoMenu } from 'react-icons/io5';

import { AccountMenu } from './account-menu';
import { Logo } from '@/components/common';
import { Button, Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui';
import { getSession } from '@/core/auth';

export async function Navigation() {
  const session = await getSession();

  return (
    <div className='relative flex items-center gap-6'>
      {/* Desktop Navigation */}
      <nav className='hidden lg:flex items-center gap-6'>
        <Link href='/features' className='text-gray-300 hover:text-white transition-colors'>
          Features
        </Link>
        <Link href='/pricing' className='text-gray-300 hover:text-white transition-colors'>
          Pricing
        </Link>
        <Link href='/examples' className='text-gray-300 hover:text-white transition-colors'>
          Examples
        </Link>
        <Link href='/docs' className='text-gray-300 hover:text-white transition-colors'>
          Documentation
        </Link>
      </nav>

      {/* Authentication/Account */}
      {session ? (
        <AccountMenu />
      ) : (
        <>
          <Button variant='outline' className='hidden lg:flex' asChild>
            <Link href='/login'>Sign in</Link>
          </Button>
          <Button variant='sexy' className='hidden flex-shrink-0 lg:flex' asChild>
            <Link href='/signup'>Get started for free</Link>
          </Button>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger className='block lg:hidden'>
              <IoMenu size={28} />
            </SheetTrigger>
            <SheetContent className='w-full bg-black'>
              <SheetHeader>
                <Logo />
                <SheetDescription className='py-8'>
                  <nav className='flex flex-col gap-4 mb-8'>
                    <Link href='/features' className='text-white hover:text-gray-300 py-2'>
                      Features
                    </Link>
                    <Link href='/pricing' className='text-white hover:text-gray-300 py-2'>
                      Pricing
                    </Link>
                    <Link href='/examples' className='text-white hover:text-gray-300 py-2'>
                      Examples
                    </Link>
                    <Link href='/docs' className='text-white hover:text-gray-300 py-2'>
                      Documentation
                    </Link>
                    <Link href='/support' className='text-white hover:text-gray-300 py-2'>
                      Support
                    </Link>
                  </nav>
                  <div className='flex flex-col gap-3'>
                    <Button variant='outline' className='w-full' asChild>
                      <Link href='/login'>Sign in</Link>
                    </Button>
                    <Button variant='sexy' className='w-full' asChild>
                      <Link href='/signup'>Get started for free</Link>
                    </Button>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </>
      )}
    </div>
  );
}

