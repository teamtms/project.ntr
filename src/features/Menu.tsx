'use client'

import { IMenu } from '@/interfaces/Menu.interface'
import clsx from 'clsx'
import Link from 'next/link'
import { Button } from 'pixieui/components'
import { useEffect, useState } from 'react'

export interface MenuProps {
	mainMenu: IMenu
	headerMenu: IMenu
}

export const Menu = (props: MenuProps) => {
	const [opened, setOpened] = useState(false)

	useEffect(() => {
		document.documentElement.addEventListener('click', (e) => {
			if (!(e.target as HTMLElement).closest('.full-menu')) {
				setOpened(false)
			}
		})
	}, [])

	return (
		<div className="relative full-menu">
			<button onClick={() => { setOpened(!opened) }} className="flex flex-col gap-2">
				<span className="w-10 h-1 bg-white inline-block"></span>
				<span className="w-10 h-1 bg-white inline-block"></span>
				<span className="w-10 h-1 bg-white inline-block"></span>
			</button>
			<ul className={clsx('flex flex-col absolute right-0 top-full py-2 bg-interactive mt-7 transition-opacity duration-200', !opened && 'opacity-0')}>
				<div className="md:hidden">
					{props.headerMenu.items.map((item) =>
						<li key={item.ID}>
							{item.url && <Link className="block p-4 py-2 hover:bg-accent" href={item.url.split('[tms]')[1] ? item.url.split('[tms]')[1] : item.url}>{item.title}</Link>}
						</li>
					)}
				</div>
				{props.mainMenu.items.map((item) =>
					<li key={item.ID}>
						{item.url && <Link className="block p-4 py-2 hover:bg-accent" href={item.url.split('[tms]')[1] ? item.url.split('[tms]')[1] : item.url}>{item.title}</Link>}
					</li>
				)}
			</ul>
		</div >
	)
}