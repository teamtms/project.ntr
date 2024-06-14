import { Container } from '@/components/Container'
import { wordpress } from '@/services/wordpress'
import { Card } from '@/shared/ui/Card'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { Button, Input, Title3 } from 'pixieui/components'

const handleLogin = async (formData: FormData) => {
	'use server'

	const login = formData.get('login')
	const password = formData.get('password')

	const testResponse = await wordpress.getMe(btoa(`${login}:${password}`))

	if (!testResponse.id) {
		return {
			message: 'Неверный логин или пароль'
		}
	}

	else {
		cookies().set('saved-session-token', btoa(`${login}:${password}`))
		redirect('/account')
	}
}

const LoginPage = async () => {
	if (cookies().has('saved-session-token')) {
		redirect('/apps')
	}

	return (
		<Container className="flex items-center justify-center h-[80vh]">
			<Card className="max-w-[400px] w-full">
				<form action={handleLogin} className="py-4 flex flex-col w-full">
					<Title3 className="text-center mb-6">Вход</Title3>
					<input required name="login" className="w-full p-3 px-4 bg-[#8b8b8b] border-[#373737] border-2 border-r-white border-b-white focus:border-[#373737] focus:border-l-white focus:border-t-white outline-0" placeholder="Логин / Email" />
					<input required name="password" type="password" className="w-full p-3 px-4 bg-[#8b8b8b] border-[#373737] border-2 border-r-white border-b-white focus:border-[#373737] focus:border-l-white focus:border-t-white outline-0" placeholder="Пароль" />
					<button className="block w-full p-3 px-4 bg-[#8b8b8b] border-[#373737] border-2 border-t-white border-l-white text-center active:border-white active:border-l-[#373737] active:border-t-[#373737] outline-0">Войти</button>
				</form>
			</Card>
		</Container>
	)
}

export default LoginPage