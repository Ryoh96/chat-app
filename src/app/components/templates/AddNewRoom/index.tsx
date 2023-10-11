'use client'

import { ChatBubbleLeftIcon, PlusIcon } from '@heroicons/react/20/solid'
import { getDatabase, onChildAdded, push, ref } from 'firebase/database'
import {
  getDownloadURL,
  getStorage,
  ref as storageRef,
  uploadBytes,
} from 'firebase/storage'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'

import { useAuthContext } from '@/app/contexts/AuthContext'
import type { CreateRoom } from '@/app/libs/schema/CreateRoom'
import firebase_app from '@/firebase/config'

import Modal from '../../organisms/Modal'
import CreateRoomForm from '../CreateRoomForm'

const AddNewRoom = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const { user } = useAuthContext()

  const handleCreateForm = async ({ title, content, file }: CreateRoom) => {
    try {
      // 画像アップロード
      const storage = getStorage(firebase_app)
      const fileRef = storageRef(storage, `room/title-${uuid()}.jpg`)
      await uploadBytes(fileRef, file)

      // アップロードした画像のURL取得
      const photoURL = await getDownloadURL(fileRef)

      // DB登録
      const db = getDatabase(firebase_app)
      const dbRef = ref(db, 'room')
      await push(dbRef, {
        title,
        content,
        photoURL,
        authorID: user?.uid,
        author: user?.displayName,
        roomID: `room-${uuid()}`,
      })
      toast.success('ルームの作成が完了しました')
      setIsCreateModalOpen(false)
    } catch (e) {
      console.error(e)
      toast.error('エラーが発生しました')
    }
  }

  return (
    <>
      <button
        className="container px-3 mx-auto text-white cursor"
        onClick={() => setIsCreateModalOpen(true)}
      >
        <div className="bg-black bg-opacity-60 px-6 py-10 rounded-lg relative mx-3 flex items-center gap-10">
          <div className="flex gap-10 h-full box-content">
            <div className="bg-black w-[200px] h-[200px] items-center justify-center">
              <PlusIcon className="w-full text-white mx-auto self-center h-full" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-extrabold  text-white flex-shrink">
              新規ルーム追加
            </h2>
          </div>
        </div>
      </button>
      <Modal
        titleIcon={<ChatBubbleLeftIcon className="w-6 h-6 text-pink-400" />}
        title="新規ルームの追加"
        content={<CreateRoomForm onValid={handleCreateForm} />}
        isOpen={isCreateModalOpen}
        closeModal={() => setIsCreateModalOpen(false)}
      />
    </>
  )
}

export default AddNewRoom
