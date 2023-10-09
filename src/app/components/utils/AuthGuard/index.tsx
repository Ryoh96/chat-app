"use client"

import { useRouter } from 'next/navigation'

import { useAuthContext } from '../../../contexts/AuthContext'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const user = useAuthContext()
  const router = useRouter()

  if (user === null) {
    router.push('/signIn')
    return null
  }

  return <>{children}</>
}
