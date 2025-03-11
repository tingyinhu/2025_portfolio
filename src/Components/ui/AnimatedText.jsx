import React, { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import anime from "animejs";

// AnimatedText Component
const AnimatedText = ({ text, className, tag = "h1" }) => {
  const textRef = useRef(null);
  const { ref, inView } = useInView({ threshold: 0.3 }); // Removed triggerOnce

  useEffect(() => {
    if (inView && textRef.current) {
      // Split the text into spans for each letter
      textRef.current.innerHTML = text.replace(/\S/g, "<span class='letter'>$&</span>");

      // Animate the letters
      anime.timeline().add({
        targets: textRef.current.querySelectorAll(".letter"),
        translateY: [30, 0],
        opacity: [0, 1],
        easing: "easeOutElastic(1, .6)",
        duration: 800,
        delay: (el, i) => 50 * i,
      });
    } else if (textRef.current) {
      // Reset the text when out of view
      textRef.current.innerHTML = text;
    }
  }, [inView, text]);

  // Dynamically create the heading element based on the `tag` prop
  const HeadingTag = tag;

  return (
    <HeadingTag ref={ref} className={`${className}`}>
      <span ref={textRef}>{text}</span>
    </HeadingTag>
  );
};

export default AnimatedText;