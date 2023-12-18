import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './components/footer/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JUBANORPA',
  description: 'Juventude batista no noroeste do Paraná',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
