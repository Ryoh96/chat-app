import Link from 'next/link'
import React from 'react'

import SignInForm from '../components/templates/SignInForm'

const SignInPage = () => {
  return (
    <div className="container px-3 mx-auto py-10">
      <h1 className="text-3xl text-center mb-4">ログイン</h1>
      <p className="text-center">
        アカウントをお持ちでない方は、
        <Link href="/signUp">こちらから新規登録</Link>
      </p>
      <div>
        <div className="flex items-center justify-between gap-3 max-w-3xl mx-auto">
          <div>
            <p className="text-[400px]">Σ</p>
          </div>
          <div>
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignInPage
