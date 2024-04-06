import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { Button } from '../ui/button'
import Image from "next/image";
import QuizeModal from '../Modals/QuizeModal';

const DashCard = ({
    locked=true,
    level,
    time,
    url,
    title,
    description,
}) => {
  return (
    <div className={`relative ${locked?'select-none':''}`}>
      {locked && (
      <span className='text-red-500 absolute z-20 top-[40%] left-[25%]'>Play the previous round to unlock</span>
    )}
    <Card className={`flex gap-2 items-center w-full ${locked?'opacity-30':'cursor-pointer'} ` }  >
    
      <Image
      className="h-full w-[30%] rounded-md"
        src={"/assets/bannerimg.jpg"}
        height={100}
        width={100}
        alt="Image"
      />
    <div className='flex justify-between p-4 w-full'>
    <div >
    <CardContent className="justify-normal flex flex-col items-start">
      <CardTitle>Card Title</CardTitle>
      <CardDescription>Card Description</CardDescription>
    </CardContent>
    <CardFooter>
      {/* {!locked&&(<Button variant="secondary" >Play</Button>)} */}
      {!locked&&(<QuizeModal/>)}
    </CardFooter>
    </div>
    <div className="flex gap-1 flex-col"> 
      <Card className='px-4 py-1 flex justify-center items-center border-red-500 text-red-500 text-[12px]'>
            Hard
      </Card>
      <Card className='px-4 py-1 flex justify-center items-center  text-[12px]'>
            5 Mins
      </Card>
    </div>
    </div>
  </Card>
  </div>
  )
}

export default DashCard