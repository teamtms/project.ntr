import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AppsPage = () => {
	if (!cookies().has('saved-session-token')) {
		redirect('/account/login')
	}

	return (
		<></>
	)
}

export default AppsPage