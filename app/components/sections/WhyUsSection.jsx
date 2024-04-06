import React from "react";
import Section from "./Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";

const WhyUsSection = () => {
  const body = (
    <div className="grid gap-2 grid-rows-1 lg:grid-cols-3 max-w-[1080px] w-[100%] pt-4">
      <Card className='max-w-[900px] w-full'>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>Card Description</CardDescription>
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
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>Card Description</CardDescription>
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
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>Card Description</CardDescription>
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
