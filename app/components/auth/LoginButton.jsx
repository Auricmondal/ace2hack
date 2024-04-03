'use client'

import React from 'react'
import useLoginModal from '@/app/hooks/useLoginModal';

const LoginButton= React.FC = ({children,className}) => {
  const LoginModal=useLoginModal();

  const handleOnClick= ()=>{
    if(LoginModal.isOpen)
    LoginModal.onClose()
    if(!LoginModal.isOpen)
    LoginModal.onOpen()
  }

  return (
    <div onClick={handleOnClick} className={className} >{children}</div>
  )
}

export default LoginButton