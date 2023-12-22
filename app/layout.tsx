import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MyMsalProvider from '@/msal/MyMsalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MSAL with Next.Js 14',
  description: 'Created by Mazen Alsenih (https://mazensenih.com | mazen.el.senih@gmail)',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100 flex flex-col p-4`}>
        <MyMsalProvider>
          <main>
            {children}
          </main>
        </MyMsalProvider>
      </body>
    </html>
  )
}
