import { Container } from '@/components/Container'
import { formatDate } from '@/functions/formatDate'
import { wordpress } from '@/services/wordpress'
import { pixelCode } from '@/shared/fonts'
import Image from 'next/image'
import Link from 'next/link'

const TmtubePage = async () => {
	const videos = await wordpress.getVideos()

	return (
		<Container>
			<div className="grid grid-cols-1 min-[425px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{await Promise.all(videos.map(async (video: any) => {
					const image = await wordpress.getMediaById(video.featured_media)
					const author = await wordpress.getWpUserById(video.author)

					return (
						<div className={pixelCode.className} key={video.id}>
							<Link href={`/tmtube/${video.slug}`} className="flex flex-col gap-4">
								<div className="w-full shrink-0">
									<Image className="w-full object-cover aspect-video" src={image?.guid?.rendered} alt="" width={150} height={150} />
								</div>
								<div className="">
									<span className="text-base [word-spacing:-4px] tracking-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [text-overflow-ellipsis] overflow-hidden">{video.title.rendered}</span>
									<div className="mt-2 flex flex-wrap items-center text-sm opacity-60 gap-2">
										<span>{author.name}</span>
										<span>•</span>
										<span>{formatDate(video.date)}</span>
									</div>
								</div>
							</Link>
						</div>
					)
				}
				))}
			</div>
		</Container>
	)
}

export default TmtubePage