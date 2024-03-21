import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Props {
  header: string;
  href: string;
}

export default function HeaderBar({ header, href }: Props) {
  return (
    <div className='mb-8 flex items-center justify-between'>
      <div className='text-[1.5em] font-extrabold text-foreground dark:text-white md:text-[2em]'>
        {header}
      </div>
      {href !== '/' && (
        <Link href={href} className='flex items-center hover:text-primary'>
          <div className='text-[13px] font-bold '>VIEW ALL</div>
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  );
}
