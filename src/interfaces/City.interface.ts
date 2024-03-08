export interface ICity {
	id: number
	title: { rendered: string }
	content: { rendered: string }
	acf: {
		ruler: number
		orgs: number[]
	}
}