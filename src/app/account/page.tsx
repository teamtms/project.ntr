import { Container } from '@/components/Container'
import { Relationship } from '@/entities/Relationship'
import { wordpress } from '@/services/wordpress'
import { Card } from '@/shared/ui/Card'
import { cookies } from 'next/headers'

const handleLogin = async () => {
	'use server'


}

const AccountPage = async () => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	const [passport] = await wordpress.getUserByName(me.name)

	// console.log(passport.acf)

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
				</div>
				<div className="profile w-full">
					<span className="block text-xl">
						{me.name}
					</span>
					<div className="relationship w-full mt-4">
						<Relationship relationship={passport.acf.relationship} />
					</div>
				</div>
			</Card>
		</Container>
	)
}

export default AccountPage