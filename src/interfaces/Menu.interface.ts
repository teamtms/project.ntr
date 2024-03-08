export interface IMenu {
	term_id: number
	items: {
		ID: number
		title: string
		url: string
	}[]
}