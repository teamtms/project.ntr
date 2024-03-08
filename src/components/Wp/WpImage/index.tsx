import { wordpress } from '@/services/wordpress'
import { HTMLAttributes } from 'react'
import styles from './WpImage.module.scss'
import clsx from 'clsx'
import Image from 'next/image'

export interface WpImageProps extends HTMLAttributes<HTMLImageElement> {
	imageId: number
}

export const WpImage = async ({ imageId, className, ...props }: WpImageProps) => {
	const data = await wordpress.getMediaById(imageId)

	if (data) return <Image
		width={1000}
		height={1000}
		src={data?.guid?.rendered ? data.guid.rendered : '/image-placeholder.png'}
		alt={`image #${imageId}`}
		className={clsx(styles.image, className)}
		{...props}
	/>
}