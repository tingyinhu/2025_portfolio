import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import anime from "animejs";
import enIcon from "../../Assets/icon/en-icon.svg";
import zhIcon from "../../Assets/icon/zh-icon.svg";

const LanguageSwitcher = () => {
  const iconRef = useRef(null);
  const { i18n } = useTranslation();

  const currentLang = i18n.language;
  const isEN = currentLang === "en";

  const handleSwitch = () => {
    anime({
      targets: iconRef.current,
      translateY: -20,
      opacity: 0,
      duration: 250,
      easing: "easeInOutQuad",
      complete: () => {
        const nextLang = isEN ? "zh" : "en";
        i18n.changeLanguage(nextLang);
        anime({
          targets: iconRef.current,
          translateY: [20, 0],
          opacity: [0, 1],
          duration: 250,
          easing: "easeInOutQuad",
        });
      },
    });
  };

  return (
    <button
      onClick={handleSwitch}
      className="flex flex-col items-center justify-center cursor-pointer hover:brightness-120"
    >
      <span className="font-title font-light text-orange text-[14px]">
        {isEN ? "EN" : "中文"}
      </span>
      <div className="bg-orange rounded-full w-10 h-10 flex items-center justify-center">
        <div ref={iconRef} className="w-8 h-8 flex items-center justify-center">
          <img
            src={isEN ? enIcon : zhIcon}
            alt="Lang icon"
            className="w-6 h-6"
          />
        </div>
      </div>
    </button>
  );
};

export default LanguageSwitcher;
