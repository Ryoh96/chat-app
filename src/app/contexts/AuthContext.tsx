'use client'

import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { createContext, useContext, useEffect, useState } from 'react'

import firebase_app from '../../firebase/config'
import Spinner from '../components/atoms/Spinner'

const auth = getAuth(firebase_app)

type AuthContextProps = {
  user: User | null | undefined
  signInCheck: boolean
}

const AuthContext = createContext<AuthContextProps>({
  user: undefined,
  signInCheck: false,
})

export const useAuthContext = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null | undefined>(undefined)

  const [signInCheck, setSignInCheck] = useState(false)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{ user, signInCheck }}>
      {children}
    </AuthContext.Provider>
  )
}
