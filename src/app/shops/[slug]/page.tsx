import { wordpress } from '@/services/wordpress'
import styles from './page.module.scss'
import { Container } from '@/components/Container'
import { Good } from '@/components/Good'
import { WpImage } from '@/components/Wp/WpImage'
import { OrgVerification } from '@/components/OrgVerification'
import { Metadata } from 'next'
import { Breadcrumbs, BreadcrumbsItem, Button, Title1, Title2 } from 'pixieui/components'
import Link from 'next/link'

export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
	const [shop] = await wordpress.getShopBySlug(params.slug)

	return {
		title: `Магазин ${shop.title.rendered} на ТМС`,
		description: shop.excerpt.rendered,
		openGraph: {
			url: `https://thetms.ru/shops/${params.slug}`
		}
	}
}

const Shop = async ({ params }: { params: { slug: string } }) => {
	const [shop] = await wordpress.getShopBySlug(params.slug)

	return (
		<Container className={styles.container}>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem dangerouslySetInnerHTML={{ __html: shop.title.rendered }}></BreadcrumbsItem>
				</Breadcrumbs>
			</div>

			<div className={styles.welcome}>
				<div className={styles.content}>
					<Title1 className={styles.mainTitle} dangerouslySetInnerHTML={{ __html: shop.title.rendered }}></Title1>
					<div className={styles.description} dangerouslySetInnerHTML={{ __html: shop.content.rendered }}></div>
				</div>

				<div className={styles.image}>
					<WpImage imageId={shop.featured_media}></WpImage>
				</div>
			</div>

			<div className={styles.goodsHeader}>
				<Title2>Новинки</Title2>
				<Link href={`/shops/${params.slug}/goods`}><Button>Все товары</Button></Link>
			</div>
			<div className={styles.goods}>
				{shop.acf.goods.slice(0, 4).map((good) => <Good good={good} key={good.name} />)}
			</div>

			<OrgVerification orgName={shop.title.rendered} documentNumber={shop.acf.organization} />
		</Container>
	)
}

export default Shop