/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                source: '/api/:path*',
                headers: [
                    { key: 'Access-Control-Allow-Credentials', value: 'true' },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'http://localhost:3000',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://localhost:3000',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://cit-mercury-web.iinc-dev.aws.pmicloud.biz',
                    },
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: 'https://cit-mercury-web.iinc-qa.aws.pmicloud.biz',
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,DELETE,PATCH,POST,PUT,OPTIONS',
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version',
                    },
                ],
            },
        ];
    },
};

module.exports = nextConfig;
