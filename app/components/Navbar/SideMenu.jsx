"use client";
import React, { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "../ui/button";
import LoginButton from "../auth/LoginButton";
import SignupButton from "../auth/SignupButton";
import useSideMenuModal from "@/app/hooks/useSideMenuModal";
import Link from "next/link";
import { UserButton, useAuth, useUser } from "@clerk/nextjs";
import { Combobox } from "../Combobox";
import { usePathname } from "next/navigation";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import useMode from "@/app/hooks/useMode";
import Myprogress from "../Modals/Myprogress";

const SideMenu = () => {
  const OpenSidemenu = useSideMenuModal();
  const { userId, sessionId, getToken } = useAuth();
  const [loggedIn, setLoggedIn] = useState(userId)
  const { isLoaded, isSignedIn, user } = useUser();

  const switchMode= useMode();
  const [isDark, setisDark] = useState(switchMode.isOpen)

  const pathname = usePathname()

  const handleMode = ()=>{
    if(switchMode.isOpen){
      switchMode.onClose()
      setisDark(switchMode.isOpen)
    }
    if(!switchMode.isOpen){
      switchMode.onOpen()
      setisDark(switchMode.isOpen)
    }
  }

  const handlesidemenuOpen = ()=>{
    if(OpenSidemenu.isOpen)
    OpenSidemenu.onClose()
    if(!OpenSidemenu.isOpen)
    OpenSidemenu.onOpen()

  }

  const  datas = [
    {
      value: "computer",
      label: "Computer",
    },
    {
      value: "mathematics",
      label: "Mathematics",
    },
    {
      value: "sports",
      label: "Sports",
    },
    {
      value: "history",
      label: "History",
    },
   
  ]

  const navLoggedout = (
    <div className="flex w-full justify-between gap-4">
      <LoginButton className='w-full'>
        <Button className="w-full" variant="secondary">
          Sign In
        </Button>
      </LoginButton>
      <SignupButton className={'w-full'}>
        <Button className="w-full" variant="default">
          Sign Up
        </Button>
      </SignupButton>
    </div>
  );

  const navloggedin = (user&&(
    <div className="flex items-center gap-4">
      <UserButton afterSignOutUrl="/"/>
      <h5 className='text-lg font-medium'>Hello, {user.fullName}</h5>
      </div>)
    
  );

  const body =(pathname=='/'?(<div className="fixed  top-0 h-full w-fullbg-opacity-20 z-50">
    <div className="w-full md:max-w-[500px] h-full bg-[#141414] fixed top-0 shadow-md text-white">
      <div className="px-4 py-16 flex flex-col h-full justify-between">
        <div className="p-2 bg-[#212121] shadow-md absolute right-4 top-4 rounded-md cursor-pointer" onClick={handlesidemenuOpen}>
          <ArrowBackIosNewIcon />
        </div>
        <div className="flex flex-col gap-4">
        
          <Button
            className="w-full  flex justify-start"
            variant="secondary"
            onClick={handlesidemenuOpen}
            asChild
          >
            <Link href="/">Home</Link>
          </Button>
          <Button
            className="w-full  flex justify-start"
            variant="secondary"
            onClick={handlesidemenuOpen}
          >
            <Link href="/dashboard">Learn</Link>
          </Button>
          <Button
            className="w-full flex justify-start"
            variant="secondary"
            onClick={handlesidemenuOpen}
          >
            <Link href="/videos">Videos</Link>
          </Button>
          
        </div>
        <div className="">{!loggedIn ? navLoggedout : navloggedin}</div>
      </div>
      
        
    </div>
    </div>
  ):(<div className="fixed top-0 h-full w-full bg-black bg-opacity-20  z-50">
  <div className=" w-full bg-[#141414] md:max-w-[500px] h-full fixed top-0 shadow-md ">
    
    <div className="px-4 py-4 flex flex-col h-full ">
      <div className="flex justify-between items-center">
      <p className='font-bold text-white' onClick={()=>Router.push('/')}><span className='text-[#1B54DA]'>Edu</span>Raap</p>
      
    <span className="p-2 bg-white shadow-md  top-4 rounded-md cursor-pointer" onClick={handlesidemenuOpen}>
        <ArrowBackIosNewIcon />
      </span> 
      </div>
      <div className="flex justify-between flex-col h-full">
      <div className="flex flex-col gap-4">
      <Combobox
      datas={datas}
      useDia={true}
      />
      
      </div>
      <div className="flex  items-center gap-2">
      <Myprogress/>
      </div>
      </div>
      </div>
  </div>
  </div>
))

  

  useEffect(() => {
    setLoggedIn(userId)
  }, [userId])

if(!OpenSidemenu.isOpen){
  return null
}

  return (
    <>
    {body}
    </>
  );
};

export default SideMenu;
