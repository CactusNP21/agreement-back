/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/:path*', // Matches all API routes
                headers: [
                    {key: 'Access-Control-Allow-Origin', value: '*'},
                    {key: 'Access-Control-Allow-Methods', value: 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'},
                    {key: 'Access-Control-Allow-Headers', value: 'Content-Type, Authorization'},
                ],
            },
        ];
    },
};

export default nextConfig;
