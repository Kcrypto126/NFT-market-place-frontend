import Image from 'next/image';
import Link from 'next/link';
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { NAVLINKS } from '@/utils/constants';

export default function Navlinks({ className = '' }) {
  return (
    <>
      <NavigationMenuItem className={className}>
        <Image
          src='/givabit-logo.svg'
          alt='givabit logo'
          width={0}
          height={0}
          sizes='100vw'
          style={{ width: 'auto', height: '40px' }}
        />
      </NavigationMenuItem>
      {NAVLINKS.map((nav, i) => (
        <NavigationMenuItem key={i}>
          <Link href={nav.href} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <span className='text-base font-bold'>{nav.title}</span>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );
}
