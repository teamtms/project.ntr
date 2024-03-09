import Link from 'next/link'
import { Container } from '../Container'
import { wordpress } from '@/services/wordpress'
import styles from './Header.module.scss'
import { Button } from 'pixieui/components'
import { Submenu } from './Submenu'

export const Header = async () => {
	const data = await wordpress.getMenuBySlug('main')

	return (
		<header>
			<Container className='flex items-center flex-wrap gap-y-4 gap-x-8 py-4'>
				<div className="">
					{!data ? 'loading' : ''}
					{data
						? <ul className={styles.menu}>
							<li>
								<Link href="/#" className={styles.logo}>
									TMS
								</Link>
							</li>
							{data.items.map((item) =>
								<li key={item.ID}>
									{item.child_items?.length && item.child_items?.length > 0
										? <Submenu submenu={item.child_items}>{item.title}</Submenu>
										: <Button appearance="transparent" className={styles.menuItem}>
											{item.url.includes('[tms]')
												? <Link href={`${item.url.split('[tms]')[1]}`}>{item.title}</Link>
												: <a href={item.url}>{item.title}</a>}
										</Button>}
								</li>)}
						</ul>
						: ''}
				</div>
			</Container>
		</header>
	)
}