"use client"

import { Noto_Serif } from 'next/font/google'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

import signUp from '@/utils/auth/signUp'

import SignUpForm from '../components/templates/SignUpForm'
import type { SignUp } from '../libs/schema/SignUp'

const NotoSerif = Noto_Serif({
  weight: '700',
  preload: false,
})


const SignUpPage = () => {
    const router = useRouter()
  const handleForm = async ({email, password, displayName, file}: SignUp) => {
    const { result, error } = await signUp(
      email,
      password,
      displayName,
      file,
    )

    if (error) {
      toast.error("エラーが発生しました")
    }

    return router.push('/')
  }
  return (
    <div className="container px-3 mx-auto py-10 md:py-20 md:grid h-screen content-center">
      <div className="h-4/5">
        <h1 className="text-white text-center mb-4 font-extrabold text-[60px] max-md:text-3xl ">
          好きな話題で
          <br className="lg:hidden" />
          世界とつながろう。
        </h1>
        <div className="pb-10">
          <div className="flex items-center justify-between gap-3 md:gap-20 max-w-3xl mx-auto  max-md:flex-col max-h-[700px]">
            <div>
              <p
                className={`text-[500px] text-white ${NotoSerif.className} hidden md:block`}
              >
                Σ
              </p>
            </div>
            <div>
              <SignUpForm onValid={handleForm} />
            </div>
          </div>
        </div>
        <p className="text-center font-bold text-white">
          アカウントをお持ちの方は、
          <Link href="/signIn" className="border-b-2">
            こちらからログイン
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUpPage
