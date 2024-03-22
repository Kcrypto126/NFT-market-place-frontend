import Link from 'next/link';
import {
  AnimalIcon,
  ArtsIcon,
  EducationIcon,
  EnvironmentIcon,
  HealthIcon,
  HumanIcon,
} from '@/components/GivabitIcons';
import { CATEGORY, CATEGORY_SLUGS } from '@/types/category.enum';

const causes = [
  {
    title: CATEGORY.EDUCATION,
    href: `/category/${CATEGORY_SLUGS.EDUCATION}`,
    Component: EducationIcon,
  },
  {
    title: CATEGORY.HEALTH,
    href: `/category/${CATEGORY_SLUGS.HEALTH}`,
    Component: HealthIcon,
  },
  {
    title: CATEGORY.ANIMAL_WELFARE,
    href: `/category/${CATEGORY_SLUGS.ANIMAL}`,
    Component: AnimalIcon,
  },
  {
    title: CATEGORY.HUMAN_SERVICES,
    href: `/category/${CATEGORY_SLUGS.HUMAN}`,
    Component: HumanIcon,
  },
  {
    title: CATEGORY.ARTS_CULTURE,
    href: `/category/${CATEGORY_SLUGS.ARTS}`,
    Component: ArtsIcon,
  },
  {
    title: CATEGORY.ENVIRONMENT,
    href: `/category/${CATEGORY_SLUGS.ENVIRONMENT}`,
    Component: EnvironmentIcon,
  },
];

export default function CategoryPanel() {
  return (
    <div className='container grid grid-cols-1 gap-5 pb-10 pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      {causes.map(({ title, href, Component }, i) => (
        <Link key={i} href={href}>
          <div className='group   flex  cursor-pointer flex-col items-center gap-1 rounded-lg bg-card py-6 hover:bg-primary'>
            <Component
              className='fill-primary group-hover:fill-[#f6f6f6] group-hover:text-white'
              size={40}
            />
            <p className='font-bold group-hover:text-white '>{title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
