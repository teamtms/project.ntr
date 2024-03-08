import type { IWpItem } from './WpItem.interface'

export interface IFine extends IWpItem {
	content: { rendered: string }
	acf: {
		amount: number
		reciever: number
		is_opened: boolean
	}
}