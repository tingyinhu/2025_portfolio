import { useTranslation } from "react-i18next";
import "../i18n"; 
import Lottie from "lottie-react";
import PortfolioHeroShape from "../Assets/images/Portfolio/PortfolioHeroShape.json";
import HeroSection from "../Components/global/HeroSection";
import Filter from "../Components/sections/Portfolio/Filter";

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <main className="portfolio-page">
      <HeroSection
        logo={<img src="/logo.svg" alt="Logo" className="h-12" />}
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
        description={t("portfolio.description")}
        animation={<Lottie animationData={PortfolioHeroShape} />}
      />
      
    <Filter />

    

    </main>
  );
};

export default PortfolioPage;
