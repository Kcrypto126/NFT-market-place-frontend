import FooterDesktop from '@/components/layouts/FooterDesktop';
import NavbarDesktop from '@/components/layouts/NavbarDesktop';

export default function LayoutDesktop({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='hidden h-screen w-screen flex-col justify-between lg:flex'>
      <NavbarDesktop />
      <main className='mb-auto'>{children}</main>
      <FooterDesktop />
    </div>
  );
}
