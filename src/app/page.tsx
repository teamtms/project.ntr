import { Starring } from '@/components/Starring/Starring'
import { wordpress } from '@/services/wordpress'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const StarringPage = async () => {

	if (cookies().has('saved-session-token')) {
		const me = await wordpress.getMe(cookies().get('saved-session-token')?.value!)

		if (me.id) {
			redirect('/home')
		}
	}

	return (
		<Starring />
	)
}

export default StarringPage