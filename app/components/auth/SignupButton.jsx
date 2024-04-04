'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const SignupButton = ({children, className}) => {

  const Router = useRouter();

  return (
    <div onClick={()=> Router.push('sign-up') } className={className} >{children}</div>
  )
}

export default SignupButton