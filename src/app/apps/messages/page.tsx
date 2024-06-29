import { WpUsername } from '@/entities/WpUser'
import { wordpress } from '@/services/wordpress'
import { prisma } from '@/shared/api/prisma'
import clsx from 'clsx'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import Link from 'next/link'
import { Button, Input } from 'pixieui/components'

const createChat = async (formData: FormData) => {
	'use server'

	const username = formData.get('username')! as string

	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')

	if (me.name !== username && !prisma.chat.findMany({
		where: {
			OR: [
				{ user1: username, user2: me.name },
				{ user1: me.name, user2: username }
			]
		}
	})) {
		await prisma.chat.create({ data: { user1: me.name, user2: username } })

		revalidatePath('./')
	}

	else {
		console.log('you\'re stupid.')
	}
}

const RelationshipApp = async () => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	const [passport] = await wordpress.getUserByName(me.name)

	const chatList = await prisma.chat.findMany({
		where: {
			OR: [
				{ user1: passport.title.rendered },
				{ user2: passport.title.rendered }
			]
		}
	})

	return (
		<>
			<form className="flex" action={createChat}>
				<Input required name="username" placeholder="Имя пользователя" />
				<Button>Добавить</Button>
			</form>
			<div className="flex flex-col gap-2 mt-4">
				{chatList.map((chat) =>
					<Link href={`/apps/messages/${chat.id}`} key={chat.id}>
						<Button>Чат {chat.user1} и {chat.user2}</Button>
					</Link>
				)}
			</div>
		</>
	)
}

export default RelationshipApp