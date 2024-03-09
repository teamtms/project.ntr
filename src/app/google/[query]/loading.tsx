'use client'

import { Container } from '@/components/Container'
import { CubeLoader } from 'pixieui/components'

const SearchLoading = () => {
	return (
		<Container>
			<CubeLoader variation="jumping"></CubeLoader>
		</Container>
	)
}

export default SearchLoading
