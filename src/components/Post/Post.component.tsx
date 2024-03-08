import styles from './Post.module.scss'
import { IPost } from '@/interfaces/Post.interface'
import { WpImage } from '@/components/Wp/WpImage'
import { WpCategory } from '@/components/Wp/WpCategory/WpCategory.component'
import Link from 'next/link'

export const Post = (props: IPost) => {
	return (
		<Link href={`/article/${props.slug}`} className="flex flex-col gap-4 h-full overflow-hidden">
			<div className={`${styles.imageBlock}`}>
				<WpImage className={styles.image} imageId={props.featured_media} />
			</div>
			<div className={styles.content}>
				<h3 className={styles.title} dangerouslySetInnerHTML={{ __html: props.title.rendered }}></h3>
				<ul className={`${styles.labels} mb-1]`}>
					<li className={styles.label}><WpCategory categoryId={props.categories[0]} /></li>
					<li className={styles.spacer}></li>
					<li className={styles.label}>{new Date(props.date).getDate()}.{new Date(props.date).getMonth() + 1}.{new Date(props.date).getFullYear()}</li>
				</ul>
				<div className={styles.excerpt} dangerouslySetInnerHTML={{ __html: props.excerpt.rendered }}></div>
			</div>
		</Link>
	)
}
