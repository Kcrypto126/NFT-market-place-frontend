/** @type {import('next').NextConfig} */
import nextSafe from 'next-safe';

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    headers: () => ([
        {
            source: '/:path*',
            headers: nextSafe({
                isDev: process.env.NODE_ENV !== 'production'
            }),
        },
    ])

};

export default nextConfig;
