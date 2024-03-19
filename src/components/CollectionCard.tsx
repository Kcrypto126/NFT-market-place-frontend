import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface Props {
  id: string;
  title: string;
  total: number;
}

export function CollectionCard({ id, title, total }: Props) {
  return (
    <Link href={`/collection/${id}`}>
      <Card className='border-none p-4 xl:p-6'>
        <CardContent className='p-0'>
          <img
            className='h-28 w-full rounded-md object-cover sm:h-36 md:h-40 xl:h-44'
            src='https://picsum.photos/seed/picsum/300'
          />
          <div className='mt-2 grid grid-cols-3 gap-2'>
            <img
              className='h-10 w-full rounded-md object-cover sm:h-12 md:h-12 xl:h-14'
              src='https://picsum.photos/seed/hello/300'
            />
            <img
              className='d:h-12 h-10 w-full rounded-md object-cover sm:h-12 xl:h-14'
              src='https://picsum.photos/seed/world/300'
            />
            <img
              className='h-10 w-full rounded-md object-cover sm:h-12 md:h-12 xl:h-14'
              src='https://picsum.photos/seed/peace/300'
            />
          </div>
        </CardContent>
        <CardFooter className='mt-3 block p-0'>
          <div className='xl:text-md line-clamp-1 text-sm'>{title}</div>
          <Badge className='mt-2 rounded bg-popover font-normal text-gray-600'>
            {total} Items
          </Badge>
        </CardFooter>
      </Card>
    </Link>
  );
}
