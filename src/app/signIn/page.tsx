'use client'

import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

import signIn from '@/utils/auth/signIn'

import SignInForm from '../components/templates/SignInForm'
import type { LogIn } from '../libs/schema/LogIn'

const NotoSerif = Noto_Serif({
  weight: '700',
  preload: false,
})

const SignInPage = () => {
  const router = useRouter()
  const handleForm = async ({ email, password }: LogIn) => {
    const { result, error } = await signIn(email, password)

    if (error) {
      toast.error('メールアドレスが存在しないかパスワードが待ちがています')
    }

    return router.push('/')
  }

  return (
    <div className="container px-3 mx-auto py-20 md:grid h-screen content-center">
      <div className="h-4/5">
        <h1 className="text-white text-center mb-4 font-extrabold text-[60px] max-md:text-3xl ">
          好きな話題で
          <br className="lg:hidden" />
          世界とつながろう。
        </h1>
        <div className="pb-10">
          <div className="flex items-center justify-between gap-3 max-w-3xl mx-auto  max-md:flex-col max-h-[500px]">
            <div>
              <p
                className={`text-[500px] text-white ${NotoSerif.className} hidden md:block pb-10`}
              >
                Σ
              </p>
            </div>
            <div className="pb-10">
              <SignInForm onValid={handleForm} />
            </div>
          </div>
          <p className="text-center font-bold text-white mb-20">
            アカウントをお持ちでない方は、
            <br className="max-[400px]:block  hidden" />
            <Link href="/signUp" className="border-b-2">
              こちらから新規登録
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
