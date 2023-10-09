"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/app/contexts/AuthContext'
import signOut from '@/utils/auth/signOut'

import Button from '../../atoms/Button'

const Header = () => {
  const router = useRouter()
  const user = useAuthContext()

  return (
    <header className="flex justify-between px-10 py-5 bg-blue-400 text-white items-center">
      <Link href="/" className="font-extrabold text-2xl">
        Chat-app
      </Link>
      {
        user ? 
        <Button onClick={signOut}>
          ログアウト
        </Button>
        :
      <Button
      onClick={() => router.push("/signIn")}
      >
        ログイン
      </Button>
      }
    </header>
  )
}

export default Header
