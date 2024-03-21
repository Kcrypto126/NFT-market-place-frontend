import * as React from 'react';
import HeaderBar from '@/components/HeaderBar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { NFTCard } from './NFTCard';

const nfts = [
  {
    id: '1',
    title: 'NFT #1',
    price: 10,
  },
  {
    id: '2',
    title: 'NFT #2',
    price: 20,
  },
  {
    id: '3',
    title: 'NFT #3',
    price: 30,
  },
  {
    id: '4',
    title: 'NFT #4',
    price: 40,
  },
];

interface Props {
  header: string;
  href: string;
}

export function NFTCarousel({ header, href }: Props) {
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
            {Array.from([...nfts, ...nfts]).map(({ id, title, price }) => (
              <CarouselItem key={id} className=' sm:basis-1/3 lg:basis-1/5'>
                <NFTCard id={id} title={title} price={price} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
