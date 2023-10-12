import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'

import Toast from './components/atoms'
import Header from './components/layouts/Header'
import { AuthContextProvider } from './contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Realtime chat app',
  manifest: '/manifest.json',
  viewport: "width=device-width,initial-scale=1.0,maximum-scale=1.0"
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
        <Toast />
      </body>
    </html>
  )
}
