import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className='mt-40 flex flex-col items-center justify-center gap-5'>
      <p className='text-9xl font-bold text-zinc-600'>404</p>
      <p className='text-5xl font-bold text-gray-800'>Page not found!</p>
      <p className='text-gray-600'>
        The page you are looking for not available.
      </p>
      <Button asChild className='hover:bg-secondary'>
        <Link href='/'>Go Back To Home</Link>
      </Button>
    </div>
  );
}
