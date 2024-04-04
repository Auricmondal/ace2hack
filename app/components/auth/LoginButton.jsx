'use client'

import React from 'react'
import { useRouter } from 'next/navigation';

const LoginButton = ({children,className}) => {
  const Router = useRouter();


  return (
    <div onClick={()=>Router.push('/sign-in')} className={className} >{children}</div>
  )
}

export default LoginButton