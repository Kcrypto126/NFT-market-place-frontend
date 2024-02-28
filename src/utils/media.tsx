'use client';

import { createMedia } from '@artsy/fresnel';

const AppMedia = createMedia({
  breakpoints: {
    xs: 0,
    sm: 768,
    md: 1024,
    lg: 1200,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

export { Media, MediaContextProvider, mediaStyles };
