const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.nasa.gov',
            },
            {
                protocol: 'http',
                hostname: '**.nasa.gov',
            },
            {
                protocol: 'https',
                hostname: 'www.youtube.com',
            },
            {
                protocol: 'https',
                hostname: 'apod.nasa.gov',
            },
        ],
    },
}

module.exports = nextConfig
