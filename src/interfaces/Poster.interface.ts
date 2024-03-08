export interface IPoster {
	id: number
	title: { rendered: string }
	acf: {
		subtitle: string
		description: string
		date: string
		background: number
	}
}