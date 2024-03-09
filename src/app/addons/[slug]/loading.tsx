'use client'

import { Container } from '@/components/Container'
import { Breadcrumbs, BreadcrumbsItem, Skeleton, } from 'pixieui/components'
import styles from '../loading.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

const AddonLoading = ({ params }: { params: { slug: string } }) => {

	return (
		<Container>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem><Link href="/addons">Аддоны</Link></BreadcrumbsItem>
					<BreadcrumbsItem><Skeleton className={clsx(styles.skeleton, styles.li)} /></BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<div className={styles.addons}>
				<div className={styles.card}>
					<div className={styles.imageBlock}>
						<Skeleton className={clsx(styles.skeleton, styles.image)} />
					</div>
					<div className={styles.content}>
						<Skeleton className={clsx(styles.skeleton, styles.title)} />
						<ul className={styles.list}>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)} /></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)} /></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)} /></li>
						</ul>
						<Skeleton className={clsx(styles.skeleton, styles.string1)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string2)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string3)}></Skeleton>
					</div>
				</div>
			</div>
		</Container>
	)
}

export default AddonLoading