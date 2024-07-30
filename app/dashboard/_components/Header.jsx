"use client";
import { Button } from '@/components/ui/button';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

function Header() {
  const path = usePathname(); 
  const { user } = useUser();
  const router = useRouter();

  return (
    <div className='flex p-4 items-center justify-between bg-secondary shadow-sm'>
      <Image src={'/logo.svg'} width={160} height={100} alt='logo' />
      <ul className='hidden md:flex gap-6'>
        <Link href="/dashboard">
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard' && 'text-primary font-bold'}`}>
            Dashboard
          </li>
        </Link>
        <Link href="/dashboard/questions">
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/questions' && 'text-primary font-bold'}`}>
            Questions
          </li>
        </Link>
        <Link href="/dashboard/upgrade">
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/upgrade' && 'text-primary font-bold'}`}>
            Upgrade
          </li>
        </Link>
        <Link href="/dashboard/how">
          <li className={`hover:text-primary hover:font-bold transition-all cursor-pointer ${path === '/dashboard/how' && 'text-primary font-bold'}`}>
            How it Works?
          </li>
        </Link>
      </ul>
      {user ? (
        <UserButton />
      ) : (
        <Button onClick={() => router.push('/sign-in')}>
          Sign In
        </Button>
      )}
    </div>
  );
}

export default Header;
