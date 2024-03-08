import type { IWpItem } from './WpItem.interface'

export interface IAddon extends IWpItem {
	featured_media: number
	excerpt: {
		rendered: string
	}
	content: {
		rendered: string
	}
	author: number
	acf: {
		versions: number[]
		file: number
	}
}