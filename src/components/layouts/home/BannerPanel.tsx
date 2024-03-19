import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function BannerPanel() {
  return (
    <div className='relative'>
      <div className='absolute w-full'>
        <div className='container flex'>
          <div className='w-0 md:w-1/2'></div>
          <div className='w-full md:w-1/2  '>
            <p className='mt-12 text-center text-3xl font-bold text-white drop-shadow-lg md:mt-14 md:text-4xl xl:mt-40 xl:text-6xl'>
              Support causes
              <br />
              close to your heart
            </p>
            <p className='mt-12 text-center text-2xl font-bold text-foreground drop-shadow-lg md:text-3xl xl:text-4xl'>
              Reinventing philanthropy together
            </p>
            <p className='mt-12 text-center text-2xl font-bold text-white drop-shadow-lg md:text-3xl xl:text-4xl'>
              Engage for change
              <br />&<br />
              become an ambassador
            </p>
            <div className='mt-12 flex justify-center'>
              <Button className='px-12 pb-7 pt-6 text-2xl' variant='secondary'>
                Explore
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Image
        className='h-[550px] w-full object-cover lg:h-fit'
        src='/givabit-banner.jpg'
        alt='givabit banner'
        width={4322}
        height={2160}
      />
    </div>
  );
}
