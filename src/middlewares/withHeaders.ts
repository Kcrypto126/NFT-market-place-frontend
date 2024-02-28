import { NextFetchEvent, NextMiddleware, NextRequest } from 'next/server';
import { MiddlewareFactory } from '@/types/middleware.type';

export const withHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (request: NextRequest, _next: NextFetchEvent) => {
    const response = await next(request, _next);

    const csp = `
                default-src 'self';
                script-src 'self' 'unsafe-eval' 'unsafe-inline';
                style-src 'self' 'unsafe-inline';
                img-src 'self' data:;
                connect-src 'self';
                font-src 'self';
                object-src 'none';
                media-src 'none';
                frame-src 'none';
            `
      .trim()
      .replace(/\s+/g, ' ');

    if (response) {
      response.headers.set('Content-Security-Policy', csp);
      response.headers.set('X-Content-Type-Options', 'nosniff');
      response.headers.set('X-Frame-Options', 'DENY');
      response.headers.set('X-XSS-Protection', '1; mode=block');
      response.headers.set(
        'Referrer-Policy',
        'strict-origin-when-cross-origin'
      );
      response.headers.set(
        'Permissions-Policy',
        'camera=(), microphone=(), geolocation=()'
      );
    }

    return response;
  };
};
