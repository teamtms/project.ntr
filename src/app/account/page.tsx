import { Container } from '@/components/Container'
import { Button, Card, Input, Title3 } from 'pixieui/components'

const handleLogin = async () => {
	'use server'


}

const LoginPage = async () => {

	return (
		<Container className="flex items-center justify-center h-[80vh]">
			<Card className="max-w-[400px] w-full " appearance="outline">
				<form action={handleLogin} className="py-4 gap-3 flex flex-col w-full">
					<Title3 className="text-center mb-4">Вход</Title3>
					<Input className="w-full" appearance="primary" />
					<Input className="w-full" appearance="primary" />
					<Button className="block w-full py-8 text-center">Войти</Button>
				</form>
			</Card>
		</Container>
	)
}

export default LoginPage