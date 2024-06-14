import { wordpress } from '@/services/wordpress'

export const WpUsername = async ({ id }: { id: number }) => {
	const user = await wordpress.getWpUserById(id)

	return (
		<span>{user.name}</span>
	)
}