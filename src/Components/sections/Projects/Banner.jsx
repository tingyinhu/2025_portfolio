import BrandingIcon from "../../../Assets/icon/BrandingIcon.svg";
import CaseStudyIcon from "../../../Assets/icon/CaseStudyIcon.svg";
import VisualDesignIcon from "../../../Assets/icon/VisualIcon.svg";
import WebDesignIcon from "../../../Assets/icon/WebIcon.svg";
import AnimatedText from "../../ui/AnimatedText";

const categoryIcons = {
  Branding: BrandingIcon,
  CaseStudy: CaseStudyIcon,
  VisualDesign: VisualDesignIcon,
  WebDesign: WebDesignIcon,
};

const Banner = ({ category, title, background }) => {
  return (
    <div className="h-[450px] flex items-center">
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-[450px] bg-cover bg-right bg-no-repeat -z-1 md:bg-bottom"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Icon + Title*/}
      <div>
        {categoryIcons[category] && (
          <img
            src={categoryIcons[category]}
            alt={category}
            className="my-5 w-10 h-10 md:w-12 md:h-12"
          />
        )}

        {/* Title */}
        <AnimatedText
        text={title}
        className="text-sm-h3 md:text-md-h2 lg:text-lg-h2 font-title font-medium text-black"
        tag="h1"
      />

      </div>
    </div>
  );
};

export default Banner;
