'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/app/contexts/AuthContext'
import signOut from '@/utils/auth/signOut'

import Button from '../../atoms/Button'

const Header = () => {
  const router = useRouter()
  const user = useAuthContext()

  console.log(user)

  return (
    <header className="flex justify-between px-10 py-5 bg-black bg-opacity-60 text-white items-center shadow">
      <Link href="/" className="font-extrabold text-2xl">
        Chat-app
      </Link>
      {user ? (
        <Button onClick={signOut}>ログアウト</Button>
      ) : (
        <Button onClick={() => router.push('/signIn')}>ログイン</Button>
      )}
    </header>
  )
}

export default Header
