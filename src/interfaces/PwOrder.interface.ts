import type { IWpItem } from './WpItem.interface'

export interface IPwOrder extends IWpItem {
	content: { rendered: string }
	acf: {
		buyer: string
		budget: string
		end_date: string
		avatar: number
	}
}