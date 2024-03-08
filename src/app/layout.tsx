import type { Metadata } from 'next'
import { Press_Start_2P } from 'next/font/google'
import './globals.css'
import { ReactNode, Suspense } from 'react'
import { Header } from '@/components/Header'
import { CubeLoader, PixieProvider } from 'pixieui/components'

const pressStart2P = Press_Start_2P({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: "ТМС",
  description: "Лучший сайт худшего сервера",
  openGraph: {
    url: 'https://thetms.ru'
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={pressStart2P.className}>
        <PixieProvider>
          <Header />
          <Suspense fallback={<CubeLoader variation="jumping" />}>
            <main>
              {children}
            </main>
          </Suspense>
        </PixieProvider>
      </body>
    </html>
  )
}
