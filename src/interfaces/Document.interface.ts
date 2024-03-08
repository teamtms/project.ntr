import type { IWpItem } from './WpItem.interface'

export interface IDocument extends IWpItem {
	acf: {
		parties: number[]
		expiration_date: string
	}
	content: { rendered: string }
	excerpt: { rendered: string }
}