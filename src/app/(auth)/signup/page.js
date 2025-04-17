
import React from 'react'
import { SignUpForm } from './components/SIgnUpForm'
import Image from "next/image";
const SignUpPage = () => {
  return (
    <div className="flex h-svh">
    <div className="w-1/2 flex items-center justify-center">
      <div className="w-full max-w-md p-8">
      <SignUpForm/>
      </div>
    </div>

    <div className="w-1/2 relative hidden md:block">
      <Image
        src='/assets/Rectangle1082.png'
        alt="Turn ideas into reality"
        layout="fill"
        objectFit="cover"
        className="rounded-none"
      />
    </div>
  </div>
  )
}

export default SignUpPage