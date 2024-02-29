'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Button } from '../ui/button';

const navLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'How it works',
    href: '/how',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];

export default function NavbarDesktop() {
  return (
    <NavigationMenu>
      <div className='w-screen'>
        <div className='container flex h-[85px] items-center justify-between'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Image
                src='/givabit-logo.png'
                alt='givabit logo'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: 'auto', height: '50px' }}
              />
            </NavigationMenuItem>
            {navLinks.map((nav, i) => (
              <NavigationMenuItem key={i}>
                <Link
                  href={nav.href}
                  legacyBehavior
                  passHref
                  className='cursor-pointer'
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <span className='nav-text'>{nav.title}</span>
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <NavigationMenuList className='gap-1'>
            <NavigationMenuItem>
              <Input type='text' placeholder='Search' />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button className='text-md bg-secondary font-bold hover:bg-primary'>
                Wallet Connect
              </Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </div>
    </NavigationMenu>
  );
}
