import { formatDate } from '@/functions/formatDate'
import { wordpress } from '@/services/wordpress'
import { pixelCode } from '@/shared/fonts'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

export const VideoCard = async (props: {
	appearance: string,
	slug: string,
	title: { rendered: string }
	date: string
	featured_media: number
	author: number
}) => {
	const image = await wordpress.getMediaById(props.featured_media)
	const author = await wordpress.getWpUserById(props.author)

	const appearances: Record<string, string> = {
		vertical: 'flex-col'
	}

	return (
		<Link href={`/tmtube/${props.slug}`} className={clsx("flex gap-4", appearances[props.appearance], pixelCode.className)}>
			<div className="basis-[140px] shrink-0">
				<Image className="w-full h-full aspect-video object-cover" src={image?.guid?.rendered ? image?.guid?.rendered : ''} alt="" width={150} height={150} />
			</div>
			<div className="">
				<span className="text-base [word-spacing:-4px] tracking-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [text-overflow-ellipsis] overflow-hidden">{props.title.rendered}</span>
				<div className="mt-2 flex items-center text-sm opacity-60 gap-2">
					<span>{author?.name}</span>
					<span>•</span>
					<span>{formatDate(props.date)}</span>
				</div>
			</div>
		</Link>
	)
}