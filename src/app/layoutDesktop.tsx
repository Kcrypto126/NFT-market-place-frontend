import NavbarDesktop from '@/components/layouts/NavbarDesktop';

export default function LayoutDesktop({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='flex w-screen flex-col'>
      <NavbarDesktop />
      {children}
    </div>
  );
}
