import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";
import Lottie from "lottie-react";
import SmileyFace from "../../../Assets/images/About/smileyFace.svg";
import BrandingIcon from "../../../Assets/images/About/BrandingIcon.json";
import VisualDesignIcon from "../../../Assets/images/About/VisualDesignIcon.json";
import DigitalDesignIcon from "../../../Assets/images/About/DigitalDesignIcon.json";
import AnimatedText from "../../ui/AnimatedText";

const services = [
  {
    id: "branding",
    icon: BrandingIcon,
  },
  {
    id: "visualDesign",
    icon: VisualDesignIcon,
  },
  {
    id: "digitalDesign",
    icon: DigitalDesignIcon,
  },
];

const WhatIDo = () => {
  const { t } = useTranslation();
  return (
    <section className="flex flex-col items-center justify-center rounded-full w-full px-2 py-20 my-10 bg-yellow">
      {/* Smiley Face */}
      <img src={SmileyFace} alt="Smiley face" className="w-36 h-36 mb-8" />

      {/* Title & Description */}
      <AnimatedText
        text={t("about.whatIdo")}
        className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2"
        tag="h2"
      />

      <p className="font-description font-light text-black text-center my-6 text-sm-p md:text-md-p lg:text-lg-p ">
        {t("about.whatIdoDes")}
      </p>

      {/* Service */}
      <div className="space-y-10 mt-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex items-center justify-start space-x-4"
          >
            <div className="flex items-center justify-center">
              <Lottie
                animationData={service.icon || {}}
                className="w-20 h-20 md:w-24 md:h-24"
              />
            </div>
            <div className="text-left">
              <h3 className="font-title font-medium text-black text-sm-h3 md:text-md-h3 lg:text-lg-h3">
                {t(`about.services.${service.id}.title`)}
              </h3>
              <p className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p">
                {t(`about.services.${service.id}.description`)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="my-10">
        <Link to="/portfolio">
          <Button size="primary" color="blue">
            {t("about.seeMywork")}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhatIDo;
