import { Container } from '@/components/Container'
import { github } from '@/services/github'
import { Metadata } from 'next'
import styles from './page.module.scss'
import { Button, Card } from 'pixieui/components'
import Link from 'next/link'

const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

export const metadata: Metadata = {
	title: 'Моды - ТМС'
}

const Mods = async () => {
	const mods = await github.getModpackReleases()

	return (
		<Container>
			<Card appearance="solid">
				<h1 className={styles.title}>{mods.name}</h1>
				<ul className={styles.info}>
					<li className={styles.label}>{mods.tag_name}</li>
					<li className={styles.label}>{new Date(mods.published_at).getDate()} {months[new Date(mods.published_at).getMonth()]} {new Date(mods.published_at).getFullYear()}</li>
				</ul>
				<p className={styles.description}>{mods.body}</p>

				<div className={styles.buttons}>
					<Link href={mods.zipball_url}><Button id={styles.modpack_download} className={styles.button}>Скачать</Button></Link>
				</div>
			</Card>
		</Container>
	)
}

export default Mods