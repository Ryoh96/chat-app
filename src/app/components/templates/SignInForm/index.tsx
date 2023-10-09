'use client'
import { EnvelopeIcon, KeyIcon } from '@heroicons/react/20/solid'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import React from 'react'

import signIn from '@/utils/auth/signIn'

import Button from '../../atoms/Button'

function SignInForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const router = useRouter()

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { result, error } = await signIn(email, password)

    if (error) {
      return console.log(error)
    }

    console.log(result)
    return router.push('/')
  }
  return (
    <div className="rounded shadow">
      <div className="px-10 py-12 rounded shadow bg-black bg-opacity-30">
        <p className="mb-5 text-2xl font-bold text-white border-b-2 pb-2">ログイン</p>
        <form onSubmit={handleForm} className="form">
          <div className='flex flex-col gap-8 text-white pb-10'>
          <label htmlFor="email">
            <div className='flex gap-1 items-start'>
              <EnvelopeIcon className='w-5 h-5 mt-0.5' />
              <p className='pb-2'>Email</p>
            </div>
            <input
              className="px-2 py-2 rounded-lg text-sm min-w-[240px]"
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password" className="">
            <div className='flex gap-1 items-start'>
            <KeyIcon className='w-5 h-5  mt-0.5' />
            <p className='pb-2'>Password</p>
            </div>
            <input
              className="px-2 py-2 rounded-lg text-sm min-w-[240px]"
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          </div>
          <div className='mx-auto text-center'>
            <Button type="submit" variant="large">Sign in</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
