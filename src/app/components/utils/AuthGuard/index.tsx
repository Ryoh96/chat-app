'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { useAuthContext } from '../../../contexts/AuthContext'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (user === null) {
      router.push('/signIn')
    }
  }, [user, router])

  return <>{children}</>
}
