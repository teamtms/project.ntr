import { Container } from '@/components/Container'
import Eval from '@/components/Eval'
import { PassportCard } from '@/entities/PassportCard'
import { wordpress } from '@/services/wordpress'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs, BreadcrumbsItem, Button, Title4 } from 'pixieui/components'

const Orgs = async ({ params }: { params: { slug: string } }) => {
	const [org] = await wordpress.getOrgBySlug(params.slug)
	const image = await wordpress.getMediaById(org.acf.photo)
	const owner = await wordpress.getUserById(org.acf.owner)

	return (
		<Container>
			<div className="flex items-center gap-8">
				<div className="basis-1/2">
					<Breadcrumbs>
						<BreadcrumbsItem><Link href="/">ТМС</Link></BreadcrumbsItem>
						<BreadcrumbsItem>Организации</BreadcrumbsItem>
						<BreadcrumbsItem></BreadcrumbsItem>
					</Breadcrumbs>
					<Title4 className="mt-4" dangerouslySetInnerHTML={{ __html: org.title.rendered }}></Title4>

					<Link className="inline-block mt-8" href="#about">
						<Button>Узнать больше</Button>
					</Link>
				</div>
				<div className="basis-1/2">
					<Image className="w-full aspect-square object-cover" src={image.guid.rendered} alt={image.alt_text} width={900} height={900} />
				</div>
			</div>

			<div className="flex mt-16">
				<div className="basis-1/3 flex gap-3 items-center flex-col border-r-[#1e2434] border-r-2">
					<span className="text-center">выручка</span>
					<span className="text-xl text-center">{org.acf.revenue} р—тмс</span>
				</div>
				<div className="basis-1/3 flex gap-3 items-center flex-col border-r-[#1e2434] border-r-2">
					<span className="text-center">расположение</span>
					<span className="text-xl text-center">{org.acf.address}</span>
				</div>
				<div className="basis-1/3 flex gap-3 items-center flex-col">
					<span className="text-center">владелец</span>
					<span className="text-xl text-center">{owner.title.rendered}</span>
				</div>
			</div>

			<Title4 id="about" className="text-center mt-16">Об организации</Title4>

			<Eval className="mt-8" dangerouslySetInnerHTML={{ __html: org.content.rendered }}></Eval>

			<Title4 className="text-center mt-16 mb-8">Владелец организации</Title4>

			<PassportCard userId={org.acf.owner} />
		</Container >
	)
}

export default Orgs