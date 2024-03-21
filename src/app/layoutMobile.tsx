import FooterMobile from '@/components/layouts/FooterMobile';
import NavbarMobile from '@/components/layouts/NavbarMobile';

export default function LayoutMobile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex h-screen flex-col justify-between lg:hidden'>
      <NavbarMobile />
      <main className='mb-auto'>{children}</main>
      <FooterMobile />
    </div>
  );
}
