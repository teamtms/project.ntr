import type { ReactNode } from 'react'

export interface SubmenuProps {
	children: ReactNode
	submenu: {
		ID: number
		title: string
		url: string
	}[]
}