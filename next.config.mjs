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
			}
		]
	}
}

export default nextConfig;
