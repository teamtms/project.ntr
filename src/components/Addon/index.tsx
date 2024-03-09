import Link from 'next/link'
import { Body1, Card, Title3 } from 'pixieui/components'
import { WpImage } from '../Wp/WpImage'
import { WpUsername } from '../Wp/WpUsername/WpUsername.component'
import styles from './Addon.module.scss'
import { AddonProps } from './Addon.props'

export const Addon = ({ addon }: AddonProps) => {
	const { slug, featured_media, title, date, author, excerpt, acf } = addon

	return (
		<Link href={`/addons/${slug}`}>
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
		</Link>
	)
}