import { wordpress } from '@/services/wordpress'
import styles from '../page.module.scss'
import { Container } from '@/components/Container'
import { Good } from '@/components/Good'
import { WpImage } from '@/components/Wp/WpImage'
import { OrgVerification } from '@/components/OrgVerification'
import { Metadata } from 'next'
import styled from 'styled-components'
import { Breadcrumbs, BreadcrumbsItem, Button, Spoiler, SpoilerBody, SpoilerTitle, Title1 } from 'pixieui/components'
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
					<BreadcrumbsItem><Link href={`/shops/${params.slug}`}>Microsoft Store</Link></BreadcrumbsItem>
					<BreadcrumbsItem>Все товары</BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<Title1 className={styles.goodsTitle} dangerouslySetInnerHTML={{ __html: shop.title.rendered }}></Title1>

			<div className={styles.goods}>
				{shop.acf.goods.map((good) => <Good good={good} key={good.name} />)}
			</div>

			<OrgVerification orgName={shop.title.rendered} documentNumber={shop.acf.organization} />
		</Container>
	)
}

export default Shop