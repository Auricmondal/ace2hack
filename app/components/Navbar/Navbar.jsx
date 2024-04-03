'use client'

import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@/app/components/ui/button"
import LoginButton from '../auth/LoginButton';
import SignupButton from '../auth/SignupButton';
import useSideMenuModal from '@/app/hooks/useSideMenuModal';




const Navbar = () => {

  const [loggedIn, setLoggedIn] = useState(false)

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
  <div className='flex justify-between items-center gap-1'>
    <h5 className='text-sm font-medium'>Hey, John Doe</h5>
    <div className='h-[32px] w-[32px] bg-slate-500 rounded-full'></div>
  </div>
)



  return (
    <nav className='flex justify-between items-center px-4 pt-8 pb-4 border-b-2 '>
        <div className='flex justify-between gap-2 cursor-pointer' onClick={handlesidemenuOpen}>
            <MenuIcon/>
            <p className='font-bold'>Logo</p>
        </div>
        {!loggedIn?navLoggedout:navloggedin}
    </nav>
  )
}

export default Navbar