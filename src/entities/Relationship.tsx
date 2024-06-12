'use client'

import clsx from 'clsx'
import { useState } from 'react'

const getBarColor = (relationship: number) => {
	if (relationship >= 20 && relationship < 40) {
		return 'bg-red-600'
	}
	if (relationship >= 40 && relationship < 60) {
		return 'bg-yellow-400'
	}
	if (relationship >= 60 && relationship < 80) {
		return 'bg-yellow-500'
	}
	if (relationship >= 80 && relationship < 100) {
		return 'bg-green-500'
	}
	if (relationship === 100) {
		return 'bg-green-700'
	}
	else {
		return 'bg-red-900'
	}
}


const getRelationshipStatus = (relationship: number) => {
	if (relationship >= 20 && relationship < 40) {
		return 'Презрение'
	}
	if (relationship >= 40 && relationship < 60) {
		return 'Равнодушие'
	}
	if (relationship >= 60 && relationship < 80) {
		return 'Доверие'
	}
	if (relationship >= 80 && relationship < 100) {
		return 'Дружба'
	}
	if (relationship === 100) {
		return 'Дружба²'
	}
	else {
		return 'Ненависть'
	}
}

export const Relationship = (props: { relationship: any[] }) => {
	const [selectedUser, setSelectedUser] = useState(0)
	console.log(getBarColor(props.relationship[selectedUser].confidence))

	return (
		<div className="w-full">
			<div className="flex">
				{props.relationship.map((item, index) =>
					<div key={JSON.stringify(item)}>
						<div className={clsx(
							'flex items-center justify-center',
							`h-14 w-14 relative p-1 bg-[#8b8b8b] cursor-pointer`,
							'border-2',
							selectedUser !== index ? 'border-[#373737] border-b-white border-r-white' : 'border-b-[#373737] border-r-[#373737]',
							selectedUser !== index && 'hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c9c9c9] hover:before:opacity-50'
						)} onClick={() => { setSelectedUser(index) }}>
							<img src={`https://mc-heads.net/head/${item.name}`} className="w-10 h-10" />
							<div className="confidence" style={{ width: `${item.confidence} %` }}></div>
						</div>

					</div>
				)}
			</div>
			<div className="my-4">
				{props.relationship[selectedUser].name} - {props.relationship[selectedUser].confidence}% ({getRelationshipStatus(props.relationship[selectedUser].confidence)})
			</div>
			<div className="h-12 w-full bg-[#8b8b8b] border-[#373737] border-2 border-r-white border-b-white"></div>
			<div className={`h-10 ${getBarColor(props.relationship[selectedUser].confidence)} -mt-11 ml-1`} style={{ width: `${props.relationship[selectedUser].confidence}%` }}></div>
			<div className="flex justify-between -mt-11">
				<div className="h-12 w-1"></div>
				<div className="h-11 w-1 bg-[#373737]"></div>
				<div className="h-11 w-1 bg-[#373737]"></div>
				<div className="h-11 w-1 bg-[#373737]"></div>
				<div className="h-11 w-1 bg-[#373737]"></div>
				<div className="h-12 w-1"></div>
			</div>
			<div className="flex justify-between mt-2">
				<div className="">0</div>
				<div className="translate-x-4">20</div>
				<div className="translate-x-4">40</div>
				<div className="translate-x-4">60</div>
				<div className="translate-x-4">80</div>
				<div className="">100</div>
			</div>
		</div>
	)
}