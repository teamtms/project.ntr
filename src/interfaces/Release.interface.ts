export interface IRelease {
	id: number
	tag_name: string
	name: string
	published_at: string
	zipball_url: string
	body: string
	author: {
		login: string
	}
}