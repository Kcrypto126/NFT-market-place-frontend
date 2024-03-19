import BannerPanel from '@/components/layouts/home/BannerPanel';
import CategoryPanel from '@/components/layouts/home/CategoryPanel';
import CollectionPanel from '@/components/layouts/home/CollectionPanel';

export default function Home() {
  return (
    <div>
      <BannerPanel />
      <CategoryPanel />
      <CollectionPanel />
    </div>
  );
}
