
import Image from "next/image";
import Section from "./components/sections/Section";
import Banner from "./components/HeroSection";
import SubjectsSection from "./components/sections/SubjectsSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import Footer from "./components/Footer";




async function getData() {
  const res = await fetch('https://opentdb.com/api.php?amount=10&category=19&difficulty=easy&type=multiple')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}
   
  export default async function Page() {
    
    const data = await fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple')
    console.log(data)
  return (
    <main >
      {/* <Banner action="/dashboard"/> */}
      <div className="bg-[#1B54DA] pb-4">
      <SubjectsSection/>

      </div>
      <div className="bg-[#141414]">

      <WhyUsSection/>
      </div>
      <Footer/>
    </main>
  
  );
}

