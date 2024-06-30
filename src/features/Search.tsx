'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'

export const Search = () => {
	const [opened, setOpened] = useState(false)

	return (
		<form className='flex flex-grow items-center bg-interactive'>
			<input size={0} type="text" placeholder="Поиск" className="block w-full max-w-full flex-grow bg-transparent p-3 px-4" />
			<button className="flex-shrink-0 p-2 hover:bg-accent">
				<Image src="/icons/loup.png" alt="Лупа" width={24} height={24} />
			</button>
		</form>
	)
}