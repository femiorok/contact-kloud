import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Session } from 'next-auth'
import { SessionProvider } from './api/auth/lib/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode,
  session: Session
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        {children}
        </SessionProvider>
      </body>
    </html>
  )
}
