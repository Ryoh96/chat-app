'use client'
import {
  EnvelopeIcon,
  KeyIcon,
  PhotoIcon,
  UserIcon,
} from '@heroicons/react/20/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import type { FormEvent } from 'react'
import React from 'react'
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form'
import { useForm } from 'react-hook-form'

import type { SignUp} from '@/app/libs/schema/SignUp';
import { signUpSchema } from '@/app/libs/schema/SignUp'
import signUp from '@/utils/auth/signUp'

import Button from '../../atoms/Button'

type Props<T extends FieldValues = SignUp> = {
  onValid: SubmitHandler<T>
  onInValid?: SubmitErrorHandler<T>
}

function SignUpForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUp>({
    resolver: zodResolver(signUpSchema),
  })




  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = e.target.files?.[0]
  //   if (file) {
  //     setPhotoFile(file)
  //   }
  // }
  return (
    <div className="rounded shadow">
      <div className="px-10 py-12 rounded shadow bg-black bg-opacity-30">
        <p className="mb-5 text-2xl font-bold text-white border-b-2 pb-2">
          ユーザ登録
        </p>
        <form onSubmit={handleSubmit(props.onValid)} className="form">
          <div className="flex flex-col gap-8 text-white pb-10">
              <div>
            <label htmlFor="email">
              <div className="flex gap-1 items-start">
                <EnvelopeIcon className="w-5 h-5 mt-0.5" />
                <p className="pb-2">Email</p>
              </div>
              <input
                className="px-2 py-2 rounded-lg text-sm min-w-[240px] text-black"
                {...register("email")}
                required
                type="email"
                name="email"
                id="email"
                placeholder="example@mail.com"
              />
            </label>
                        {errors.email?.message && (
                <p className="text-xs text-red-300 pt-2 pl-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
            <label htmlFor="password" className="">
              <div className="flex gap-1 items-start">
                <KeyIcon className="w-5 h-5  mt-0.5" />
                <p className="pb-2">Password</p>
              </div>
              <input
                className="px-2 py-2 rounded-lg text-sm min-w-[240px] text-black"
                {...register("password")}
                required
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </label>
                                 {errors.password?.message && (
                <p className="text-xs text-red-300 pt-2 pl-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
            <label htmlFor="name">
              <div className="flex gap-1 items-start">
                <UserIcon className="w-5 h-5  mt-0.5" />
                <p className="pb-2">Name</p>
              </div>
              <input
                className="px-2 py-2 rounded-lg text-sm min-w-[240px] text-black"
                {...register("displayName")}
                required
                type="text"
                name="displayName"
                id="name"
                placeholder="ユーザ名"
              />
            </label>
                                 {errors.displayName?.message && (
                <p className="text-xs text-red-300 pt-2 pl-1">
                  {errors.displayName.message}
                </p>
              )}
            </div>
            <div>
            <label htmlFor="photo">
              <div className="flex gap-1 items-start">
                <PhotoIcon className="w-5 h-5  mt-0.5" />
                <p className="pb-2">ユーザー画像</p>
              </div>
              <input
                type="file"
                accept="image/*"
                {...register("file")}
                required
                className="file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-100 file:text-indigo-700
                hover:file:bg-violet-100"
              />
            </label>
                                 {errors.file?.message && (
                <p className="text-xs text-red-300 pt-2 pl-1">
                  {errors.file.message}
                </p>
              )}
            </div>
          </div>
          <div className="mx-auto text-center">
            <Button type="submit" variant="large">
              Sign up
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
