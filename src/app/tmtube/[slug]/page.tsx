import { Container } from '@/components/Container'
import { wordpress } from '@/services/wordpress'

const VideoPage = async ({ params }: { params: { slug: string } }) => {
	const [video] = await wordpress.getVideoBySlug(params.slug)
	const videos = await wordpress.getVideoBySlug(params.slug)

	console.log(video)

	return (
		<Container>
			<div className="flex gap-6">
				<div className="w-3/4">
					<video className="rounded-xl" controls src={video.acf.video}></video>
					<span className="text-xl mt-4 block">{video.title.rendered}</span>
				</div>
				<div className="w-1/4">
					{videos.map((video: any) =>
						<div className="flex" key={video.id}>
							<div>
								<span>{video.title.rendered}</span>
							</div>
						</div>
					)}
				</div>
			</div>
		</Container>
	)
}

export default VideoPage