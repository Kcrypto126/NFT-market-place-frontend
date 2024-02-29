import NavbarMobile from '@/components/layouts/NavbarMobile';

export default function LayoutMobile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex flex-col items-center'>
      <NavbarMobile />
      {children}
    </div>
  );
}
