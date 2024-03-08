import { wordpress } from "@/services/wordpress"
import { Card } from "pixieui/components"
import styles from './page.module.scss'
import Link from "next/link"
import Eval from "@/components/Eval"

const Page = async ({ params }: { params: { request: string, slug: string } }) => {
	const data = await wordpress.getDocumentBySlug(params.slug)

	return (
		<>
			{!data?.[0]?.id
				? <Card className={styles.card} id={styles.document}>
					<h1 className={styles.title}>Документ не найден</h1>
					<Eval className={styles.content}>
						Попробуйте найти документ по запросу
					</Eval>
				</Card>
				: <Card className={styles.card} id={styles.document}>
					<h1 className={styles.title} dangerouslySetInnerHTML={{ __html: data[0].title.rendered }}></h1>
					<Eval className={styles.content} dangerouslySetInnerHTML={{ __html: data[0].content.rendered }}></Eval>
				</Card>}


			<h2 className={styles.other}>Другие документы по запросу <span>{params.request}</span></h2>
		</>
	)
}

export default Page