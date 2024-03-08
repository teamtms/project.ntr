import type { IWpItem } from './WpItem.interface'

export interface IPost extends IWpItem {
	tags: string
	author: number
	categories: number[]
	content: { rendered: string }
	excerpt: { rendered: string }
	featured_media: number
	acf: {
		tags: string
	}
}