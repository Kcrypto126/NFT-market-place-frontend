'use client';

import { default as NextHead } from 'next/head';
import { mediaStyles } from '@/utils/media';

export default function Head() {
  return (
    <NextHead>
      <style
        key='fresnel-css'
        dangerouslySetInnerHTML={{ __html: mediaStyles }}
        type='text/css'
      />
    </NextHead>
  );
}
