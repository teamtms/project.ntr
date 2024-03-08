import { wordpress } from '@/services/wordpress'
import { HTMLAttributes } from 'react'

export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	imageId: number
}

export const WpImage = async ({ imageId, ...props }: WpImageProps) => {
	const data = await wordpress.getMediaById(imageId)

	if (data) return <><img src={data?.guid?.rendered ? data.guid.rendered : '/image-placeholder.png'} alt={`image #${imageId}`} {...props} /></>
}