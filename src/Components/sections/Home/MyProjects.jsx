import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";
import Lottie from "lottie-react";
import BrandingCategory from "../../../Assets/images/Home/BrandingCategory.json";
import CaseStudyCategory from "../../../Assets/images/Home/CaseStudyCategory.json";
import VisualCategory from "../../../Assets/images/Home/VisualCategory.json";
import WebCategory from "../../../Assets/images/Home/WebCategory.json";
import BrandingIcon from "../../../Assets/icon/BrandingIcon.svg";
import CaseStudyIcon from "../../../Assets/icon/CaseStudyIcon.svg";
import VisualDesignIcon from "../../../Assets/icon/VisualIcon.svg";
import WebDesignIcon from "../../../Assets/icon/WebIcon.svg";
import AnimatedText from "../../ui/AnimatedText";

const MyProjects = () => {
  const containerRef = useRef(null);
  const refs = useRef({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  const categories = [
    {
      id: "Branding",
      color: "orange",
      textColor: "white",
      btnColor: "blue",
      animation: BrandingCategory,
      icon: BrandingIcon,
    },
    {
      id: "CaseStudy",
      color: "yellow",
      textColor: "black",
      btnColor: "blue",
      animation: CaseStudyCategory,
      icon: CaseStudyIcon,
    },
    {
      id: "VisualDesign",
      color: "blue",
      textColor: "white",
      btnColor: "orange",
      animation: VisualCategory,
      icon: VisualDesignIcon,
    },
    {
      id: "WebDesign",
      color: "green",
      textColor: "white",
      btnColor: "orange",
      animation: WebCategory,
      icon: WebDesignIcon,
    },
  ];

  const scrollToCategory = (id) => {
    const categoryElement = refs.current[id];
    if (categoryElement && containerRef.current) {
      containerRef.current.scrollTo({
        left: categoryElement.offsetLeft - containerRef.current.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-10">
      <AnimatedText
        text={t("home.myprojects")}
        className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2"
        tag="h2"
      />

      <div className="w-full overflow-x-auto pb-2 mt-6">
        <div className="flex gap-2 mb-6 md:gap-4 w-max">
          {categories.map((category) => (
            <Button
              key={category.id}
              color={category.color}
              outline
              size="secondary"
              icon={
                <img
                  src={category.icon}
                  alt={t(`home.${category.id}.title`)}
                  className="w-5 h-5"
                />
              }
              onClick={() => scrollToCategory(category.id)}
            >
              {t(`home.${category.id}.title`)}
            </Button>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory md:gap-8"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            ref={(el) => (refs.current[category.id] = el)}
            className={`flex flex-col md:flex-row items-center p-6 rounded-2xl w-full min-w-[300px] md:min-w-[600px] bg-${category.color} snap-start`}
          >
            <div className="w-full lg:w-1/2">
              <Lottie animationData={category.animation} loop={true} />
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <h3
                className={`font-title font-medium text-black mb-2 text-sm-h3 md:text-md-h3 lg:text-lg-h3 text-${category.textColor}`}
              >
                {t(`home.${category.id}.title`)}
              </h3>
              <p
                className={`font-description font-light text-black mb-6 text-sm-p md:text-md-p text-${category.textColor}`}
              >
                {t(`home.${category.id}.description`)}
              </p>

              <Button
                size="secondary"
                color={category.btnColor}
                onClick={() => navigate(`/portfolio?category=${category.id}`)}
              >
                {t("home.seeMyWork")}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default MyProjects;
