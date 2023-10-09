import { Noto_Serif } from "next/font/google"
import Link from 'next/link'
import React from 'react'

import SignUpForm from '../components/templates/SignUpForm'

const NotoSerif = Noto_Serif({
  weight: "700",
  preload: false
})

const SignUpPage = () => {
  return (
    <div className="container px-3 mx-auto py-10 md:py-20 md:grid h-screen content-center">
      <div className="h-4/5">
      <h1 className="text-white text-center mb-4 font-extrabold text-[60px] max-md:text-3xl ">チャットで<br className="lg:hidden" />世界とつながろう。</h1>
      <div className="pb-10">
        <div className="flex items-center justify-between gap-3 md:gap-20 max-w-3xl mx-auto  max-md:flex-col max-h-[700px]">
          <div>
            <p className={`text-[500px] text-white ${NotoSerif.className} hidden md:block`}>Σ</p>
          </div>
          <div>
            <SignUpForm />
          </div>
        </div>
      </div>
      <p className="text-center font-bold text-white">
        アカウントをお持ちの方は、
        <Link href="/signIn" className='border-b-2'>こちらからログイン</Link>
      </p>
      </div>
    </div>
  )
}

export default SignUpPage
