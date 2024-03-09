import { Container } from '@/components/Container'
import { WpImage } from '@/components/Wp/WpImage'
import { wordpress } from '@/services/wordpress'
import { Body1, Breadcrumbs, BreadcrumbsItem, Card, Skeleton, Title2, Title3 } from 'pixieui/components'
import styles from './loading.module.scss'
import { WpUsername } from '@/components/Wp/WpUsername/WpUsername.component'
import Link from 'next/link'
import clsx from 'clsx'

const Addons = async () => {
	return (
		<Container>
			<div className="breadcrumbs">
				<Breadcrumbs>
					<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
					<BreadcrumbsItem>Аддоны</BreadcrumbsItem>
				</Breadcrumbs>
			</div>
			<div className={styles.addons}>

				<div className={styles.card}>
					<div className={styles.imageBlock}>
						<Skeleton className={clsx(styles.skeleton, styles.image)}></Skeleton>
					</div>
					<div className={styles.content}>
						<Skeleton className={clsx(styles.skeleton, styles.title)}></Skeleton>
						<ul className={styles.list}>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
						</ul>
						<Skeleton className={clsx(styles.skeleton, styles.string1)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string2)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string3)}></Skeleton>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.imageBlock}>
						<Skeleton className={clsx(styles.skeleton, styles.image)}></Skeleton>
					</div>
					<div className={styles.content}>
						<Skeleton className={clsx(styles.skeleton, styles.title)}></Skeleton>
						<ul className={styles.list}>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
						</ul>
						<Skeleton className={clsx(styles.skeleton, styles.string1)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string2)}></Skeleton>
						<Skeleton className={clsx(styles.skeleton, styles.string3)}></Skeleton>
					</div>
				</div>

				<div className={styles.card}>
					<div className={styles.imageBlock}>
						<Skeleton className={clsx(styles.skeleton, styles.image)}></Skeleton>
					</div>
					<div className={styles.content}>
						<Skeleton className={clsx(styles.skeleton, styles.title)}></Skeleton>
						<ul className={styles.list}>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
							<li><Skeleton className={clsx(styles.skeleton, styles.li)}></Skeleton></li>
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

export default Addons