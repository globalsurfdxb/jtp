"use client"
import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import OurExpertise from "./OurExpertise"
import ArchitecturalExcellence from "./ArchitecturalExcellence"
import News from "./News"
import OurTeam from "./OurTeam"
import Footer from "./Footer"

const LandingPage = () => {
  return (
    <>

        <HeroSection />
        <AboutSection />
        <OurExpertise/>
        <ArchitecturalExcellence/>
        <News/>
        <OurTeam/>
        <Footer/>
    </>
  );
};

export default LandingPage;
