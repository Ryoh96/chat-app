import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form'
import { useForm } from 'react-hook-form'

import type { CreateRoom } from '@/app/libs/schema/CreateRoom'
import { createRoomSchema } from '@/app/libs/schema/CreateRoom'

import Button from '../../atoms/Button'

type Props<T extends FieldValues = CreateRoom> = {
  onValid: SubmitHandler<T>
  onInValid?: SubmitErrorHandler<T>
}

const CreateRoomForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateRoom>({
    resolver: zodResolver(createRoomSchema),
  })
  return (
    <div>
      <form onSubmit={handleSubmit(props.onValid, props.onInValid)}>
        <div className="space-y-8">
          <div>
            <label className="flex items-center gap-1">
              <span className="whitespace-nowrap min-w-[6em]">タイトル：</span>
              <input
                type="text"
                required
                {...register('title')}
                className="border-black p-1 bg-gray-100 w-full rounded"
              />
            </label>
            {errors.title?.message && (
              <p className="text-xs text-red-600 pt- pl-1">
                {errors.title.message}
              </p>
            )}
          </div>
          <div>
            <label className="flex items-center gap-1">
              <span className="whitespace-nowrap  min-w-[6em]">概要:</span>
              <input
                type="text"
                required
                {...register('content')}
                className="border-black p-1 bg-gray-100 w-full rounded"
              />
            </label>
            {errors.content?.message && (
              <p className="text-xs text-red-600 pt- pl-1">
                {errors.content.message}
              </p>
            )}
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <label className="flex gap-2 items-center">
                <span className="whitespace-nowrap">サムネイル選択：</span>
                <input
                  type="file"
                  {...register('file')}
                  required
                  className="
                      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-indigo-50 file:text-indigo-700
      hover:file:bg-violet-100
                "
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <Button color="bg-sky-500">ルームを登録</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateRoomForm
