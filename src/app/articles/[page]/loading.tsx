'use client'

import { Container } from '@/components/Container'
import { Skeleton } from 'pixieui/components'
import styles from './page.module.scss'

const Page = () => {
	return (
		<Container className={styles.grid}>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
			<div className={styles.card}>
				<Skeleton className={styles.skeleton}></Skeleton>
				<Skeleton className={styles.title} />
				<div className={styles.content}>
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
					<Skeleton className={styles.text} />
				</div>
			</div>
		</Container>
	)
}

export default Page