import NFTDetails from '@/components/layouts/nft/NFTDetails';
import { NFTCarousel } from '@/components/NFTCarousel';
import { data } from '@/utils/nftMockData.json';

interface Props {
  params: {
    nftId: string;
  };
}

export default function NFT({ params }: Props) {
  return (
    <div className='content'>
      <div className='mb-10 grid grid-cols-1 gap-5 md:mb-0 md:grid-cols-2 md:p-10'>
        <div className='flex h-fit w-full justify-center'>
          <div className='rounded-lg bg-card p-4 md:w-4/5'>
            <img
              className='rounded-lg'
              src={`https://picsum.photos/seed/picsum${params.nftId}/1200`}
            />
          </div>
        </div>
        <div>
          <NFTDetails data={data} />
        </div>
      </div>
      <NFTCarousel header='NFT Collection' href='/' />
    </div>
  );
}
