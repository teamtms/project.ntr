/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['pixieui'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'www.fb24m.ru',
				port: '',
				pathname: '/tms/**'
			},
			{
				protocol: 'https',
				hostname: 'secure.gravatar.com',
				port: '',
				pathname: '/avatar/**'
			}
		]
	}
}

export default nextConfig;
