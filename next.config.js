// frontend/next.config.js
module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['localhost'],
    },
    // Add this basePath configuration
    basePath: '',
    // Enable absolute imports
    experimental: {
        appDir: true,
    },
}