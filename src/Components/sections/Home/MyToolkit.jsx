import { useTranslation } from "react-i18next";

import ToolKitCard from "../../ui/ToolkitCard";
import figmaIcon from "../../../Assets/images/Home/figma.svg";
import adobesuiteIcon from "../../../Assets/images/Home/adobesuite.svg";
import lottieIcon from "../../../Assets/images/Home/lottie.svg";
import htmlIcon from "../../../Assets/images/Home/html.svg";
import cssIcon from "../../../Assets/images/Home/css.svg";
import javascriptIcon from "../../../Assets/images/Home/javascript.svg";
import tailwindIcon from "../../../Assets/images/Home/tailwind.svg";
import reactIcon from "../../../Assets/images/Home/react.svg";
import AnimatedText from "../../ui/AnimatedText";

const toolKitItem = [
  { id: "figma", imgSrc: figmaIcon },
  { id: "adobe", imgSrc: adobesuiteIcon },
  { id: "lottie", imgSrc: lottieIcon },
  { id: "html", imgSrc: htmlIcon },
  { id: "css", imgSrc: cssIcon },
  { id: "javascript", imgSrc: javascriptIcon },
  { id: "tailwind", imgSrc: tailwindIcon },
  { id: "react", imgSrc: reactIcon },
];

const MyToolKit = () => {
  const { t } = useTranslation();

  return (
    <section className="container py-10 md:py-20">
      <AnimatedText
        text={t("home.mytoolkit")}
        className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2"
        tag="h2"
      />

      <p className="font-description font-light text-black mt-3 md:mt-6 text-sm-p md:text-md-p lg:text-lg-p">
        {t("home.mytoolkitDes")}
      </p>

      <div
        className="mt-10 grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {toolKitItem.map(({ id, imgSrc }, key) => (
          <ToolKitCard
            key={key}
            imgSrc={imgSrc}
            label={t(`home.toolkit.${id}.label`)}
            desc={t(`home.toolkit.${id}.desc`)}
          />
        ))}
      </div>
    </section>
  );
};

export default MyToolKit;
