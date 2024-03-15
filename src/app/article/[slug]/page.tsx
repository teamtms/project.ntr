import { Container } from '@/components/Container'
import Eval from '@/components/Eval'
import { wordpress } from '@/services/wordpress'
import { Breadcrumbs, BreadcrumbsItem, Card } from 'pixieui/components'

import styles from './page.module.scss'
import { WpUsername } from '@/components/Wp/WpUsername/WpUsername.component'
import { WpCategory } from '@/components/Wp/WpCategory/WpCategory.component'
import { WpImage } from '@/components/Wp/WpImage'
import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
	const [post] = await wordpress.getPostBySlug(params.slug)

	return {
		title: `${post.title.rendered} - ТМС`,
		description: post.excerpt.rendered,
		openGraph: {
			url: `https://thetms.ru/article/${params.slug}`
		}
	}
}

const doCode = async (formData: FormData) => {
	'use server'

	if (formData.get('message')?.toString().toLowerCase() === 'code yellow') {
		redirect(`https://www.fb24m.ru/tms/wp-admin/post.php?post=${formData.get('id')}&action=edit`)
	}
}

const Article = async ({ params }: { params: { slug: string } }) => {
	const [article] = await wordpress.getPostBySlug(params.slug)

	return (
		<Container>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem><Link href="/articles">Статьи</Link></BreadcrumbsItem>
					<BreadcrumbsItem><span dangerouslySetInnerHTML={{ __html: article.title.rendered }}></span></BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<WpImage className={styles.image} imageId={article.featured_media}></WpImage>
			<form action={doCode}>
				<input type="text" name="id" style={{ display: 'none' }} defaultValue={article.id} />
				<input type="text" name="message" className={styles.codeInput} />
				<input type="submit" style={{ display: 'none' }} />
			</form>
			<Card>
				<h1 className={styles.title} dangerouslySetInnerHTML={{ __html: article.title.rendered }}></h1>
				<ul className={styles.labels}>
					<li className={styles.label}>{article.acf.tags}</li>
					<li className={styles.label}><WpUsername userId={article.author}></WpUsername></li>
					<li className={styles.label}>{new Date(article.date).getDate()} {months[new Date(article.date).getMonth()]} {new Date(article.date).getFullYear()}</li>
					<li className={styles.label}><WpCategory categoryId={article.categories[0]} /></li>
				</ul>
				<Eval className={styles.content} dangerouslySetInnerHTML={{ __html: article.content.rendered }}></Eval>
			</Card>
		</Container>
	)
}

export default Article