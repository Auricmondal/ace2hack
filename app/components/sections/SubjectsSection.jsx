'use client'
import React from 'react'
import Section from './Section'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SubjectsSection = () => {
  const Router=useRouter()
    const body=(
        <div className='w-full flex justify-center'>
            <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[1080px]"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-w-[400px] cursor-pointer">
            <div className="p-1">
              <Card  onClick={()=>{Router.push('/dashboard')}} >
                <CardContent className="flex justify-center p-6 ">
                  <div className='flex flex-col gap-y-2'>
                 <div >
                  <Image
                  className='h-full w-full rounded-sm'
                  src='/assets/coding.jpg'
                  width={500}
                  height={500}
                  alt='Image of code'
                  />
                 </div>
                 <div>
                  <h3 className='text-lg pb-1'>Title</h3>
                  <p className='text-clip overflow-hidden'>Description Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione magni, molestiae corrupti aut obcaecati incidunt vel ab, illum iure blanditiis laboriosam eaque enim voluptatum?</p>
                 </div>
                 </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>
    )

  return (
    <Section
    title={'Topics'}
    label={'More'}
    useButton={true}
    action={'/'}
    key={'topics'}
    body={body}
    />
  )
}

export default SubjectsSection