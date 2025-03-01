import React from "react";
import Lottie from "lottie-react";
import PortfolioHeroShape from "../Assets/images/Portfolio/PortfolioHeroShape.json";
import HeroSection from "../Components/global/HeroSection";
import Filter from "../Components/sections/Portfolio/Filter";

const PortfolioPage = () => {
  return (
    <main className="portfolio-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title="My Creative Path"
        subtitle="A journey of ideas, growth, and design. "
        description="Each project is a chapter in my design journey—showcasing creativity, problem-solving, and collaboration. Take a look at the work I’m proud of:"
        animation={<Lottie animationData={PortfolioHeroShape} />}
      />
      
    <Filter />

    

    </main>
  );
};

export default PortfolioPage;
