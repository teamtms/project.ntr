import { Container } from '@/components/Container'
import Eval from '@/components/Eval'
import { wordpress } from '@/services/wordpress'

const MessagePage = async ({ params }: { params: { slug: string } }) => {

	const [message] = await wordpress.getMessage(params.slug)
	const author = await wordpress.getWpUserById(message.author)

	return (
		<Container className="bg-[#c6c6c6] p-4 flex flex-col">
			<div className="flex">
				<div className="h-14 w-14 relative flex items-center justify-center p-1 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff] hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-[#c6c6c6] hover:before:opacity-50">
					<img src={`https://mc-heads.net/head/${author.name}`} className="w-10 h-10" />
				</div>
				<div className='flex-grow p-2 px-4 flex items-center bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff]'>От: {author.name}</div>
			</div>
			<div className="h-14 p-2 px-4 flex items-center bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff]">Тема: {message.title.rendered}</div>
			<div className="p-4 bg-[#8b8b8b] border-2 border-[#373737] border-r-[#fff] border-b-[#fff]">
				<Eval dangerouslySetInnerHTML={{ __html: message.content.rendered }}></Eval>
			</div>
		</Container >
	)
}

export default MessagePage