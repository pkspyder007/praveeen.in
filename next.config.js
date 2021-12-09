module.exports = {
    async rewrites() {
        return [
            {
                source: '/blog/:slug',
                destination: 'https://https://blog-green-eight.vercel.app/:slug', // Matched parameters can be used in the destination
            },
        ]
    },
}