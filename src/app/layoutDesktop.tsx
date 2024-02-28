export default function LayoutDesktop({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex w-screen'>{children}</div>;
}
