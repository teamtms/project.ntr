import { Container } from '@/components/Container'
import { wordpress } from '@/services/wordpress'
import { Breadcrumbs, BreadcrumbsItem } from 'pixieui/components'
import styles from './page.module.scss'
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
				{addons && addons.map((addon) => <Addon key={addon.id} addon={addon} />)}
			</div>
		</Container>
	)
}

export default Addons