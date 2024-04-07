

"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from './ui/button'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import Spline from '@splinetool/react-spline';

const HeroSection = ({
  title='Welcome to EduRAAP',
  description='We make learning easy and fun!',
  action='/',
  bgimgUrl=`bg-[url('/assets/bannerimg.jpg')]`,
}) => {
  const router = useRouter();

  const canvas = document.getElementById('canvas3d');
  return (
    <div
      className={`
     w-full 
     h-[70vh]
     lg:h-[80vh]
     bg-[#141414]
     text-white
     flex
     justify-between
    `}
    >
      <div className="flex flex-col justify-center items-center h-full gap-8 md:items-start lg:px-16">
        <div className="flex flex-col justify-center items-center md:items-start max-w-[90%] ">
        <h1 className="font-bold text-[32px] lg:text-[64px]">Welcome to EduRaap</h1>
      <p className="text-center">Your one stop buddy to rocket launch your educational journey!</p>
        </div>
     
      <Button variant='default' className='flex justify-between transition ease-in-out duration-300 hover:w-40 '>Start Learning <KeyboardArrowRightRoundedIcon/></Button>
      </div>
      <div className="hidden lg:inline-block flex-shrink-0 w-[40%]">

      <Spline scene="https://prod.spline.design/MhiuxJWSvZuhtKyQ/scene.splinecode" />
      </div>

    </div>
  );
};

export default HeroSection;