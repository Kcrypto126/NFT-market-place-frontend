import HeaderBar from '@/components/HeaderBar';
import { NFTCard } from '@/components/NFTCard';

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
  {
    id: '5',
    title: 'NFT #5',
    price: 60,
  },
];

export default function NFTPanel() {
  return (
    <div className='container py-10'>
      <HeaderBar header='Latest NFTs' href='/' />
      <div className='grid grid-cols-2 gap-5 px-0 md:grid-cols-4 lg:grid-cols-5'>
        {nfts.map(({ id, title, price }) => (
          <NFTCard key={id} id={id} title={title} price={price} />
        ))}
      </div>
    </div>
  );
}
