import Link from 'next/link'
import { Container } from '../Container'
import { wordpress } from '@/services/wordpress'

export const Header = async () => {
	const data = await wordpress.getMenuBySlug('main')

	return (
		<header>
			<Container className='flex items-center flex-wrap gap-y-4 gap-x-8 py-4'>
				<Link href="/" className="text-xl">
					TMS
				</Link>
				<div className="overflow-x-auto">
					{!data ? 'loading' : ''}
					{data
						? <ul className="flex flex-wrap">
							{data.items.map((item) =>
								<li key={item.ID} className="[font-weight:400] text-xs py-2 px-3 hover:bg-slate-100">
									{item.url.includes('[tms]')
										? <Link href={`${item.url.split('[tms]')[1]}`}>{item.title}</Link>
										: <a href={item.url}>{item.title}</a>}
								</li>)}
						</ul>
						: ''}
				</div>
			</Container>
		</header>
	)
}