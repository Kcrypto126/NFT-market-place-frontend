import { Facebook, Twitter } from 'lucide-react';
import Link from 'next/link';
import { COPYRIGHT } from '@/utils/constants';
import IconButton from '../IconButton';

export default function FooterMobile() {
  return (
    <footer className='border-t border-background bg-card py-5'>
      <div className='flex flex-col items-center gap-3'>
        <div>{COPYRIGHT}</div>
        <div className='flex space-x-2'>
          <Link href='/terms' className='hover:text-primary'>
            Terms
          </Link>
          <span>∙</span>
          <Link href='/privacy' className='hover:text-primary'>
            Privacy Policy
          </Link>
        </div>
        <div>
          {IconButton(Facebook)}
          {IconButton(Twitter)}
        </div>
      </div>
    </footer>
  );
}
