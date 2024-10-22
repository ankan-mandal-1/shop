/** @type {import('next').NextConfig} */
const nextConfig =  {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**',
            // hostname: ['images.unsplash.com', 'res.cloudinary.com'],
            pathname: '**',
          },
        ],
      },
};

export default nextConfig;
