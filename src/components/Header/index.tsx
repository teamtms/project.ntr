import Link from 'next/link'
import { Container } from '../Container'
import { wordpress } from '@/services/wordpress'
import styles from './Header.module.scss'
import { Button } from 'pixieui/components'
import { Submenu } from './Submenu'
import Image from 'next/image'

export const Header = async () => {
	const data = await wordpress.getMenuBySlug('main')

	return (
		<header>
			<Container className='flex items-start flex-wrap gap-y-4 gap-x-8 py-4'>
				<div className="flex justify-between flex-grow">
					<Link href="/#" className={styles.logo}>
						<Image src="/thetms-full.png" alt="TMS full logo" width="120" height="30" />
					</Link>
					{data
						? <ul className={styles.menu}>
							{data.items.map((item) =>
								<li className={styles.menuLi} key={item.ID}>
									{item.child_items?.length && item.child_items?.length > 0
										? <Submenu submenu={item.child_items}>{item.title}</Submenu>
										: <Button appearance="transparent" className={styles.menuItem}>
											{item.url.includes('[tms]')
												? <Link href={`${item.url.split('[tms]')[1]}`}>{item.title}</Link>
												: <a href={item.url}>{item.title}</a>}
										</Button>}
								</li>)}
							<li className={styles.menuLi}>
								<Button appearance="primary" className={styles.menuItem}>
									<Link href="/login">
										Войти
									</Link>
								</Button>
							</li>
						</ul>
						: ''}
				</div>
			</Container>
		</header>
	)
}