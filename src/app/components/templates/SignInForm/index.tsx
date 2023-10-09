'use client'
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
    <div className="border border-slate-400 rounded shadow">
      <div className="px-4 py-5 rounded shadow">
        <p className="mb-2 text-xl">ログイン</p>
        <form onSubmit={handleForm} className="form">
          <label htmlFor="email">
            <p>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label htmlFor="password" className="">
            <p>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <br />
          <Button type="submit">Sign in</Button>
        </form>
      </div>
    </div>
  )
}

export default SignInForm
