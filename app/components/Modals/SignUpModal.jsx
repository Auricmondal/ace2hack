'use client'
import useSignupModal from '@/app/hooks/useSignupModal';
import { SignUp } from '@clerk/clerk-react'
import React from 'react'
import Modal from './Modal';

const SignUpModal = () => {
  const LoginModal = useSignupModal();
    const body =(
        <SignUp/>
    )
  return (
    <Modal
        isOpen={LoginModal.isOpen}
        onClose={LoginModal.onClose}
        body={body}
    />
  )
}

export default SignUpModal