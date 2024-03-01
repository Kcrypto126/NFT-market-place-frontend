import { Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { COPYRIGHT } from '@/utils/constants';
import IconButton from '../IconButton';

export default function FooterDesktop() {
  return (
    <footer className='w-screen border-t border-background bg-card'>
      <div className='nav-desktop w-screen'>
        <div className='flex h-4 items-center space-x-4'>
          <div>{COPYRIGHT}</div>
          <Separator orientation='vertical' />
          <div className='flex space-x-2'>
            <Link href='/terms' className='hover:text-primary'>
              Terms
            </Link>
            <span>∙</span>
            <Link href='/privacy' className='hover:text-primary'>
              Privacy Policy
            </Link>
          </div>
        </div>
        <div>
          {IconButton(Facebook)}
          {IconButton(Twitter)}
        </div>
      </div>
    </footer>
  );
}
