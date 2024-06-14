import { Relationship } from '@/entities/Relationship'
import { wordpress } from '@/services/wordpress'
import { cookies } from 'next/headers'

const RelationshipApp = async () => {
	const me = await wordpress.getMe(cookies().get('saved-session-token')?.value ? cookies().get('saved-session-token')?.value! : '')
	const [passport] = await wordpress.getUserByName(me.name)

	return (
		<div className="relationship w-full mt-4">
			<Relationship relationship={passport.acf.relationship} />
		</div>
	)
}

export default RelationshipApp