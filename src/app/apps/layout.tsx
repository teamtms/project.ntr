import { Container } from '@/components/Container'
import { wordpress } from '@/services/wordpress'
import { Card } from '@/shared/ui/Card'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import { ReactNode } from 'react'

const AccountPage = async ({ children }: { children: ReactNode }) => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	return (
		<Container className="flex items-center justify-center h-[80vh]">
			<Card className="w-full h-full flex gap-6">
				<div className="slots flex flex-col">
					<div className="h-14 w-14 relative flex items-center justify-center p-1 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-50">
						<img src={`https://mc-heads.net/head/${me.name}`} className="w-10 h-10" />
					</div>
					<div className="h-14 w-14 relative flex items-center justify-center p-1 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-50 break-all text-center">
						{me.id}
					</div>
					{[
						{ icon: '/icons8-паспорт-96.png', link: `/apps/passport/${me.name}` },
						{ icon: '/icons8-отношения-96.png', link: `/apps/relationship` },
						{ icon: '/icons8-прочитать-сообщение-100.png', link: `/apps/messages` },
					].map((item) =>
						<Link key={JSON.stringify(item)} href={item.link} className="h-14 w-14 relative flex items-center justify-center p-1 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-50 break-all text-center">
							<Image src={item.icon} alt={item.icon} width={64} height={64} />
						</Link>
					)}
				</div>
				<div className="profile w-full overflow-y-auto -m-4 p-4">
					<span className="block text-xl">
						{me.name}
					</span>

					{children}
				</div>
			</Card>
		</Container>
	)
}

export default AccountPage