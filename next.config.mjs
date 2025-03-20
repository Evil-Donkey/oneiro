/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'oneirosolutions-cms.com',
              port: '',
            },
            {
              protocol: 'https',
              hostname: '**.oneirosolutions-cms.com',
              port: '',
            }
        ],
    },
};

export default nextConfig;
