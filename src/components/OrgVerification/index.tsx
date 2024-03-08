import { Card } from 'pixieui/components'
import type { OrgVerificationProps } from './OrgVerification.props'
import styles from './OrgVerification.module.scss'

export const OrgVerification = (props: OrgVerificationProps) => {
	return (
		<div className={styles.wrapper}>
			<Card appearance="pixel" className={styles.card}>
				<h2 className={styles.title}>Зарегистрированная организация</h2>
				Организация {props.orgName} официально зарегистрирована в ТМС под регистрационным номером {props.documentNumber}. Такие организации имеют обязанность платить налоги и подвергаются проверкам, поэтому намного лучше выполняют свою работу
			</Card>
		</div>
	)
}