import React from "react";

const Button = ({ size, color, outline, icon, children, onClick }) => {
  // Base
  // Pri font change
  const baseStyles =
    "font-button rounded-full transition-all flex items-center justify-center";

  // Size
  // Default/ Desktop/ Laptop/ Mobile
  let sizeStyles = "";
  if (size === "primary") {
    sizeStyles = `
      h-[40px] px-[20px] py-[16px] text-[16px]
      sm:h-[40px] sm:px-[20px] sm:py-[16px] sm:text-[16px]
      md:h-[45px] md:px-[22px] md:py-[18px] md:text-[18px]
      lg:h-[50px] lg:px-[25px] lg:py-[20px] lg:text-[18px]
    `;
  } else if (size === "secondary") {
    sizeStyles = `
      h-[30px] px-[10px] text-[14px]
      sm:h-[35px] sm:px-[15px] sm:text-[14px]
      md:h-[37px] md:px-[17px] md:text-[16px]
      lg:h-[40px] lg:px-[20px] lg:text-[16px]
    `;
  }

  // Color
  let colorStyles = "";
  if (color === "blue") {
    colorStyles = "bg-blue text-white hover:brightness-120 cursor-pointer";
  } else if (color === "orange") {
    colorStyles = "bg-orange text-white hover:brightness-120 cursor-pointer";
  } else if (color === "yellow") {
    colorStyles = "bg-yellow text-white hover:brightness-120 cursor-pointer";
  } else if (color === "pink") {
    colorStyles = "bg-pink text-white hover:brightness-120 cursor-pointer";
  } else if (color === "green") {
    colorStyles = "bg-green text-white hover:brightness-120 cursor-pointer";
  }

  // Outline-specific styles
  let outlineStyles = "";
  if (outline) {
    outlineStyles = "border-1 bg-transparent";
    if (color === "blue") {
      outlineStyles +=
        " border-blue text-blue hover:bg-blue hover:text-white cursor-pointer";
    } else if (color === "orange") {
      outlineStyles +=
        " border-orange text-orange hover:bg-orange hover:text-white cursor-pointer";
    } else if (color === "yellow") {
      outlineStyles +=
        " border-yellow text-yellow hover:bg-yellow hover:text-white cursor-pointer";
    } else if (color === "pink") {
      outlineStyles +=
        " border-pink text-pink hover:bg-pink hover:text-white cursor-pointer";
    } else if (color === "green") {
      outlineStyles +=
        " border-green text-green hover:bg-green hover:text-white cursor-pointer";
    }
  }

  // Combine all styles
  const buttonStyles = `${baseStyles} ${sizeStyles} ${
    outline ? outlineStyles : colorStyles
  }`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
