'use client'
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/20/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import type {
  FieldValues,
  SubmitErrorHandler,
  SubmitHandler,
} from 'react-hook-form'
import { useForm } from 'react-hook-form'

import type { LogIn } from '@/app/libs/schema/LogIn'
import { logInSchema } from '@/app/libs/schema/LogIn'

import Button from '../../atoms/Button'

type Props<T extends FieldValues = LogIn> = {
  onValid: SubmitHandler<T>
  onInValid?: SubmitErrorHandler<T>
}

function SignInForm(props: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LogIn>({
    resolver: zodResolver(logInSchema),
  })

  return (
    <div className="rounded shadow">
      <div className="px-10 py-12 rounded shadow bg-black bg-opacity-30">
        <p className="mb-5 text-2xl font-bold text-white border-b-2 pb-2">
          ログイン
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
                  {...register('email')}
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
                  {...register('password')}
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
          </div>
          <div className="mx-auto text-center">
            <Button type="submit" variant="large">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
