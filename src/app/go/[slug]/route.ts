import { wordpress } from '@/services/wordpress'
import { redirect } from 'next/navigation'

export const GET = async (params: Request) => {
	const [{ acf }] = await wordpress.getGoLinkBySlug(params.url.split('/')[params.url.split('/').length - 1])

	redirect(acf.url)
}