import { Container } from '@/components/Container'
import { Input, Title1 } from 'pixieui/components'
import styles from './page.module.scss'
import { redirect } from 'next/navigation'

const search = async (formData: FormData) => {
	'use server'
	redirect(`/google/${encodeURI(formData.get('query')! as string)}`)
}

const Page = () => {
	return (
		<Container className={styles.container}>
			<Title1>ТМС Гугл</Title1>
			<form action={search} className={styles.input}>
				<Input placeholder="Найдется все!" name="query"></Input>
			</form>
		</Container>
	)
}

export default Page