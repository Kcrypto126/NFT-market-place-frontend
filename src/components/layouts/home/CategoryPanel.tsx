import {
  BookOpen,
  HandHelping,
  HeartPulse,
  Palette,
  PawPrint,
  Sprout,
} from 'lucide-react';
import Link from 'next/link';
import { CATEGORY, CATEGORY_SLUGS } from '@/types/category.enum';

const causes = [
  {
    title: CATEGORY.EDUCATION,
    href: `/category/${CATEGORY_SLUGS.EDUCATION}`,
    Component: BookOpen,
  },
  {
    title: CATEGORY.HEALTH,
    href: `/category/${CATEGORY_SLUGS.HEALTH}`,
    Component: HeartPulse,
  },
  {
    title: CATEGORY.ANIMAL_WELFARE,
    href: `/category/${CATEGORY_SLUGS.ANIMAL}`,
    Component: PawPrint,
  },
  {
    title: CATEGORY.HUMAN_SERVICES,
    href: `/category/${CATEGORY_SLUGS.HUMAN}`,
    Component: HandHelping,
  },
  {
    title: CATEGORY.ARTS_CULTURE,
    href: `/category/${CATEGORY_SLUGS.ARTS}`,
    Component: Palette,
  },
  {
    title: CATEGORY.ENVIRONMENT,
    href: `/category/${CATEGORY_SLUGS.ENVIRONMENT}`,
    Component: Sprout,
  },
];

export default function CategoryPanel() {
  return (
    <div className='container grid grid-cols-1 gap-5 pb-10 pt-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
      {causes.map(({ title, href, Component }, i) => (
        <Link key={i} href={href}>
          <div className='group   flex  cursor-pointer flex-col items-center gap-1 rounded-lg bg-card py-6 hover:bg-primary'>
            <Component
              className='text-primary group-hover:bg-primary group-hover:text-white'
              size={40}
            />
            <p className='group-hover:text-white '>{title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
