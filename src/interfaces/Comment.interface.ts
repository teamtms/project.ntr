export interface IComment {
	id: number
	author_name: string
	content: { rendered: string }
	author_avatar_urls: {
		24: string
		48: string
		96: string
	}
}