import type { WpCategoryProps } from './WpCategory.props'
import { CubeLoader, Skeleton } from 'pixieui/components'

import { wordpress } from '@/services/wordpress'

export const WpCategory = async ({ categoryId, ...props }: WpCategoryProps) => {
	// const { isLoading, isSuccess, data } = useQuery({
	// 	queryKey: ['category', categoryId],
	// 	queryFn: () => wordpress.getCategoryById(categoryId)
	// })
	const data = await wordpress.getCategoryById(categoryId)

	return (
		<span {...props} className="block">
			{data ?
				data.name
				: 'HELLO'}
		</span>
	)
}
