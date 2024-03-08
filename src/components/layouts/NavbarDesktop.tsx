'use client';

import { Input } from '@/components/ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Navlinks from './NavLinks';
import WalletLogin from '../WalletLogin';

export default function NavbarDesktop() {
  return (
    <div className='w-screen border-b'>
      <NavigationMenu>
        <div className='w-screen'>
          <div className='nav-desktop'>
            <NavigationMenuList>
              <Navlinks className='pr-5' />
            </NavigationMenuList>
            <NavigationMenuList className='gap-1'>
              <NavigationMenuItem>
                <Input type='text' placeholder='Search' />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <WalletLogin />
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </div>
      </NavigationMenu>
    </div>
  );
}
