import { CATEGORY, CATEGORY_SLUGS } from '@/types/category.enum';

// App
export const COPYRIGHT = '©2024, Givabit.io, Inc. All rights reserved.';
export const NAVLINKS = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  {
    title: 'How it works',
    href: '/how',
  },
  {
    title: 'Contact Us',
    href: '/contact',
  },
];

export const CATEGORY_HEADERS = {
  [CATEGORY_SLUGS.EDUCATION]: CATEGORY.EDUCATION,
  [CATEGORY_SLUGS.HEALTH]: CATEGORY.HEALTH,
  [CATEGORY_SLUGS.ANIMAL]: CATEGORY.ANIMAL_WELFARE,
  [CATEGORY_SLUGS.HUMAN]: CATEGORY.HUMAN_SERVICES,
  [CATEGORY_SLUGS.ARTS]: CATEGORY.ARTS_CULTURE,
  [CATEGORY_SLUGS.ENVIRONMENT]: CATEGORY.ENVIRONMENT,
};
