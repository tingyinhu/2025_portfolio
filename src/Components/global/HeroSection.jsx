import React from "react";
import Button from "../ui/Button";


const HeroSection = ({
  title,
  subtitle,
  description,
  numbers,
  buttonText,
  animation,
  onButtonClick,
}) => {
  return (
    <section className="py-10">
      {/* Logo */}
      <div class="hidden md:block">
        <img
          src="/logo.svg"
          alt="I am Ellie. A designer who adapts, innovates, and creates."
          class="py-10 w-20 h-auto hover:filter hover:filter-[brightness(0)_saturate(100%)_invert(39%)_sepia(100%)_saturate(2844%)_hue-rotate(2deg)_brightness(104%)_contrast(103%)]"
        />
      </div>
      
      {/* Animation */}
      {animation && (
        <div className="block mx-auto lpb-10 h-auto w-64 md:absolute md:top-20 md:right-20 md:w-72">
          {animation}
        </div>
      )}

      {/* Title */}
      {title && (
        <h1 className="font-title font-semibold text-black text-sm-h1 md:text-md-h1 lg:text-lg-h1">
          {title}
        </h1>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="font-playfair font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2">
          {subtitle}
        </p>
      )}

      {/* Description */}
      {description && (
        <p className="font-outfit font-light text-black max-w-2xl mt-3 md:mt-6 text-sm-p md:text-md-p lg:text-lg-p">
          {description}
        </p>
      )}

      {/* Numbers */}
      {numbers && (
        <div className="flex gap-20 mt-6 md:mt-12">
          {numbers.map((number, index) => (
            <div key={index}>
              <p className="font-title font-semibold text-blue text-sm-h2 md:text-md-h2 lg:text-lg-h2">
                {number.value}
              </p>
              <p className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p">
                {number.label}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Button */}
      {buttonText && (
        <div className="mt-12">
          <Button size="primary" color="blue" onClick={onButtonClick}>
            {buttonText}
          </Button>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
