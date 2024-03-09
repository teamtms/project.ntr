import { Container } from '@/components/Container'
import { WpImage } from '@/components/Wp/WpImage'
import { wordpress } from '@/services/wordpress'
import { Body1, Breadcrumbs, BreadcrumbsItem, Card, Title2, Title3 } from 'pixieui/components'
import styles from './page.module.scss'
import { WpUsername } from '@/components/Wp/WpUsername/WpUsername.component'
import Link from 'next/link'

const Addons = async () => {
	const addons = await wordpress.getAddons()

	return (
		<Container>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem>Аддоны</BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<div className={styles.addons}>
				{addons.map(({ title, featured_media, excerpt, acf, author, slug, id, date }) => <Link key={id} href={`/addons/${slug}`}>
					<Card className={styles.card} appearance="solid">
						<div className={styles.imageBlock}>
							<WpImage className="square" imageId={featured_media} />
						</div>
						<div className={styles.content}>
							<Title3 className={styles.title} dangerouslySetInnerHTML={{ __html: title.rendered }} />
							<ul className={styles.list}>
								<li><WpUsername userId={author} /></li>
								<li>{acf.versions}</li>
								<li>{new Date(date).getDate()}.{new Date(date).getMonth() + 1}.{new Date(date).getFullYear()}</li>
							</ul>
							<Body1 className={styles.body} dangerouslySetInnerHTML={{ __html: excerpt.rendered.replace('<p>', '').replace('</p>', '') }} />
						</div>
					</Card>
				</Link>)}
			</div>
		</Container>
	)
}

export default Addons