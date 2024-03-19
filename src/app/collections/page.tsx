import { CollectionCarousel } from '@/components/CollectionCarousel';

export default function Collections() {
  return (
    <div className='lg:my-10'>
      <CollectionCarousel header='Education' />
      <CollectionCarousel header='Health' />
      <CollectionCarousel header='Animal Welfare' />
      <CollectionCarousel header='Human Services' />
      <CollectionCarousel header='Arts & Culture' />
      <CollectionCarousel header='Environment' />
    </div>
  );
}
