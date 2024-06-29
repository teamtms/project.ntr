import { wordpress } from '@/services/wordpress'
import { prisma } from '@/shared/api/prisma'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import { Button, Input } from 'pixieui/components'

const createMessage = async (formData: FormData) => {
	'use server'

	const chat = formData.get('chat-id')! as string
	const messageText = formData.get('message')! as string

	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')

	const message = await prisma.message.create({
		data: {
			authorName: me.name,
			chatId: +chat,
			text: messageText
		}
	})

	revalidatePath('./')
}

const ChatPage = async ({ params }: { params: { id: number } }) => {
	const chatParams = {
		where: { id: +params.id }
	}

	const chat = await prisma.chat.findUnique(chatParams)
	const messages = await prisma.message.findMany({
		where: {
			chatId: chat?.id
		},
		take: 50
	})

	return (
		<>
			{messages.map((message) => <div key={message.id}>
				{message.authorName}: {message.text}
			</div>)}
			<form className="flex" action={createMessage}>
				<input className="hidden" name="chat-id" readOnly value={chat?.id} required />
				<Input required className="flex-grow" name="message" placeholder="Сообщение" />
				<Button>Отправить</Button>
			</form>
		</>
	)
}

export default ChatPage