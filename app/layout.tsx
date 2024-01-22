// vendor
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import cn from 'clsx'
import { ClerkProvider } from '@clerk/nextjs'

// styles
import './globals.css'
import css from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wiki search',
  description: 'Look for your favorite article',
}

interface IProps {
  children: React.ReactNode
}

function RootLayout({ children }: IProps) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(inter.className, css.root)}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

export default RootLayout
