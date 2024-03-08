import type { WpUsernameProps } from './WpUsername.props'
import { wordpress } from '@/services/wordpress'

export const WpUsername = async ({ userId, ...props }: WpUsernameProps) => {
	const data = await wordpress.getWpUserById(userId)

	return (
		<span {...props}>
			{data.name ? data.name : ''}
		</span>
	)
}
