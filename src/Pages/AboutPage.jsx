import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n"; 
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

  const { t } = useTranslation();

  return (
    <main className="about-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title={t("about.title")}
        subtitle={t("about.subtitle")}
        description={t("about.description")}
        buttonText={t("about.buttonText")}
        onButtonClick={handleCVClick}
        animation={<Lottie animationData={AboutHeroShape} />}
      />


      <WhatIDo />

      <HowISeeThings />
    </main>
  );
};

export default AboutPage;
