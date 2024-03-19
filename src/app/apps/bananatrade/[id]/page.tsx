import { Container } from '@/components/Container'
import styles from './page.module.scss'
import clsx from 'clsx'

function getMaxOfArray(numArray: number[]) {
	return Math.max.apply(null, numArray);
}

const BananaTrade = async ({ params }: { params: { id: number } }) => {
	const response = await fetch(`https://www.fb24m.ru/tms/wp-json/wp/v2/currencies/${params.id}`, { cache: 'no-cache' })
	const json: {
		title: {
			rendered: string
		}
		acf: {
			rate: {
				price: number
			}[]
		}
	} = await response.json()

	if (!response.ok) return <>
		{JSON.stringify(json)}
	</>

	const prices = json.acf.rate.map(price => price.price)

	const maxSign = getMaxOfArray(prices) + 50
	let signs: number[] = []

	for (let i = 50; i <= maxSign; i += 50) {
		signs.push(i)
	}

	return (
		<Container>
			<h2 className={styles.title}>
				Курс валюты: {json.title.rendered} (MUSD) / р—т (рубль ТМС)
			</h2>
			<div className={styles.container}>
				<div className={styles.prices}>
					{signs.reverse().map((price) => <div className={styles.sign} key={price}>{price}</div>)}
				</div>
				{prices.map((price, index) =>
					<div data-title={`${price} р—т (${price - prices[index - 1]})`}
						className={clsx(styles.column, prices[index - 1] >= price && styles.red)}
						style={{ height: price }}
						key={price * index} />)}
			</div>
		</Container>
	)
}

export default BananaTrade
