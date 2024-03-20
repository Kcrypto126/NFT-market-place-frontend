import { CollectionCarousel } from '@/components/CollectionCarousel';
import { CATEGORY, CATEGORY_SLUGS } from '@/types/category.enum';

export default function Collections() {
  return (
    <div className='content'>
      <CollectionCarousel
        header={CATEGORY.EDUCATION}
        href={`/category/${CATEGORY_SLUGS.EDUCATION}`}
      />
      <CollectionCarousel
        header={CATEGORY.HEALTH}
        href={`/category/${CATEGORY_SLUGS.HEALTH}`}
      />
      <CollectionCarousel
        header={CATEGORY.ANIMAL_WELFARE}
        href={`/category/${CATEGORY_SLUGS.ANIMAL}`}
      />
      <CollectionCarousel
        header={CATEGORY.HUMAN_SERVICES}
        href={`/category/${CATEGORY_SLUGS.HUMAN}`}
      />
      <CollectionCarousel
        header={CATEGORY.ARTS_CULTURE}
        href={`/category/${CATEGORY_SLUGS.ARTS}`}
      />
      <CollectionCarousel
        header={CATEGORY.ENVIRONMENT}
        href={`/category/${CATEGORY_SLUGS.ENVIRONMENT}`}
      />
    </div>
  );
}
