import { Container } from '@/components/Container'
import { Relationship } from '@/entities/Relationship'
import { wordpress } from '@/services/wordpress'
import { Card } from '@/shared/ui/Card'
import clsx from 'clsx'
import { cookies } from 'next/headers'
import Link from 'next/link'

const createMessage = async (formData: FormData) => {
	'use server'

	const receiver = formData.get('receiver')!
	const title = formData.get('title')!
	const message = formData.get('message')!

	const token = cookies().get('saved-session-token')?.value!

	const [receiverUser] = await wordpress.getUserByName(receiver.toString())

	if (!receiverUser.id) {
		return {
			message: 'user not exists'
		}
	}

	const response = await fetch(`https://www.fb24m.ru/tms/wp-json/wp/v2/messages?title=${title}&content=${message}&status=publish&menu_order=${receiverUser.id}`, {
		method: 'post',
		headers: {
			Authorization: `Basic ${token}`
		}
	})

	const json = await response.json()

	console.log(json)
}

const AccountPage = async () => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	const [passport] = await wordpress.getUserByName(me.name)
	const messages = await wordpress.getMessagesByUserId(passport.id)

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
					<div className="messages w-full mt-4">
						{/* {passport.acf.messages && passport.acf.messages.map((message) =>
							<Link href={`/message/${message.post_name}`} className="block p-3 border-[#fff] border-2 border-b-[#373737] border-r-[#373737] bg-[#8b8b8b] relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-30" key={message.ID}>{message.post_title}</Link>
						)} */}

						{messages && messages.map((message: any) => <Link href={`/message/${message.slug}`} className="block p-3 border-[#fff] border-2 border-b-[#373737] border-r-[#373737] bg-[#8b8b8b] relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-30" key={message.id}>{message.title.rendered}</Link>)}
					</div>
					<details className="mt-4 p-4 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff]">
						<summary>Отправить сообщение</summary>
						<form action={createMessage}>
							<input required type="text" name="receiver" placeholder="Кому" className={clsx(
								"bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff] mt-4",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)} />
							<input required type="text" name="title" placeholder="Тема" className={clsx(
								"bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff]",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)} />

							<textarea required name="message" rows={5} className={clsx(
								" bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff]",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)}></textarea>

							<button type="submit" className={clsx(
								"p-3 w-full border-2 border-[#fff] border-r-[#373737] border-b-[#373737]",
								"active:border-[#373737] active:border-r-[#fff] active:border-b-[#fff]",
							)}>Отправить</button>
						</form>
					</details>
				</div>
			</Card>
		</Container>
	)
}

export default AccountPage