import { wordpress } from '@/services/wordpress'
import Image from 'next/image'
import { Card } from 'pixieui/components'

export const PassportCard = async ({ userId }: { userId: number }) => {
	const user = await wordpress.getUserById(userId)
	const avatar = await wordpress.getMediaById(user.acf.avatar)

	return (
		<Card appearance="outline" className="flex gap-6">
			<Image className="aspect-square object-cover w-20 h-20 rounded-full" src={avatar.guid.rendered} alt={avatar.alt_text} width={240} height={240} />
			<div className="flex flex-col gap-4 mt-2">
				<span className="text-2xl">{user.title.rendered}</span>
				{user.acf.description &&
					<span className="block">{user.acf.description}</span>
				}
				<div className="flex gap-4">
					<div className="flex gap-2 items-center">
						<Image className="w-6 h-6" src="/icons/shield.png" alt="Щит" width={24} height={24} />
						{user.acf.fraction}
					</div>
					<div className="flex gap-2 items-center">
						<Image className="w-6 h-6" src="/icons/case.png" alt="Чемодан" width={24} height={24} />
						{user.acf.role}
					</div>
					<div className="flex gap-2 items-center">
						<Image className="w-6 h-6" src="/icons/building.png" alt="Здание" width={24} height={24} />
						{user.acf.owner_of.length} организаций
					</div>
				</div>
			</div>
		</Card>
	)
}