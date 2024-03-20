import { notFound } from 'next/navigation';
import { CollectionCard } from '@/components/CollectionCard';
import { CATEGORY_HEADERS } from '@/utils/constants';

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
  {
    id: '5',
    title: 'Otters Haven',
    total: 50,
  },
  {
    id: '6',
    title: 'World Peace',
    total: 60,
  },
  {
    id: '7',
    title: 'For Women',
    total: 70,
  },
  {
    id: '8',
    title: 'Quantum Classroom',
    total: 80,
  },
];

interface Props {
  params: {
    category: string;
  };
}

export default function CategoryCollection({ params }: Props) {
  if (!(params.category in CATEGORY_HEADERS)) {
    return notFound();
  }

  const categoryKey = params.category as keyof typeof CATEGORY_HEADERS;
  const category = CATEGORY_HEADERS[categoryKey];

  return (
    <div className='content'>
      <div className='mb-8 text-[1.5em] font-extrabold text-foreground dark:text-white md:text-[2em]'>
        {category}
      </div>
      <div className='grid grid-cols-1 gap-5 px-0 sm:grid-cols-2 md:grid-cols-4'>
        {collections.map(({ id, title, total }) => (
          <CollectionCard key={id} id={id} title={title} total={total} />
        ))}
      </div>
    </div>
  );
}
