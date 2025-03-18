/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['oneirosolutions-cms.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: '**.oneirosolutions-cms.com',
              port: '',
            }
        ],
    },
};

export default nextConfig;
