import { wordpress } from '@/services/wordpress'
import Image from 'next/image'
import { Body1, Title3 } from 'pixieui/components'
import styles from './Building.module.scss'

export const Building = async ({ orgId }: { orgId: number }) => {
	const { title, excerpt, acf } = await wordpress.getOrgById(orgId)
	const { guid } = await wordpress.getMediaById(acf.photo)

	return (
		<div className={styles.building}>
			<div>
				<Title3 className={styles.title3} dangerouslySetInnerHTML={{ __html: title.rendered }}></Title3>
				<Body1>Добро пожаловать в бюджетную больницу Minecraft. Это медицинское учреждение обеспечивает
					игрокам и жителям города доступ к медицинским услугам по бесплатной цене. В нашей больнице одно отделение: палаты.</Body1>
			</div>
			<Image className="square" width={420} height={420}
				src={guid.rendered} alt="" />
		</div >
	)
}