'use client'
import React from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'

const SectionHeader = ({
  title,
useButton,
label,
action
}) => {

  const Router = useRouter();
  return (
    <div className='w-full flex justify-between  max-w-[1080px] items-center'>
      <h4 className='font-medium text-lg'>{title}</h4>
      {useButton&&<Button variant={'ghost'} onclick={()=>Router.push(action)}>{label}</Button>}
    </div>
  )
}

export default SectionHeader