export default function LayoutMobile({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className='flex flex-col items-center pt-5'>{children}</div>;
}
