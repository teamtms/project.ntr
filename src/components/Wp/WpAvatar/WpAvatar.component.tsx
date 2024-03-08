import type { WpAvatarProps } from './WpAvatar.props'
import { wordpress } from '@/services/wordpress'
import { Skeleton } from 'pixieui/components'


export const WpAvatar = async (props: WpAvatarProps) => {

	const data = await wordpress.getWpUserById(props.userId)

	return (
		<>
			{data ? <img src={data.avatar_urls[96]} className="inline-block w-40 shrink-0 h-40 object-cover rounded-[4px]" /> : <Skeleton />}
		</>
	)
}


