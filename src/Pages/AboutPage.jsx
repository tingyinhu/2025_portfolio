import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import AboutHeroShape from "../Assets/images/About/AboutHeroShape.json";
import HeroSection from "../Components/global/HeroSection";
import WhatIDo from "../Components/sections/About/WhatIDo";
import HowISeeThings from "../Components/sections/About/HowISeeThings";
import CV from "../Assets/files/CV.pdf"; 

const AboutPage = () => {
  const navigate = useNavigate();

  const handleCVClick = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Ellie_CV.pdf"; 
    link.click();
  };

  return (
    <main className="about-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title="About Me"
        subtitle="I thrive on challenges—they’ve shaped who I am."
        description="My journey has been shaped by curiosity and adaptability. 
From managing fashion projects in Taiwan to starting fresh in Canada, I’ve embraced challenges that sharpened my creativity and teamwork. Each experience fuels my passion for designing versatile, meaningful solutions that connect with people."
        buttonText="Download My CV"
        onButtonClick={handleCVClick} 
        animation={<Lottie animationData={AboutHeroShape} />}
      />

      <WhatIDo />

      <HowISeeThings />
    </main>
  );
};

export default AboutPage;
