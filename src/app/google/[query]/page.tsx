import { Container } from '@/components/Container'
import { Body3, Card, Input, Title1, Title2, Title3, Title4 } from 'pixieui/components'
import styles from './page.module.scss'
import { redirect } from 'next/navigation'
import { wordpress } from '@/services/wordpress'
import { Post } from '@/components/Post/Post.component'
import { Addon } from '@/components/Addon'
import Link from 'next/link'
import { VideoCard } from '@/entities/VideoCard'

const search = async (formData: FormData) => {
	'use server'
	redirect(`/google/${encodeURI(formData.get('query')! as string)}`)
}

const Page = async ({ params }: { params: { query: string } }) => {
	const query = decodeURI(params.query)
	const posts = await wordpress.searchPosts(query)
	const orgs = await wordpress.searchOrgs(query)
	const addons = await wordpress.searchAddons(query)
	const shops = await wordpress.searchShops(query)
	const videos = await wordpress.searchVideos(query)
	const documents = await wordpress.searchDocuments(query)

	return (
		<Container className={styles.container}>
			<form action={search} className={styles.input}>
				<Input placeholder="Найдется все!" name="query" defaultValue={query}></Input>
			</form>

			{videos.length > 0 &&
				<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
					{videos.map((video: any) => <VideoCard {...video} appearance="vertical" key={video.id} />)}
				</div>
			}

			{posts.length > 0 &&
				<Title2 className={styles.title}>Посты</Title2>}
			<div className={styles.posts}>
				{posts.map(post => <Post key={post.id} {...post} />)}
			</div>

			{documents.length > 0 && <div>
				<Title2 className="mt-16">Документы</Title2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 gap-y-10">
					{documents.map((document) =>
						<Link href={`/document/${document.slug}`} key={document.id}>
							<Card className="text-lg">{document.title.rendered}</Card>
						</Link>
					)}
				</div>
			</div>}

			{orgs.length > 0 && <>
				<Title2 className={styles.title}>Организации</Title2>
				{orgs.map(org =>
					<Link key={org.id} href={`/orgs/${org.slug}`}>
						<Card appearance="solid" key={org.id} className={styles.org}>
							<Title4 dangerouslySetInnerHTML={{ __html: org.title.rendered }}></Title4>
						</Card>
					</Link>
				)}
			</>
			}

			{addons.length > 0 && <Title2 className={styles.title}>Аддоны</Title2>}
			{addons.length > 0 && addons.map(addon => <Addon key={addon.id} addon={addon} />)}

			{shops.length > 0 && <Title2 className={styles.title}>Магазины</Title2>}
			{shops.map(shop =>
				<Link key={shop.id} href={`/shops/${shop.slug}`}>
					<Card appearance="solid">
						<Body3 dangerouslySetInnerHTML={{ __html: shop.title.rendered }} />
					</Card>
				</Link>
			)}
		</Container>
	)
}

export default Page