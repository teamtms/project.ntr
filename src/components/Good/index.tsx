'use client'

import type { GoodProps } from './Good.props'
import styles from './Good.module.scss'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Body1, Button, Popup } from 'pixieui/components'
import { wordpress } from '@/services/wordpress'
import Image from 'next/image'
import Eval from '../Eval'
import { exists } from '@/functions/exists'

const useQuery = <T,>(queryFn: () => Promise<T>): T | null => {
	const [data, setData] = useState<T | null>(null)

	useEffect(() => {
		if (!data) {
			queryFn().then((data) => {
				setData(data)
			})
		}
	}, [data, queryFn])

	return data
}

export const Good = ({ good }: GoodProps) => {
	const [opened, setOpened] = useState(false)
	const image = useQuery(() => wordpress.getMediaById(good.image))


	return (
		<>
			<div className={clsx(styles.good, opened && styles.opened)} key={good.name}>
				<Image alt={image?.alt_text ? image?.alt_text : ''} src={image?.guid?.rendered ? image?.guid?.rendered : ''} width={200} height={200} className={styles.image} />

				<div className={styles.main}>
					<h3 className={styles.goodTitle}>{good.name}</h3>
					<span className={styles.price}>{good.price.toLocaleString('ru-RU')} р—т</span>

					<Popup className={styles.popup} title={good.name} openButton={<Button>Подробнее</Button>}>
						<div className={styles.popupgood}>
							<Image alt={exists(image?.alt_text)} src={image?.guid?.rendered ? image?.guid?.rendered : ''} width={200} height={200} className={styles.image} />
							<div className={styles.info}>
								<Body1 className={styles.goodTitle}>{good.name}</Body1>
								<span>{good.price.toLocaleString('ru-RU')} р—т</span>
							</div>
						</div>
						<Eval dangerouslySetInnerHTML={{ __html: good.description }}></Eval>
					</Popup>
				</div>
			</div>
		</>
	)
}