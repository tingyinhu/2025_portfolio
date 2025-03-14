import React from "react";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import Lottie from "lottie-react";
import HowISeeThingsShape from "../../../Assets/images/About/HowISeeThingsShape.json";
import AnimatedText from "../../ui/AnimatedText";

const HowISeeThings = () => {
  return (
    <section className="flex flex-col items-center py-20 md:flex-row md:justify-between">
      {/* Content */}
      <div className="md:w-1/2 text-left">
        <AnimatedText
          text="How I See Things"
          className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2"
          tag="h2"
        />
        <p className="font-description font-light text-black text-sm-p my-6 md:pr-10 md:text-md-p lg:text-lg-p">
          Take a deep breath. Every task is a chance to discover something
          new—like seasoning a dish, where each element adds unique flavour.
        </p>
        <p className="font-description font-light text-black text-sm-p mb-6 md:pr-10 md:text-md-p lg:text-lg-p">
          I believe in blending creativity, teamwork, and fun to make ideas
          shine. Let’s connect and create something great together!
        </p>

        {/* Buttons */}
        <div className="my-10 flex gap-4">
          <a href="mailto:yin5683@gmail.com">
            <Button size="primary" color="orange">
              Contact Me
            </Button>
          </a>
        </div>
      </div>

      {/* Image */}
      <div className="flex justify-center md:w-1/2">
        <Lottie
          animationData={HowISeeThingsShape}
          className="w-70 h-70 md:w-80 md:h-80"
        />
      </div>
    </section>
  );
};

export default HowISeeThings;
