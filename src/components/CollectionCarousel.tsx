import * as React from 'react';
import HeaderBar from '@/components/HeaderBar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CollectionCard } from './CollectionCard';

const collections = [
  {
    id: '1',
    title: 'Education Owls',
    total: 10,
  },
  {
    id: '2',
    title: 'Nike for School',
    total: 20,
  },
  {
    id: '3',
    title: 'Healing Symphony',
    total: 30,
  },
  {
    id: '4',
    title: 'Walk in my shoes',
    total: 40,
  },
];

interface Props {
  header: string;
  href: string;
}

export function CollectionCarousel({ header, href }: Props) {
  return (
    <div className='mb-10 md:py-3'>
      <HeaderBar header={header} href={href} />
      <div className='px-12'>
        <Carousel
          opts={{
            align: 'start',
          }}
        >
          <CarouselContent>
            {Array.from([...collections, ...collections]).map(
              ({ id, title, total }) => (
                <CarouselItem key={id} className=' sm:basis-1/2 lg:basis-1/4'>
                  <CollectionCard id={id} title={title} total={total} />
                </CarouselItem>
              )
            )}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
