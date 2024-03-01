import CategoryBar from '@/components/layouts/home/CategoryBar';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function Home() {
  return (
    <div>
      <div className='w-[1920px]'>
        <AspectRatio ratio={16 / 8}>
          <img src='https://placehold.co/1920x960' alt='placeholder' />
        </AspectRatio>
      </div>
      <CategoryBar />
    </div>
  );
}
