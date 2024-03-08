import { wordpress } from '@/services/wordpress'
import styles from './page.module.scss'
import { Container } from '@/components/Container'
import { Good } from '@/components/Good'
import { WpImage } from '@/components/Wp/WpImage'
import { OrgVerification } from '@/components/OrgVerification'
import { Metadata } from 'next'

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
			<div className={styles.welcome}>
				<div className={styles.content}>
					<h1 className={styles.mainTitle} dangerouslySetInnerHTML={{ __html: shop.title.rendered }}></h1>
					<div className={styles.description} dangerouslySetInnerHTML={{ __html: shop.content.rendered }}></div>
				</div>
				<div className={styles.image}>
					<WpImage imageId={shop.featured_media}></WpImage>
				</div>
			</div>

			<div className={styles.goods}>
				{shop.acf.goods.slice(0, 4).map((good) => <Good good={good} key={good.name} />)}
			</div>

			<OrgVerification orgName="Microsoft Store" documentNumber={800} />
		</Container>
	)
}

export default Shop