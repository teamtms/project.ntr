export interface IMedia {
	id: number
	title: { rendered: string }
	description: { rendered: string }
	caption: { rendered: string }
	guid: { rendered: string }
	media_details: {
		file: string
	}
	alt_text: string
}