import { Body3, Card } from 'pixieui/components'
import type { OrgVerificationProps } from './OrgVerification.props'
import styles from './OrgVerification.module.scss'
import Image from 'next/image'

export const OrgVerification = (props: OrgVerificationProps) => {
	return (
		<div className={styles.wrapper}>
			<Card appearance="pixel" className={styles.card}>
				<div className={styles.imageBlock}>
					<Image className={styles.image} width={500} height={500} alt="Щит с галочкой" src="/white-shield.png" />
				</div>
				<div className={styles.text}>
					<h2 className={styles.title}>Зарегистрированная организация</h2>
					<Body3 className={styles.body}>
						Организация <span dangerouslySetInnerHTML={{ __html: props.orgName }} /> официально зарегистрирована в ТМС под регистрационным номером #{props.documentNumber}. Такие организации имеют обязанность платить налоги и подвергаются проверкам, поэтому намного лучше выполняют свою работу
					</Body3>
				</div>
			</Card>
		</div>
	)
}