import { Card, CardFooter } from '@/components/ui/card'
import React from 'react'
import { Button } from '../ui/button'
import Image from "next/image";
import QuizeModal from '../Modals/QuizeModal';

const DashCard = ({
    locked=true,
    data
}) => {
  return (

    <div className={`relative ${locked?'select-none':''} max-w-[600px] relative`}>
      {locked && (
      <span className='text-red-500 absolute z-20 top-[40%] text-center left-3
       max-w-[90%]'>Play the previous round to unlock</span>
    )}
    <Card className={` gap-2 items-center w-full ${locked?'opacity-30':'cursor-pointer'} bg-[#212121] border-gray-800 ` }  >
    
      <Image
      className=" w-full rounded-md"
        src={"/assets/bannerimg.jpg"}
        height={100}
        width={100}
        alt="Image"
      />
    <div className=' justify-between p-4 w-full '>
    <div >
  
    <CardFooter className='p-0'>
      {/* {!locked&&(<Button variant="secondary" >Play</Button>)} */}
      {!locked&&(<QuizeModal quiz={data}/>)}
    </CardFooter>
    </div>
    <div className="flex gap-1 flex-col absolute top-1 right-1"> 
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