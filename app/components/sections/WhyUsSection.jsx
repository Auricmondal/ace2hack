import React from "react";
import Section from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const WhyUsSection = () => {
  const body = (
    <div className="grid gap-2 grid-rows-1 lg:grid-cols-3 max-w-[1080px] w-[100%] pt-4">
      <Card className='max-w-[900px] w-full'>
        <CardHeader>
          <CardTitle>Gamification</CardTitle>
          <CardDescription>Embark on a journey of learning through the exciting realm of gamification. Dive into interactive challenges, quests, and rewards that transform education into an immersive and enjoyable experience. Level up your skills, earn badges, and compete with friends, all while achieving your learning objectives in a fun and engaging way.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button variant='secondary' className='w-full'>Explore</Button>
        </CardFooter>
      </Card>

      <Card className='max-w-[900px] w-full'>
        <CardHeader>
          <CardTitle>Live Interactive Class</CardTitle>
          <CardDescription>Join our Live Interactive Class where we offer engaging Zoom sessions across a range of courses. Our experienced instructors provide dynamic lessons aimed at ensuring a comprehensive understanding of the subject matter. Moreover, we dedicate sessions specifically for clearing doubts, ensuring every student receives the assistance they need to succeed.</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button variant='secondary' className='w-full'>Explore</Button>
        </CardFooter>
      </Card>
      <Card className='max-w-[900px] w-full'>
        <CardHeader>
          <CardTitle>Points Increment on task completion</CardTitle>
          <CardDescription>Experience the thrill of progress with our Points Increment on Task Completion feature. Each completed task boosts your points, driving you closer to your goals. Whether it's learning a new skill, completing assignments, or achieving milestones, our system rewards your dedication and effort, motivating you to reach new heights</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button variant='secondary' className='w-full'>Explore</Button>
        </CardFooter>
      </Card>
    </div>
  );
  return (
    <Section title={"Why Us?"} useButton={false} key={"whyussec"} body={body} />
  );
};

export default WhyUsSection;
