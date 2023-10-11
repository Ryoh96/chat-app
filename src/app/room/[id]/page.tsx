'use client'

import Chat from '@/app/components/organisms/Chat'
import MessageSender from '@/app/components/organisms/MessageSender'
import { AuthGuard } from '@/app/components/utils/AuthGuard'
import { useAuthContext } from '@/app/contexts/AuthContext'
import useReadChats from '@/app/hooks/useReadChats'

import useScrollDown from '../../hooks/useScrollDown'
import useRoomNameStore from '../../store/roomName'

const Room = ({ params }: { params: { id: string } }) => {
  const { name } = useRoomNameStore()
  const { user } = useAuthContext()
  const { chats } = useReadChats(`chat-${params.id}`)
  useScrollDown(chats)

  return (
    <AuthGuard>
      <div className="relative">
        <div className="container mx-auto max-w-3xl space-y-10 pt-4 pb-20">
          <div className="space-y-6">
            <h1 className="text-3xl  md:text-5xl lg:text-6xl font-extrabold text-white text-center pb-2 pt-10">
              {name}
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
            <MessageSender room={`chat-${params.id}`}/>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
}

export default Room
