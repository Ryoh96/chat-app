'use client'

import Chat from './components/organisms/Chat'
import MessageSender from './components/organisms/MessageSender'
import { AuthGuard } from './components/utils/AuthGuard'
import { useAuthContext } from './contexts/AuthContext'
import useReadChats from './hooks/useReadChats'
import useScrollDown from './hooks/useScrollDown'

export default function Home() {
  const { user } = useAuthContext()
  const { chats } = useReadChats('chat-nora')
  useScrollDown(chats)

  return (
    <AuthGuard>
      <div className="relative">
        <div className="container mx-auto max-w-3xl space-y-10 pt-4 pb-20">
          <div className="space-y-6">
            <h1 className="text-3xl  md:text-5xl lg:text-6xl font-extrabold text-white text-center pb-2 pt-10">
              野良部屋
            </h1>
            {chats.map((chat, index) => (
              <Chat
                key={index}
                photoURL={chat.photoURL}
                name={chat.displayName}
                direction={user?.uid !== chat.uid ? 'left' : 'right'}
                createdAt={chat.createdAt}
              >
                {chat.message}
              </Chat>
            ))}
          </div>
        </div>
        <div className="mx-auto text-center ">
          <div className="fixed bottom-0 w-full">
            <MessageSender room="chat-nora" />
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}
