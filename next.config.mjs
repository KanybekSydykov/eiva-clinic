/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:'eiva.tatadev.pro'
            },
        ]
    },
    output: 'standalone',
};

export default nextConfig;
