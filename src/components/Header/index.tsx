import Link from 'next/link'
import { Container } from '../Container'
import { wordpress } from '@/services/wordpress'
import styles from './Header.module.scss'
import Image from 'next/image'
import { Search } from '@/features/Search'
import clsx from 'clsx'
import { Menu } from '@/features/Menu'
import { Button } from 'pixieui/components'

export const Header = async () => {
	const data = await wordpress.getMenuBySlug('main')
	const menu = await wordpress.getMenuBySlug('header')

	return (
		<header>
			<Container className='flex items-start flex-wrap gap-y-4 gap-x-6 sm:gap-x-8 py-6 relative'>
				<div className="flex flex-grow gap-4">
					<Link href="/#" className={clsx(styles.logo, 'flex items-center gap-2')}>
						<div className="flex-shrink-0">
							<Image src="/logo-planet.png" alt="TMS full logo" width="36" height="36" />
						</div>
						<span className="text-4xl hidden sm:block">
							ТМС
						</span>
					</Link>

					{data
						? <div className={clsx(styles.menuWrapper, 'flex flex-grow items-center gap-4 sm:gap-8')}>
							<ul className="gap-4 hidden md:flex">
								{menu.items.map((item) =>
									<Link key={item.ID} href={item.url.split('[tms]')[1] ? item.url.split('[tms]')[1] : item.url}>
										<li key={item.ID}>{item.title}</li>
									</Link>
								)}
							</ul>
							<Search />
							<Link className="block sm:basis-[32px] sm:flex-shrink-0" href="/account/login">
								<Image className="sm:hidden min-w-[20px] min-h-[20px]" src="/icons/login.png" alt="Войти" width={21} height={21} />
								<div className="hidden sm:block">
									<Button>Войти</Button>
								</div>
							</Link>
							<Menu mainMenu={data} headerMenu={menu} />
						</div>
						: ''}
				</div>
			</Container>
		</header>
	)
}