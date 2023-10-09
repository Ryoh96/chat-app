import './globals.css'

import type { Metadata } from 'next'

import Header from './components/layouts/Header'
import { AuthContextProvider } from './contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Realtime chat app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <AuthContextProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            {/* <Footer /> */}
          </div>
        </AuthContextProvider>
      </body>
    </html>
  )
}
