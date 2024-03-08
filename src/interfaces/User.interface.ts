export interface IUser {
	id: number
	title: { rendered: string }
	acf: {
		role: string
		fraction: string
		balance: string
		status: string
		avatar: number
		description: string
		birth_date: string
		married: boolean
		owner_of: number[]
		additions: string
		fines: number[]
	}
}

export interface IWpUser {
	id: number
	name: string
	avatar_urls: {
		24: string
		48: string
		96: string
	}
}