import { CollectionCard } from '@/components/CollectionCard';
import HeaderBar from '@/components/HeaderBar';

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

export default function CollectionPanel() {
  return (
    <div className='container py-10'>
      <HeaderBar header='Top Collections' href='/collections' />
      <div className='grid grid-cols-1 gap-5 px-0 sm:grid-cols-2 md:grid-cols-4'>
        {collections.map(({ id, title, total }) => (
          <CollectionCard key={id} id={id} title={title} total={total} />
        ))}
      </div>
    </div>
  );
}
