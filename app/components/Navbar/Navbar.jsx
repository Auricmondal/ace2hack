'use client'

import React, { useState } from 'react'
import WidgetsRoundedIcon from '@mui/icons-material/WidgetsRounded';
import { Button } from "@/app/components/ui/button"
import LoginButton from '../auth/LoginButton';
import SignupButton from '../auth/SignupButton';
import useSideMenuModal from '@/app/hooks/useSideMenuModal';
import { useRouter } from 'next/navigation';
import { UserButton, useAuth, useUser } from '@clerk/nextjs';
import { useEffect } from 'react'; 







const Navbar = () => {
  const { userId, sessionId, getToken } = useAuth();
  const [loggedIn, setLoggedIn] = useState(userId)
  const { isLoaded, isSignedIn, user } = useUser();
  const Router= useRouter();

  const OpenSidemenu = useSideMenuModal();

  const handlesidemenuOpen = ()=>{
    if(OpenSidemenu.isOpen)
    OpenSidemenu.onClose()
    if(!OpenSidemenu.isOpen)
    OpenSidemenu.onOpen()

  }

  
  useEffect(() => {
    setLoggedIn(userId)
  }, [userId])
  
  const navLoggedout =(
    <div className='flex justify-between gap-2'>
          <LoginButton>
            <Button variant="secondary">Sign In</Button>
          </LoginButton>
          <SignupButton>
            <Button variant="default">Sign Up</Button>
          </SignupButton>
        
        </div>
  )

const navloggedin =(
  user&& (<div className='flex justify-between items-center gap-2'>
    <h5 className='text-sm font-medium'>Hello, {user.fullName}</h5>
  <UserButton afterSignOutUrl="/"/>
  </div>)
)



  return (
    <nav className='sticky top-0 z-50 bg-[#141414] text-white'>
    <div className='flex justify-between items-center px-4 pt-8 pb-4 border-b-2 border-gray-800'>
        <div className='flex justify-between gap-2 cursor-pointer' >
            <div onClick={handlesidemenuOpen}>
            <WidgetsRoundedIcon/>

            </div>
            <p className='font-bold' onClick={()=>Router.push('/')}><span className='text-[#1B54DA]'>Edu</span>Raap</p>
        </div>
        <div>
        {!loggedIn?navLoggedout:navloggedin}

        </div>
    </div>
    </nav>
  )
}

export default Navbar