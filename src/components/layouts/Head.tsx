'use client';

import { default as NextHead } from 'next/head';
import { mediaStyles } from '@/utils/media';

export default function Head() {
  return (
    <NextHead>
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/assets/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/assets/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/assets/favicon-16x16.png'
      />
      <link rel='manifest' href='/manifest.webmanifest' />
      <style
        key='fresnel-css'
        dangerouslySetInnerHTML={{ __html: mediaStyles }}
        type='text/css'
      />
    </NextHead>
  );
}
