'use client'

import { getDatabase, onChildAdded, push, ref } from 'firebase/database'
import { Suspense, useEffect, useState } from 'react'

import firebase_app from '@/firebase/config'

import Chat from './components/organisms/Chat'
import { AuthGuard } from './components/utils/AuthGuard'
import { useAuthContext } from './contexts/AuthContext'

export default function Home() {
  const [message, setMessage] = useState('')

  const {user} = useAuthContext()

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, 'chat')
      await push(dbRef, {
        message,
        uid: user?.uid,
        displayName: user?.displayName,
        photoURL: user?.photoURL,
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

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }, [chats])

  return (
    <AuthGuard>
    <div className="relative">
      <div className="container mx-auto max-w-3xl space-y-10 pt-4 pb-20">
        <div className="space-y-6">
          <h1 className="sr-only">Chat List</h1>
          {chats.map((chat, index) => (
            <Chat
              key={index}
              photoURL={chat.photoURL}
              name={chat.displayName}
              direction={user?.uid !== chat.uid ? 'left' : 'right'}
            >
              {chat.message}
            </Chat>
          ))}
        </div>
      </div>
      <div className="mx-auto text-center ">
        <div className="fixed bottom-0 w-full">
          <div className="bg-black bg-opacity-70 py-4 text-white">
            <form onSubmit={handleSendMessage}>
              <div className="flex gap-3 justify-center items-center">
                <label>
                  <span className="sr-only">つぶやき</span>
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="px-2 py-2 rounded-lg text-sm min-w-[220px] text-black md:w-[500px]"
                    placeholder="つぶやきを入力"
                  />
                </label>
                <button className="bg-black py-2 px-3 rounded-full text-sm ring-1 ring-white hover:opacity-40 disabled:hover:opacity-100 disabled:ring-gray-400 disabled:text-gray-400" disabled={message.length === 0}>
                  つぶやく
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </AuthGuard>
  )
}
