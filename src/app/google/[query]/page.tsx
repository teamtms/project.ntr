import { Container } from '@/components/Container'
import { Body3, Card, Input, Title1, Title2, Title3 } from 'pixieui/components'
import styles from './page.module.scss'
import { redirect } from 'next/navigation'
import { wordpress } from '@/services/wordpress'
import { Post } from '@/components/Post/Post.component'
import { Addon } from '@/components/Addon'
import Link from 'next/link'

const search = async (formData: FormData) => {
	'use server'
	redirect(`/google/${encodeURI(formData.get('query')! as string)}`)
}

const Page = async ({ params }: { params: { query: string } }) => {
	const query = decodeURI(params.query)
	const posts = await wordpress.searchPosts(query)
	// const orgs = await wordpress.searchOrgs(query)
	const addons = await wordpress.searchAddons(query)
	const shops = await wordpress.searchShops(query)

	return (
		<Container className={styles.container}>
			<form action={search} className={styles.input}>
				<Input placeholder="Найдется все!" name="query" defaultValue={query}></Input>
			</form>

			{posts.length > 0 &&
				<Title2 className={styles.title}>Посты</Title2>}
			<div className={styles.posts}>
				{posts.map(post => <Post key={post.id} {...post} />)}
			</div>

			{/* {orgs.length > 0 && <>
				<Title2 className={styles.title}>Организации (beta)</Title2>
				{orgs.map(org =>
					<Card appearance="solid" key={org.id} className={styles.org}>
						<Title3 dangerouslySetInnerHTML={{ __html: org.title.rendered }}></Title3>
					</Card>
				)}
			</>
			} */}

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