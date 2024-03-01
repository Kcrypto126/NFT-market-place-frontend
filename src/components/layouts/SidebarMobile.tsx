'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAVLINKS } from '@/utils/constants';

export default function SidebarMobile() {
  return (
    <NavigationMenu className='flex items-start'>
      <NavigationMenuList className='flex flex-col items-start'>
        <NavigationMenuItem className='px-3 pb-2'>
          <Image
            src='/givabit-logo.svg'
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
    </NavigationMenu>
  );
}
