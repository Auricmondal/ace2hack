'use client'

import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@/app/components/ui/button"
import LoginButton from '../auth/LoginButton';
import SignupButton from '../auth/SignupButton';
import useSideMenuModal from '@/app/hooks/useSideMenuModal';
import { useRouter } from 'next/navigation';
import { useAuth, useUser } from '@clerk/nextjs';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"





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
    <Avatar>
  <AvatarImage src={user.hasImage?user.imageUrl:''} />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

  </div>)
)



  return (
    <nav className='flex justify-between items-center px-4 pt-8 pb-4 border-b-2 '>
        <div className='flex justify-between gap-2 cursor-pointer' >
            <div onClick={handlesidemenuOpen}>
            <MenuIcon/>

            </div>
            <p className='font-bold' onClick={()=>Router.push('/')}>Logo</p>
        </div>
        {!loggedIn?navLoggedout:navloggedin}
    </nav>
  )
}

export default Navbar