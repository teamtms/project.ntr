import { Container } from '@/components/Container'
import { WpImage } from '@/components/Wp/WpImage'
import { wordpress } from '@/services/wordpress'
import { Body2, Breadcrumbs, BreadcrumbsItem, Button, Card, Title3 } from 'pixieui/components'
import styles from '../page.module.scss'
import { WpUsername } from '@/components/Wp/WpUsername/WpUsername.component'
import Link from 'next/link'
import Eval from '@/components/Eval'

const Addon = async ({ params }: { params: { slug: string } }) => {
	const [{ title, featured_media, content, acf, author, excerpt, date }] = await wordpress.getAddonBySlug(params.slug)
	const { caption, guid } = await wordpress.getMediaById(acf.file)

	return (
		<Container>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem><Link href="/addons">Аддоны</Link></BreadcrumbsItem>
					<BreadcrumbsItem>{title.rendered}</BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<div className={styles.addons}>
				<Card className={styles.card} appearance="solid">
					<div className={styles.preview}>
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
							<Eval className={styles.body} dangerouslySetInnerHTML={{ __html: excerpt.rendered }} />
						</div>
					</div>
					<Eval className={styles.body} dangerouslySetInnerHTML={{ __html: content.rendered }} />
				</Card>

				<Card appearance="solid" className="flex items-center gap-12 justify-between sm:justify-start">
					<Body2 dangerouslySetInnerHTML={{ __html: caption.rendered.replace('<p>', '').replace('</p>', '') }}></Body2>
					<Link className={styles.link} href={guid.rendered}>
						<Button className={styles.button}>Скачать</Button>
					</Link>
				</Card>
			</div>
		</Container>
	)
}

export default Addon