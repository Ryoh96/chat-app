'use client'

import { useRouter } from 'next/navigation'
import { useLayoutEffect } from 'react'

import { useAuthContext } from '../../../contexts/AuthContext'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext()
  const router = useRouter()

  useLayoutEffect(() => {
    if (user === null) {
      router.push('/signIn')
    }
  }, [user, router])

  return <>{children}</>
}
