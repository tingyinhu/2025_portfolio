// HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import HomeHeroShape from "../Assets/images/Home/HomeHeroShape.json";
import HeroSection from "../Components/global/HeroSection";
import MyToolKit from "../Components/sections/Home/MyToolkit";
import MyProjects from "../Components/sections/Home/MyProjects";
import LetsCreateTogether from "../Components/sections/Home/LetsCreateTogether";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <main className="home-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title="Hello, I’m Ellie."
        subtitle="A designer who adapts, innovates, and creates."
        description="Design is where beauty meets purpose. I focus on creating harmony and efficiency in every detail. For me, it’s not just about how things look—it’s about how they work together to make an impact."
        numbers={[
          { value: "5+", label: "Years of experience" },
          { value: "20+", label: "Projects done" },
        ]}
        buttonText="Get to Know Me Better"
        onButtonClick={handleButtonClick}
        animation={<Lottie animationData={HomeHeroShape} />}
      />

      <MyToolKit />

      <MyProjects />

      <LetsCreateTogether />
      
    </main>
  );
};

export default HomePage;
