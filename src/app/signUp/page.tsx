import Link from 'next/link'
import React from 'react'

import SignUpForm from '../components/templates/SignUpForm'

const SignUpPage = () => {
  return (
    <div className='container px-3 mx-auto py-10'>
      <h1 className='text-3xl text-center mb-4'>
        新規登録
      </h1>
      <p className='text-center'>アカウントをお持ちの方は<Link href="/signIn">こちらからログイン</Link></p>
      <div>
        <div className='flex items-center justify-between gap-3 max-w-3xl mx-auto'>
         <div>
          <p className='text-[400px]'>Σ</p>
         </div>
        <div>
          <SignUpForm/>
        </div>
      </div>
       </div>
    </div>
  )
}

export default SignUpPage
