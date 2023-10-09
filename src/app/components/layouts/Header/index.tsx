'use client'

import { ArrowRightOnRectangleIcon, ChevronDownIcon, UserIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useAuthContext } from '@/app/contexts/AuthContext'
import signOut from '@/utils/auth/signOut'

import Button from '../../atoms/Button'
import RoundedImage from '../../atoms/RoundedImage'
import DropDown from '../../organisms/DropDown'

const Header = () => {
  const router = useRouter()
  const {user} = useAuthContext()

  return (
    <header className="flex justify-between px-4 py-2 bg-black bg-opacity-80 text-white items-center shadow sticky top-0 z-10">
      <Link href="/" className="font-extrabold text-2xl">
        Chat-app
      </Link>
      {user ? (
        <DropDown
          menuItems={[
            {
              icon: <UserIcon className='w-6 h-6 text-indigo-600'/>,
              name: "マイページ"
            },{
              icon: <ArrowRightOnRectangleIcon className='w-6 h-6 text-indigo-600'/>,
              name: "ログアウト",
              handleClick: () => {
                signOut()
                router.push("/signIn")
              }
            }
          ]}
        >
        <div className="flex items-center gap-2 cursor-pointer">
          <RoundedImage
            src={user.photoURL ?? ''}
            height={30}
            width={30}
            alt="アイコン"
            />
          <p className="text-sm">{user.displayName}</p>
          <ChevronDownIcon className="text-white w-4 h-4" />
        </div>
        </DropDown>
      ): (
        <Button onClick={() => router.push('/signIn')}>ログイン</Button>
      )}
    </header>
  )
}

export default Header
