'use client';

import { useState } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export default function MediaLoader() {
  const [isLoading, setIsLoading] = useState(true);

  const timeout = setTimeout(() => {
    setIsLoading(false);
    clearTimeout(timeout);
  }, 100);

  if (isLoading) {
    return (
      <div className='media-loader fixed z-10 m-0 h-full w-full bg-background'>
        <div className='mt-10 flex flex-col items-center space-y-3'>
          <Skeleton className='h-[125px] w-[250px] rounded-xl bg-gray-500' />
          <div className='space-y-2'>
            <Skeleton className='h-4 w-[250px] bg-gray-500' />
            <Skeleton className='h-4 w-[200px] bg-gray-500' />
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}
