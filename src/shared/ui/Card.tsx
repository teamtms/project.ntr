import clsx from 'clsx'
import type { HTMLAttributes } from 'react'

export const Card = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
	<div className={clsx('bg-[#c9c9c9] p-4 border-[#373737] border-2 border-t-white border-l-white', className)} {...props}></div>
)
