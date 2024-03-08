import { wordpress } from "@/services/wordpress"
import { Card } from "pixieui/components"
import styles from './page.module.scss'
import Link from "next/link"
import { ReactNode } from "react"

const Page = async ({ params, children }: { params: { request: string }, children: ReactNode }) => {
	const documents = await wordpress.searchDocuments(params.request)

	return (
		<>
			{children}
			<div className={styles.list}>
				{documents.map((document) => <Link title={document.title.rendered} className={styles.link} key={document.id} href={`/documents/${params.request}/${document.slug}`}>
					<Card className={styles.card}>
						<span dangerouslySetInnerHTML={{ __html: document.title.rendered }}></span>
					</Card>
				</Link>
				)}
			</div>
		</>
	)
}

export default Page