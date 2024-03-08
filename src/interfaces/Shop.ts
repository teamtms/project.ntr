export interface IShop {
	id: number
	slug: string
	title: { rendered: string }
	content: { rendered: string }
	excerpt: { rendered: string }
	featured_media: number
	acf: {
		city: number[]
		goods: {
			name: string
			description: string
			price: number
			image: number
		}[]
		owner: number
		organization: number
	}
}