'use client'
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleLeftRightIcon,
  PlusIcon,
} from '@heroicons/react/20/solid'
import { getDatabase, onChildAdded, ref } from 'firebase/database'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import firebase_app from '@/firebase/config'

import Card from '../components/organisms/Card'
import AddNewRoom from '../components/templates/AddNewRoom'
import { AuthGuard } from '../components/utils/AuthGuard'
import useRoomNameStore from '../store/roomName'

const Room = () => {
  const [rooms, setRooms] = useState<
    {
      title: string
      content: string
      authorID: string
      photoURL: string
      author: string
      roomID: string
    }[]
  >([])

  const router = useRouter()
  const { setName } = useRoomNameStore()
  const handleClick = (id: string, name: string) => {
    setName(name)
    router.push(`${id}`)
  }

  useEffect(() => {
    try {
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, 'room')
      return onChildAdded(dbRef, (snapshot) => {
        const room = {
          title: String(snapshot.val()['title'] ?? ''),
          content: String(snapshot.val()['content']),
          photoURL: String(snapshot.val()['photoURL']),
          author: String(snapshot.val()['author']),
          authorID: String(snapshot.val()['authorID']),
          roomID: String(snapshot.val()['roomID']),
        }
        setRooms((prev) => [...prev, room])
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <AuthGuard>
      <div className="container mx-auto px-3 py-10">
        <div className="flex items-center gap-2 justify-center -ml-10 mb-6">
          <ChatBubbleLeftRightIcon className="h-12 w-12  sm:h-16 sm:w-16  md:w-20 md:h-20  xl:w-28 xl:-28 text-white" />
          <h1 className="text-2xl md:text-3xl  lg:text-4xl xl:text-6xl font-extrabold text-white text-center pb-4">
            Talk Room
          </h1>
        </div>
        <ul className="space-y-4 max-w-[1000px] mx-auto">
          {rooms.map((room) => (
            <li key={room.roomID}>
              <button
                onClick={() => handleClick(`/room/${room.roomID}`, room.title)}
                className="text-left container px-3 mx-auto text-white cursor"
              >
                <Card
                  photoURL={room.photoURL}
                  title={room.title}
                  desc={room.content}
                  author={room.author}
                />
              </button>
            </li>
          ))}
          <li>
            <button
              className="text-left container px-3 mx-auto text-white cursor"
              onClick={() => handleClick('/', '野良部屋')}
            >
              <Card
                photoURL="/default.png"
                title="野良部屋"
                desc="ジャンルにとらわれず雑談しましょう"
                author="管理人"
              />
            </button>
          </li>
          <li>
            <AddNewRoom />
          </li>
        </ul>
      </div>
    </AuthGuard>
  )
}

export default Room
