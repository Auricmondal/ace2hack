import { Avatar } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Button } from '../components/ui/button'

const videos = () => {
  return (
    <div className='mb-32'>
      <div className=' h-full flex flex-col md:flex-row m-4 gap-4 '>
      <video width="320" height="240" controls preload="none" className='w-full lg:w-[60%]  rounded-md flex-shrink-0 '>
      <source src="/assets/history.mp4" type="video/mp4" />
      <track
        src="/assets/history.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>

    <div className='h-[90vh] w-full max-w-[100%]  p-4 bg-gray-300 rounded-md flex flex-col gap-2 relative overflow-y-auto'>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        <Card className='flex items-center gap-2 p-4'>
          <Avatar className='bg-black'/>
          Hi
        </Card>
        
        <div className="flex w-full items-center max-w-lg space-x-2 fixed bottom-4">
      <Input type="text" placeholder="I have a doubt..." />
      <Button type="submit">Send</Button>
    </div>
      </div>
      </div>

      
    </div>
  )
}

export default videos