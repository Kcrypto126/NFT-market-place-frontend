import {
  BookOpen,
  HandHelping,
  HeartPulse,
  Palette,
  PawPrint,
  Sprout,
} from 'lucide-react';
import Link from 'next/link';

const causes = [
  {
    title: 'Education',
    href: '/education',
    Component: BookOpen,
  },
  {
    title: 'Health',
    href: '/health',
    Component: HeartPulse,
  },
  {
    title: 'Animal Welfare',
    href: '/animal',
    Component: PawPrint,
  },
  {
    title: 'Human Services',
    href: '/human',
    Component: HandHelping,
  },
  {
    title: 'Arts & Culture',
    href: '/arts',
    Component: Palette,
  },
  {
    title: 'Environment',
    href: '/environment',
    Component: Sprout,
  },
];

export default function CategoryBar() {
  return (
    <div className='container flex  flex-wrap justify-between gap-8 py-20 '>
      {causes.map(({ title, href, Component }, i) => (
        <Link key={i} href={href} className='group w-min grow basis-0'>
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
