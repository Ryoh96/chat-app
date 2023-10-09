import { Noto_Serif } from "next/font/google"
import Link from 'next/link'
import React from 'react'

import SignInForm from '../components/templates/SignInForm'

const NotoSerif = Noto_Serif({
  weight: "700",
  preload: false
})

const SignInPage = () => {
  return (
    <div className="container px-3 mx-auto py-20 md:grid h-screen content-center">
      <div className="h-4/5">
      <h1 className="text-white text-center mb-4 font-extrabold text-[60px] max-md:text-3xl ">チャットで<br className="lg:hidden" />世界とつながろう。</h1>
      <div className="pb-10">
        <div className="flex items-center justify-between gap-3 max-w-3xl mx-auto  max-md:flex-col max-h-[500px]">
          <div>
            <p className={`text-[500px] text-white ${NotoSerif.className} hidden md:block`}>Σ</p>
          </div>
          <div className="pb-10">
            <SignInForm />
          </div>
        </div>
      <p className="text-center font-bold text-white">
        アカウントをお持ちでない方は、<br className="max-[400px]:block  hidden"/>
        <Link href="/signUp" className='border-b-2'>こちらから新規登録</Link>
      </p>
      </div>
      </div>
    </div>
  )
}

export default SignInPage
