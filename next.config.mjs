/** @type {import('next').NextConfig} */
import BundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = BundleAnalyzer({
    enabled: process.env.BUNDLE_ANALYZE === 'true'
 })

const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

export default withBundleAnalyzer(nextConfig);
