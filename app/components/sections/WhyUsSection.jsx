import React from "react";
import Section from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const WhyUsSection = () => {
  const  datas = [
    {
      value: "gamification",
      title: "Gamification",
      desc:'Embark on a journey of learning through the exciting realm of gamification. Dive into interactive challenges, quests, and rewards that transform education into an immersive and enjoyable experience. Level up your skills, earn badges, and compete with friends, all while achieving your learning objectives in a fun and engaging way'
    },
    {
      value: "interactiveClass",
      title: "Interactive Class",
      desc:'Join our Live Interactive Class where we offer engaging Zoom sessions across a range of courses. Our experienced instructors provide dynamic lessons aimed at ensuring a comprehensive understanding of the subject matter. Moreover, we dedicate sessions specifically for clearing doubts, ensuring every student receives the assistance they need to succeed.'
    },
    {
      value: "scoresystem",
      title: "Scoring System",
      desc:`Experience the thrill of progress with our Points Increment on Task Completion feature. Each completed task boosts your points, driving you closer to your goals. Whether its learning a new skill, completing assignments, or achieving milestones, our system rewards your dedication and effort, motivating you to reach new heights`
    },
   
   
  ]
  const body = (
    <div className="grid gap-2 grid-rows-1 lg:grid-cols-3 max-w-[1080px] w-[100%] pt-4">
      {
        datas.map((data,index)=>(

       
      <Card className='max-w-[900px] w-full'>
        <CardHeader>
          <CardTitle className='text-center pb-2'>{data.title}</CardTitle>
          <CardDescription className='line-clamp-4'>{data.desc}</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button variant='secondary' className='w-full'>Explore</Button>
        </CardFooter>
      </Card>
       ))
      }
    </div>
  );
  return (
    <Section title={"Why Us?"} useButton={false} key={"whyussec"} body={body} />
  );
};

export default WhyUsSection;
