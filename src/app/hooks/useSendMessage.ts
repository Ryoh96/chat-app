import { format } from 'date-fns'
import { getDatabase, push, ref } from 'firebase/database'
import { useState } from 'react'

import firebase_app from '@/firebase/config'

import { useAuthContext } from '../contexts/AuthContext'

const useSendMessage = (room: string) => {
  const [message, setMessage] = useState('')
  const { user } = useAuthContext()

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, room)
      await push(dbRef, {
        message,
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
        createdAt: format(new Date(), 'HH:mm'),
      })
      setMessage('')
    } catch (e) {
      console.error('error')
    }
  }

  return { message, setMessage, user, handleSendMessage }
}

export default useSendMessage
