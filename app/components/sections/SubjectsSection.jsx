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

  const  datas = [
    {
      value: "computer",
      label: "Computer",
      imgUrl:'/assets/comp.png'
    },
    {
      value: "mathematics",
      label: "Mathematics",
      imgUrl:'/assets/maths.jpg'
    },
    {
      value: "sports",
      label: "Sports",
      imgUrl:'/assets/sports.png'
    },
    {
      value: "history",
      label: "History",
      imgUrl:'/assets/history.png'
    },
   
  ]
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
        {datas.map((data, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 max-w-[400px] cursor-pointer text-white">
            <div className="p-1">
              <Card  onClick={()=>{Router.push('/dashboard')}} >
                <CardContent className="flex justify-center p-6 ">
                  <div className='flex flex-col gap-y-2'>
                 <div >
                  <Image
                  className='h-full w-full rounded-sm'
                  src={data.imgUrl}
                  width={500}
                  height={500}
                  alt='Image of code'
                  />
                 </div>
                 <div>
                  <h3 className='text-lg pb-1 text-center font-bold'>{data.label}</h3>
                  
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