
import { HTMLAttributes } from 'react'
import { exists } from '@/functions/exists'

export const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div
		className={`${exists(className)} max-w-ctn mx-auto px-4`}
		{...props}
	></div>
)