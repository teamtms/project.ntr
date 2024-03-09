import { Container } from '@/components/Container'
import styles from './page.module.scss'
import { Button, Input } from 'pixieui/components'
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'

const search = async (formData: FormData) => {
	'use server'

	redirect(`/documents/${formData.get('request')}`)
}

const Documents = ({ children }: { children: ReactNode }) => {
	return (
		<Container>
			<h1 className={styles.title}>Документы ТМС</h1>
			<form className={styles.search} action={search}>
				<Input type="text" name="request" className={styles.input} /> <Button icon="search">Найти</Button>
			</form>
			{children}
		</Container>
	)
}

export default Documents