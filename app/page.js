
import Image from "next/image";
import Section from "./components/sections/Section";
import Banner from "./components/Banner";
import SubjectsSection from "./components/sections/SubjectsSection";
import WhyUsSection from "./components/sections/WhyUsSection";
import Footer from "./components/Footer";





export default async function  Home() {

  return (
    <main >
      <Banner action="/dashboard"/>
      <SubjectsSection/>
      <WhyUsSection/>
      <Footer/>
    </main>
  );
}
