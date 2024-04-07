
import Image from "next/image";
import Section from "./components/sections/Section";
import Banner from "./components/HeroSection";
import SubjectsSection from "./components/sections/SubjectsSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import Footer from "./components/Footer";





   
  export default async function Page() {
    
   
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

