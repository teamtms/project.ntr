import { WpUsername } from '@/entities/WpUser'
import { wordpress } from '@/services/wordpress'
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

const RelationshipApp = async () => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	const [passport] = await wordpress.getUserByName(me.name)
	const messages = await wordpress.getMessagesByUserId(passport.id)

	let orderedMessages: Record<string, any> = {}

	messages.forEach((message: any) => {
		if (!orderedMessages[+message.author]) {
			orderedMessages[+message.author] = []
		}
		orderedMessages[+message.author].push(message)
	})

	console.log(orderedMessages)

	return (

		<>

			<>
				<div className="messages w-full mt-4">
					{Object.keys(orderedMessages).map((key) => <details className="group" key={key}>
						<summary className="cursor-pointer p-3 px-4 select-none bg-[#8b8b8b] border-2 border-[#fff] border-r-[#373737] border-b-[#373737] group-open:border-[#373737] group-open:border-r-[#fff] group-open:border-b-[#fff]"><WpUsername id={+key} /></summary>
						<div className="ml-12 -mb-6">
							{orderedMessages && orderedMessages[key]?.map((message: any) => <Link href={`/message/${message.slug}`} className="block p-3 border-[#fff] border-2 border-b-[#373737] border-r-[#373737] bg-[#8b8b8b] relative hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-30" key={message.id}>{message.title.rendered}</Link>)}
							<br />
						</div>
					</details>)}
				</div>
				<details className="group mt-12">
					<summary className="cursor-pointer p-3 px-4 select-none bg-[#8b8b8b] border-2 border-[#fff] border-r-[#373737] border-b-[#373737] group-open:border-[#373737] group-open:border-r-[#fff] group-open:border-b-[#fff]">Отправить сообщение</summary>

					{passport.title.rendered !== '_player81_' ?
						<form className="-mt-4 ml-12" action={createMessage}>
							<input required type="text" name="receiver" placeholder="Кому" className={clsx(
								"placeholder:select-none bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff] mt-4",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)} />
							<input required type="text" name="title" placeholder="Тема" className={clsx(
								"placeholder:select-none bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff]",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)} />

							<textarea required name="message" rows={5} className={clsx(
								"placeholder:select-none  bg-[#8b8b8b] p-3 w-full outline-none border-2 border-[#373737] border-r-[#fff] border-b-[#fff]",
								"focus:border-[#fff] focus:border-r-[#373737] focus:border-b-[#373737]"
							)}></textarea>

							<button type="submit" className={clsx(
								"bg-[#8b8b8b] p-3 w-full border-2 border-[#fff] border-r-[#373737] border-b-[#373737]",
								"active:border-[#373737] active:border-r-[#fff] active:border-b-[#fff]",
							)}>Отправить</button>
						</form>
						: <>This feature is temporarly disabled</>}
				</details>
			</>
		</>
	)
}

export default RelationshipApp