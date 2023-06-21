module.exports = {
  images: {
    domains: ["bittersweet-painted-willow.glitch.me", "placeimg.com", "source.unsplash.com"],
    
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.example.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};
