import { Container } from '@/components/Container'
import { wordpress } from '@/services/wordpress'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from 'pixieui/components'

const SquarePage = async ({ params }: { params: { page: string } }) => {
	const square = await wordpress.getSquare(+params.page)

	if (square.code) {
		notFound()
	}

	return (
		<Container className="max-w-[560px]">
			<video className="max-w-[560px]" controls src={square[0].acf.video}></video>
			<div className="flex mt-4 justify-between">
				<div className="flex flex-col gap-2 mt-1">
					<span className="text-xl">{square[0].title.rendered}</span>
					<span className="text-lg">{square[0].acf.author}</span>
				</div>
				<Link href={`/tmtube/squares/${+params.page + 1}`}>
					<Button>»</Button>
				</Link>
			</div>
		</Container >
	)
}

export default SquarePage