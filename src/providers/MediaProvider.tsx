'use client';

import { MediaContextProvider } from '@/utils/media';

export default function MediaProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MediaContextProvider>{children}</MediaContextProvider>;
}
