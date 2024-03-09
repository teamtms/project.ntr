import { Container } from '@/components/Container'
import { WpImage } from '@/components/Wp/WpImage'
import { wordpress } from '@/services/wordpress'
import { Body1, Breadcrumbs, BreadcrumbsItem, Card, Title2, Title3 } from 'pixieui/components'
import styles from './page.module.scss'
import { WpUsername } from '@/components/Wp/WpUsername/WpUsername.component'
import Link from 'next/link'
import { Addon } from '@/components/Addon'

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
				{addons.map((addon) => <Addon key={addon.id} addon={addon} />)}
			</div>
		</Container>
	)
}

export default Addons