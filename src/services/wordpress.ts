import { IFine } from '@/interfaces/Fine.interface'
import type { IPost } from '@/interfaces/Post.interface'
import { IUser, IWpUser } from '@/interfaces/User.interface'
import { IDocument } from '@/interfaces/Document.interface'
import { IOrg } from '@/interfaces/Org.interface'
import { ICategory } from '@/interfaces/Category.interface'
import { IAddon } from '@/interfaces/Addon.interface'
import { IMedia } from '@/interfaces/Media.interface'
import { IPwOrder } from '@/interfaces/PwOrder.interface'
import { IPoster } from '@/interfaces/Poster.interface'
import { ICity } from '@/interfaces/City.interface'
import { ISiteInfo } from '@/interfaces/SiteInfo.interface'
import { IMenu } from '@/interfaces/Menu.interface'
import { IHomePage } from '@/interfaces/HomePage.interface'
import { IComment } from '@/interfaces/Comment.interface'
import { IShop } from '@/interfaces/Shop'

const API = `https://www.fb24m.ru/tms/wp-json/wp/v2`

export const request = async<T>(url: URL | string, init?: RequestInit | undefined): Promise<T> => {
	const response = await fetch(url, { cache: 'no-cache' })
	const json: T = await response.json()

	return json
}

export const wordpress = {
	getSiteInfo: async () => request<ISiteInfo>('https://www.fb24m.ru/tms/wp-json/'),
	getPosts: async (page: number = 1, per_page: number = 10) => request<IPost[]>(`${API}/posts?per_page=${per_page}&page=${page}`),
	getPostBySlug: async (slug: string) => request<IPost[]>(`${API}/posts?slug=${slug}`),
	getCommentsByPostId: async (id: number) => request<IComment[]>(`${API}/comments?post=${id}`),

	getRatesButtonsByPostId: async (id: number) => request<string>(`https://fb24m.ru/tms/wp-json/myplugin/v1/buttons/${id}`),
	getRatesCountByPostId: async (id: number) => request<string>(`https://fb24m.ru/tms/wp-json/myplugin/v1/count/${id}`),
	searchDocuments: async (search: string) => request<IDocument[]>(`${API}/document?search=${search}`),
	getDocumentBySlug: async (slug: string) => request<IDocument[]>(`${API}/document?slug=${slug}`),
	getFines: async () => request<IFine[]>(`${API}/fine`),
	getFineById: async (id: number) => request<IFine>(`${API}/fine/${id}`),
	getWpUserById: async (id: number) => request<IWpUser>(`${API}/users/${id}`),
	getUserById: async (id: number) => request<IUser>(`${API}/profile/${id}`),
	getUserByName: async (username: string) => request<IUser[]>(`${API}/profile?slug=${username}`),
	getOrgById: async (id: number) => request<IOrg>(`${API}/organization/${id}`),
	getCategoryById: async (id: number) => request<ICategory>(`${API}/categories/${id}`),
	getAddons: async () => request<IAddon[]>(`${API}/addons`),
	getAddonBySlug: async (slug: string) => request<IAddon[]>(`${API}/addons?slug=${slug}`),
	getMediaById: async (id: number) => request<IMedia>(`${API}/media/${id}`),
	getPwOrders: async () => request<IPwOrder[]>(`${API}/paidwalk`),
	getPosters: async () => request<IPoster[]>(`${API}/poster`),
	getPosterById: async (id: number) => request<IPoster>(`${API}/poster/${id}`),
	getCityBySlug: async (slug: string) => request<ICity[]>(`${API}/city?slug=${slug}`),
	getMenuBySlug: async (slug: string) => request<IMenu>(`https://www.fb24m.ru/tms/wp-json/menus/v1/menus/${slug}`),
	getPageBySlug: async (slug: string) => request<IHomePage[]>(`${API}/pages?slug=${slug}`),
	getShopBySlug: async (slug: string) => request<IShop[]>(`${API}/shops?slug=${slug}`),
	getGoLinkBySlug: async (slug: string) => request<{ slug: string, acf: { url: string } }[]>(`${API}/go?slug=${slug}`),
}