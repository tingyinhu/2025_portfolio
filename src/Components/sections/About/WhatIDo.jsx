import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Lottie from "lottie-react";
import SmileyFace from "../../../Assets/images/About/smileyFace.svg";
import BrandingIcon from "../../../Assets/images/About/BrandingIcon.json";
import VisualDesignIcon from "../../../Assets/images/About/VisualDesignIcon.json";
import DigitalDesignIcon from "../../../Assets/images/About/DigitalDesignIcon.json";

const services = [
  {
    id: 1,
    title: "Branding",
    description: "Giving personality to businesses.",
    icon: BrandingIcon,
  },
  {
    id: 2,
    title: "Visual Design",
    description: "Crafting eye-catching designs with purpose.",
    icon: VisualDesignIcon,
  },
  {
    id: 3,
    title: "Digital Design",
    description: "Building spaces where creativity meets usability.",
    icon: DigitalDesignIcon,
  },
];

const WhatIDo = () => {
  return (
    <section className="flex flex-col items-center justify-center rounded-full w-full px-2 py-20 my-10 bg-yellow">
      {/* Smiley Face */}
      <img src={SmileyFace} alt="Smiley face" className="w-36 h-36 mb-8" />

      {/* Title & Description */}
      <h2 className="font-title font-medium text-black text-center text-sm-h2 md:text-md-h2 lg:text-lg-h2 ">
        What I Do
      </h2>
      <p className="font-description font-light text-black text-center my-3 text-sm-p md:my-6 md:text-md-p lg:text-lg-p ">
        With 5+ years of experience, I've learned to embrace challenges and keep
        improving with every design.
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
                {service.title}
              </h3>
              <p className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="my-10">
        <Link to="/portfolio">
          <Button size="primary" color="blue">
            See My Work
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default WhatIDo;
