import BannerPanel from '@/components/layouts/home/BannerPanel';
import CategoryPanel from '@/components/layouts/home/CategoryPanel';
import CollectionPanel from '@/components/layouts/home/CollectionPanel';
import NFTPanel from '@/components/layouts/home/NFTPanel';

export default function Home() {
  return (
    <div>
      <BannerPanel />
      <CategoryPanel />
      <CollectionPanel />
      <NFTPanel />
    </div>
  );
}
