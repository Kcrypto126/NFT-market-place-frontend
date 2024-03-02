import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Navlinks from './NavLinks';

export default function SidebarMobile() {
  return (
    <NavigationMenu className='flex items-start'>
      <NavigationMenuList className='flex flex-col items-start'>
        <Navlinks className='px-3 pb-2' />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
