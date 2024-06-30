'use client'

import { useState } from 'react'
import type { SubmenuProps } from './Submenu.props'
import styles from './Submenu.module.scss'
import Link from 'next/link'
import clsx from 'clsx'

export const Submenu = (props: SubmenuProps) => {
	const [isOpened, setIsOpened] = useState(false)

	return (
		<button
			onClick={() => {
				console.log('click')
				isOpened ? setIsOpened(false) : setIsOpened(true)
			}}
			className={clsx(styles.button, isOpened && styles.highlight)}>
			{props.children}

			<div className={clsx(styles.submenu_card, isOpened && styles.opened)}>
				<ul className={styles.submenu}>
					{props.submenu.map((item) => <li className={styles.subitem} key={item.ID}>
						{item.url.includes('[tms]') ? <Link href={item.url.split('[tms]')[1]}>{item.title}</Link> : <a href={item.url}>{item.title}</a>}
					</li>)}
				</ul>
			</div>
		</button>
	)
}