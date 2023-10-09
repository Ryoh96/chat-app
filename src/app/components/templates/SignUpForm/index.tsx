'use client'
import { useRouter } from 'next/navigation'
import type { FormEvent } from 'react'
import React from 'react'

import signUp from '@/utils/auth/signUp'

function SignUpForm() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [displayName, setDisplayName] = React.useState('')
  const [photoFile, setPhotoFile] = React.useState<File | null>(null)
  const router = useRouter()

  const handleForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { result, error } = await signUp(
      email,
      password,
      displayName,
      photoFile,
    )

    if (error) {
      return console.log(error)
    }

    return router.push('/')
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
    }
  }
  return (
    <div className="border border-slate-400 rounded shadow">
      <div className="px-4 py-5 rounded shadow">
        <p className="mb-2 text-xl">ユーザ登録</p>
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
          <label htmlFor="password">
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
          <label htmlFor="name">
            <p>Name</p>
            <input
              onChange={(e) => setDisplayName(e.target.value)}
              required
              type="text"
              name="displayName"
              id="name"
              placeholder="ユーザ名"
            />
          </label>
          <label htmlFor="photo">
            <p>ユーザー画像</p>
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </label>
          <br />
          <button type="submit" className="bg-gray-100 p-2 cursor-pointer">
            Sign up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpForm
