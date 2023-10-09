'use client'

import { getDatabase, onChildAdded, push, ref } from 'firebase/database'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import firebase_app from '@/firebase/config'

import Chat from './components/organisms/Chat'
import { AuthGuard } from './components/utils/AuthGuard'
import { useAuthContext } from './contexts/AuthContext'

export default function Home() {
  const [message, setMessage] = useState('')

  const user = useAuthContext()
  const router = useRouter()

  if (!user) {
    router.push('/signIn')
  }

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, 'chat')
      await push(dbRef, {
        message,
        uid: user!.uid,
        displayName: user!.displayName,
        photoURL: user!.photoURL,
      })
      setMessage('')
    } catch (e) {
      console.error('error')
    }
  }

  const [chats, setChats] = useState<
    { message: string; uid: string; displayName: string; photoURL: string }[]
  >([])

  useEffect(() => {
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, 'chat')

      return onChildAdded(dbRef, (snapshot) => {
        const message = {
          message: String(snapshot.val()['message'] ?? ''),
          uid: String(snapshot.val()['uid']),
          displayName: String(snapshot.val()['displayName']),
          photoURL: String(snapshot.val()['photoURL']),
        }
        setChats((prev) => [...prev, message])
      })
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <AuthGuard>
      <div className="container mx-auto max-w-3xl space-y-10">
        <p>{user?.displayName ?? user?.email}　としてログイン中</p>
        <div className="space-y-12">
          {chats.map((chat, index) => (
            <Chat
              key={index}
              photoURL={chat.photoURL}
              name={chat.displayName}
              direction={user!.uid !== chat.uid ? 'left' : 'right'}
            >
              {chat.message}
            </Chat>
          ))}
        </div>
      </div>

      <div className="mx-auto text-center ">
        <form onSubmit={handleSendMessage}>
          <input
            className="border mr-2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className="bg-gray-300 p-2">
            送信
          </button>
        </form>
      </div>
    </AuthGuard>
  )
}
