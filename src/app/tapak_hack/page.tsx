'use client'

import { Container } from '@/components/Container'
import { useState } from 'react'

const TapackHack = () => {
	const [lockData, setLockData] = useState([
		{
			postition: Math.floor(Math.random() * 100),
			opened: false
		},
		{
			postition: Math.floor(Math.random() * 100),
			opened: false
		},
		{
			postition: Math.floor(Math.random() * 100),
			opened: false
		},
		{
			postition: Math.floor(Math.random() * 100),
			opened: false
		},
		{
			postition: Math.floor(Math.random() * 100),
			opened: false
		},
	])

	const [openerPosition, setOpenerPosition] = useState(1)

	setTimeout(() => {
		setOpenerPosition(openerPosition + 1)

		if (openerPosition >= 100) {
			setOpenerPosition(1)
		}
	}, 50)

	return (
		<Container>
			<div className="rounded-xl w-full h-40 bg-slate-400 relative overflow-hidden">
				<div className="w-1 h-full bg-slate-500 absolute -translate-x-full" style={{ left: `${openerPosition}%` }}></div>
				{lockData.map((item) => <div key={JSON.stringify(item)} className={`w-2 h-full bg-slate-600 absolute`} style={{ left: `${item.postition}%` }}></div>)}
			</div>
		</Container>
	)
}

export default TapackHack