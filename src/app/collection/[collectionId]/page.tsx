import { NFTCard } from '@/components/NFTCard';

const collections = [
  {
    title: 'Education Owls',
  },
  {
    title: 'Nike for School',
  },
  {
    title: 'Healing Symphony',
  },
  {
    title: 'Walk in my shoes',
  },
  {
    title: 'Otters Haven',
  },
  {
    title: 'World Peace',
  },
  {
    title: 'For Women',
  },
  {
    title: 'Quantum Classroom',
  },
  {
    title: 'Bridge to recovery',
  },
  {
    title: 'Save the Rhinos',
  },
];

export default function NFTCollection() {
  return (
    <div className='content'>
      <div className='mb-8 text-[1.5em] font-extrabold text-foreground dark:text-white md:text-[2em]'>
        NFTs
      </div>
      <div className='grid grid-cols-2 gap-6 px-0 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {collections.map(({ title }, i) => (
          <NFTCard key={i} id={i.toString()} title={title} price={i * 100} />
        ))}
      </div>
    </div>
  );
}
