'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import SidebarMobile from './SidebarMobile';
import WalletLogin from '../WalletLogin';

export default function NavbarMobile() {
  return (
    <div>
      <NavigationMenu>
        <div className='flex h-fit w-screen flex-col gap-3 px-5 pb-5 pt-3'>
          <NavigationMenuList className='flex justify-between'>
            <NavigationMenuItem>
              <Drawer direction='left'>
                <DrawerTrigger asChild>
                  <Menu />
                </DrawerTrigger>
                <DrawerContent className='h-full w-[200px] outline-none'>
                  <SidebarMobile />
                </DrawerContent>
              </Drawer>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Image
                src='/givabit-logo.svg'
                alt='givabit logo'
                width={0}
                height={0}
                sizes='100vw'
                style={{ width: 'auto', height: '30px' }}
              />
            </NavigationMenuItem>
            <NavigationMenuItem>
              <WalletLogin />
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className='w-screen'>
              <Input type='text' placeholder='Search' />
            </NavigationMenuItem>
          </NavigationMenuList>
        </div>
      </NavigationMenu>
    </div>
  );
}
