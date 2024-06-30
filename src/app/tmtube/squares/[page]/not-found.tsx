'use client'

import { redirect } from 'next/navigation'

const NotFound = () => {
	redirect('/tmtube/squares/1')

	return (<></>)
}

export default NotFound