import Eval from '@/components/Eval'
import { formatDate } from '@/functions/formatDate'
import { wordpress } from '@/services/wordpress'
import { pixelCode } from '@/shared/fonts'
import clsx from 'clsx'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'

const addComment = async (formData: FormData) => {
	'use server'

	const postId = formData.get('post-id')
	const comment = formData.get('comment')

	if (cookies().has('saved-session-token')) {
		await fetch(`https://fb24m.ru/tms/wp-json/wp/v2/comments?post=${postId}&content=${comment}`, {
			method: 'post',
			headers: {
				'Authorization': `Basic ${cookies().get('saved-session-token')?.value}`
			}
		})
	}
	else {
		const username = formData.get('username')

		const response = await fetch(`https://fb24m.ru/tms/wp-json/wp/v2/comments?post=${postId}&content=${comment}&author_email=this_email_does_not_exist@thetms.ru&author_name=${username}`, {
			method: 'post',
			headers: {
				'Authorization': `Basic dG1zZW1waXJlQHRoZXRtcy5ydToyQU9tQjN5cDRGM0omKFBXc1dHZUh4Jig=`
			}
		})
		const json = await response.json()

		console.log(json)

	}

	revalidatePath('./')
}

const VideoPage = async ({ params }: { params: { slug: string } }) => {
	const [video] = await wordpress.getVideoBySlug(params.slug)
	const videos = await wordpress.getVideos()
	const author = await wordpress.getWpUserById(video.author)
	const comments = await wordpress.getCommentsByPostId(video.id)

	console.log(video)

	return (
		<div className="fixed overflow-auto top-0 left-0 w-full h-full z-[999] bg-[#11141d]">
			<div className="max-w-[1440px] w-full p-4 mx-auto">
				<div className="p-6">
					<Link href="/home">Главная</Link>
				</div>
				<div className={clsx("flex flex-col gap-6 lg:flex-row", pixelCode.className)}>
					<div className="grow">
						<video className="w-full rounded-xl" controls src={video.acf.video}></video>
						<span className="text-2xl mt-4 block">{video.title.rendered}</span>
						<div className="mt-4 bg-[#272e43] p-3 px-4">
							<span>{author?.name}</span> <span>{formatDate(video.date)}</span>
							<details className="group">
								<summary className="cursor-pointer">
									<div className="group-open:hidden">
										<div className="[display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [text-overflow:clip] overflow-hidden" dangerouslySetInnerHTML={{ __html: video.excerpt.rendered.replace('<p>', '').replace('</p>', '') }}></div>
										<span>...eще</span>
									</div>
									<span className="hidden group-open:inline-block hover:bg-[#11141d] px-1 -ml-0.5">Свернуть</span>
								</summary>
								<div>
									<Eval className="" dangerouslySetInnerHTML={{ __html: video.content.rendered }}></Eval>
									<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6">
										{video.acf.creators.map((item: any) => <div className="w-96" key={JSON.stringify(item)}>
											<span className="text-base">{item.role}</span>
											<span className="text-xl block mt-1" dangerouslySetInnerHTML={{ __html: item.list.split('\n').join('<br>') }}></span>
										</div>)}
									</div>
								</div>
							</details>
						</div>
						<h2 className="mt-8 text-2xl">Комментарии</h2>
						<form className="mt-4" action={addComment}>
							<input type="text" className="hidden" readOnly name="post-id" value={video.id} />
							<div className="flex gap-2">
								{!cookies().has('saved-session-token') &&
									<input name="username" placeholder="Имя пользователя" className="w-full text-xl p-3 px-4 bg-[#272e43] text-white outline-none" />
								}
								<input name="comment" placeholder="Комментарий" className="w-full text-xl p-3 px-4 bg-[#272e43] text-white outline-none" />
								<button className="flex-grow-0 text-xl p-3 px-4 bg-[#272e43] text-white outline-none">Отправить</button>
							</div>
						</form>
						<p className="mt-2 opacity-50">Если ваш комментарий не появился, он будет добавлен после модерации</p>
						<div className="flex flex-col gap-4 mt-8">
							{comments?.map((comment) => <div className="flex gap-4" key={comment.id}>
								<div className="">
									<Image width={60} height={60} className="w-12 h-12 rounded-full" src={comment.author_avatar_urls[96]} alt=""></Image>
								</div>
								<div className="">
									<span>{comment.author_name}</span>
									<div className="text-lg mt-0.5" dangerouslySetInnerHTML={{ __html: comment.content.rendered }}></div>
								</div>
							</div>)}
						</div>
					</div>
					<div className="lg:w-[400px] lg:shrink-0 flex flex-col gap-4">
						{await Promise.all(videos.map(async (video: any) => {
							const image = await wordpress.getMediaById(video.featured_media)
							const author = await wordpress.getWpUserById(video.author)

							return (
								<div className="flex" key={video.id}>
									<Link href={`/tmtube/${video.slug}`} className="flex gap-4">
										<div className="basis-[140px] shrink-0">
											<Image className=" aspect-video" src={image?.guid?.rendered ? image?.guid?.rendered : ''} alt="" width={150} height={150} />
										</div>
										<div className="">
											<span className="text-base [word-spacing:-4px] tracking-tight [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] [text-overflow-ellipsis] overflow-hidden">{video.title.rendered}</span>
											<div className="mt-2 flex items-center text-sm opacity-60 gap-2">
												<span>{author?.name}</span>
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
				</div>


			</div>
		</div >
	)
}

export default VideoPage