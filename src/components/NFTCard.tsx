import Link from 'next/link';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Props {
  id: string;
  title: string;
  price: number;
}

export function NFTCard({ id, title, price }: Props) {
  return (
    <Link href={`/nft/${id}`}>
      <Card className='border-none p-1'>
        <CardContent className='p-0'>
          <img
            className='h-30 w-full rounded-md object-cover md:h-48 lg:h-52'
            src={`https://picsum.photos/seed/abc${id}${id * 10}/300`}
          />
        </CardContent>
        <CardFooter className='mt-3 block p-0'>
          <div className='xl:text-md line-clamp-1 px-2 text-xs font-bold md:text-sm'>
            {title}
          </div>
          <div className='xl:text-md line-clamp-1 px-2 text-xs text-primary md:text-sm'>
            {price} Eth
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
