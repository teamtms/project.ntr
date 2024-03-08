import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import { Header } from '@/components/Header'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={pressStart2P.className}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
