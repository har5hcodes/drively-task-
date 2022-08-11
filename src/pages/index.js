import React, { useState } from "react";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "../components/InfoSection/Data";
import Services from "../components/Services";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import FeatureSection from "../components/FeaturesSection";
import HeroSection1 from "../components/HeroSection1";
import { heroObj } from "../components/HeroSection1/Data";
import ModalSection from "../components/ModalSection";
 
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection1 {...heroObj} />
      <FeatureSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <Services />
      <CardSection /> 
      <Footer />
      <ModalSection/> 
    </>
  );
};

export default Home;
