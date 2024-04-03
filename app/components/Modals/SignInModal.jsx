'use client'
import { SignIn } from '@clerk/nextjs'
import React from 'react'
import Modal from './Modal'
import useLoginModal from '@/app/hooks/useLoginModal'

const SignInModal = () => {

    const LoginModal = useLoginModal();
    const body =(
        <SignIn/>
    )
  return (
    <Modal
        isOpen={LoginModal.isOpen}
        onClose={LoginModal.onClose}
        body={body}
    />
  ) 
}

export default SignInModal