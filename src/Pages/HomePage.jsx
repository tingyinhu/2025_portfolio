import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n"; 
import Lottie from "lottie-react";

import HomeHeroShape from "../Assets/images/Home/HomeHeroShape.json";
import HeroSection from "../Components/global/HeroSection";
import MyToolKit from "../Components/sections/Home/MyToolkit";
import MyProjects from "../Components/sections/Home/MyProjects";
import LetsCreateTogether from "../Components/sections/Home/LetsCreateTogether";

const HomePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/about");
  };

  return (
    <main className="home-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title={t("home.title")}
        subtitle={t("home.subtitle")}
        description={t("home.description")}
        numbers={t("home.numbers", { returnObjects: true })}
        buttonText={t("home.buttonText")}
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
