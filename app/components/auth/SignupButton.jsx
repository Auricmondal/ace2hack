'use client'

import useSignupModal from '@/app/hooks/useSignupModal';
import React from 'react'

const SignupButton = ({children, className}) => {

  const signupModal=useSignupModal();

  const handleOnClick= ()=>{
    if(signupModal.isOpen)
    signupModal.onClose()
    if(!signupModal.isOpen)
    signupModal.onOpen()
  }
  return (
    <div onClick={handleOnClick} className={className} >{children}</div>
  )
}

export default SignupButton