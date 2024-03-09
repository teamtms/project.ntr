import { Container } from '@/components/Container'
import { Post } from '@/components/Post/Post.component'
import { wordpress } from '@/services/wordpress'
import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs, BreadcrumbsItem } from 'pixieui/components'

export const metadata: Metadata = {
	title: 'Новости - ТМС',
	description: 'Самые последние новости и статьи ТМС!',
	openGraph: {
		url: 'https://thetms.ru/articles'
	}
}

const Page = async ({ params }: { params: { page: number } }) => {
	const posts = await wordpress.getPosts(params.page, 15)

	return <Container>
		<div className="breadcrumbs">
			<Breadcrumbs>
				<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
				<BreadcrumbsItem>Статьи</BreadcrumbsItem>
			</Breadcrumbs>
		</div>
		<div className="grid grid-cols-3 gap-8">
			{posts.map((post) => <Post key={post.id} {...post} />)}
		</div>
	</Container>
}

export default Page