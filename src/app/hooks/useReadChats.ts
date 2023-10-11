import { getDatabase, onChildAdded, ref } from 'firebase/database'
import { useEffect, useState } from 'react'

import firebase_app from '@/firebase/config'

import type { Chat } from '../types'

const useReadChats = (chatName: string) => {
  const [chats, setChats] = useState<Chat[]>([])

  useEffect(() => {
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, chatName)

      return onChildAdded(dbRef, (snapshot) => {
        const message = {
          message: String(snapshot.val()['message'] ?? ''),
          uid: String(snapshot.val()['uid']),
          displayName: String(snapshot.val()['displayName']),
          photoURL: String(snapshot.val()['photoURL']),
          createdAt: String(snapshot.val()['createdAt']),
        }
        setChats((prev) => [...prev, message])
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  return { chats }
}

export default useReadChats
