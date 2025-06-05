import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";
import Button from "../ui/Button";
import AnimatedText from "../ui/AnimatedText";

const HeroSection = ({
  title,
  subtitle,
  description,
  numbers,
  buttonText,
  animation,
  onButtonClick,
}) => {
  const numberRefs = useRef([]);

  const { ref: numbersRef, inView: numbersInView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (numbersInView && numbers?.length) {
      anime({
        targets: numberRefs.current,
        innerHTML: (el) => el.dataset.value,
        round: 1,
        duration: 1500,
        easing: "cubicBezier(.5, .05, .1, .3)",
      });
    } else if (numbers?.length) {
      numberRefs.current.forEach((el) => {
        if (el) {
          el.innerHTML = "0";
        }
      });
    }
  }, [numbersInView, numbers]);

  return (
    <section className="py-10">
      {/* Logo */}
      <div className="hidden md:block">
        <img
          src="/logo.svg"
          alt="I am Ellie. A designer who adapts, innovates, and creates."
          className="py-10 w-20 h-auto hover:filter hover:filter-[brightness(0)_saturate(100%)_invert(39%)_sepia(100%)_saturate(2844%)_hue-rotate(2deg)_brightness(104%)_contrast(103%)]"
        />
      </div>

      {/* Animation */}
      {animation && (
        <div className="block mx-auto pb-10 h-auto w-64 md:absolute md:top-20 md:right-45 md:w-72">
          {animation}
        </div>
      )}

      {/* Animated Title */}
      {title && (
        <AnimatedText
          text={title}
          className="font-title font-semibold text-black text-sm-h1 md:text-md-h1 lg:text-lg-h1"
          tag="h1"
        />
      )}

      {/* Subtitle */}
      {subtitle && (
        <h2 className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2">
          {subtitle}
        </h2>
      )}

      {/* Description */}
      {description && (
        <p className="font-description font-light text-black max-w-2xl mt-3 md:mt-6 text-sm-p md:text-md-p lg:text-lg-p">
          {description}
        </p>
      )}

      {/* Animated Numbers */}
      {numbers && (
        <div ref={numbersRef} className="flex gap-20 mt-6 md:mt-12">
          {numbers.map((number, index) => (
            <div key={index}>
              <p
                ref={(el) => (numberRefs.current[index] = el)}
                data-value={number.value}
                className="font-title font-semibold text-blue text-sm-h2 md:text-md-h2 lg:text-lg-h2"
              >
                0
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