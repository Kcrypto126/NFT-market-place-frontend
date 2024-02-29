'use client';

import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAVLINKS } from '@/utils/constants';

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
            {NAVLINKS.map((nav, i) => (
              <NavigationMenuItem key={i}>
                <Link href={nav.href} legacyBehavior passHref>
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
