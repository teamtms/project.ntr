import type { IRelease } from '@/interfaces/Release.interface'
import { request } from './wordpress'

export const github = {
	getModpackReleases: () => request<IRelease>('https://api.github.com/repos/teamtms/mods/releases/latest')
}