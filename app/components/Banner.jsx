

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from './ui/button'

const Banner = ({
  title='Welcome to LearnAtEase',
  description='We make learning easy and fun!',
  action='/',
  bgimgUrl=`bg-[url('/assets/bannerimg.jpg')]`,
}) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(action)}
      className={`
      ${bgimgUrl}
      m-4
      rounded-sm
      h-[318px]
      bg-cover
      bg-center
      flex
      items-center
      text-center
      sm:text-left
      pl-4
      pr-2
      md:pl-12
      lg:px-16
      md:pr-8
      text-white
      relative
    `}
    >
      <div
        className="
        rounded-sm
      bg-gradient-to-r 
      from-black 
      to-black 
      opacity-60  
      h-full 
      w-full 
      absolute 
      left-0
      "
      ></div>
      <div className="z-10 ">
        
        <h1
          className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        font-extrabold
        mt-2
        mb-4
      "
        >
          {title}
        </h1>
        <p
          className="
      max-w-2xl 
      text-xs 
      text-gray-200 
      mb-8
      line-clamp-3
      "
        >
          {description}
        </p>
        <Button variant='default'>Start Learning</Button>
      </div>
    </div>
  );
};

export default Banner;