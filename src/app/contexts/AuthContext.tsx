'use client'

import type { User } from 'firebase/auth'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

import firebase_app from '../../firebase/config'
import Spinner from '../components/atoms/Spinner'

const auth = getAuth(firebase_app)

export const AuthContext = React.createContext<User | null>(null)

export const useAuthContext = () => React.useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  )
}
