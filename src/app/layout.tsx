import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Extra Hour Calculator',
  description: 'Calculate your extra hours',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
