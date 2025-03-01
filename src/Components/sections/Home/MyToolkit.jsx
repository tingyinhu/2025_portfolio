import ToolKitCard from "../../ui/ToolkitCard";
import figmaIcon from "../../../Assets/images/Home/figma.svg";
import adobesuiteIcon from "../../../Assets/images/Home/adobesuite.svg";
import lottieIcon from "../../../Assets/images/Home/lottie.svg";
import htmlIcon from "../../../Assets/images/Home/html.svg";
import cssIcon from "../../../Assets/images/Home/css.svg";
import javascriptIcon from "../../../Assets/images/Home/javascript.svg";
import tailwindIcon from "../../../Assets/images/Home/tailwind.svg";
import reactIcon from "../../../Assets/images/Home/react.svg";

const toolKitItem = [
  {
    imgSrc: figmaIcon,
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: adobesuiteIcon,
    label: "Adobe Suite",
    desc: "Design tool",
  },
  {
    imgSrc: lottieIcon,
    label: "Lottie",
    desc: "Design tool",
  },
  {
    imgSrc: htmlIcon,
    label: "HTML",
    desc: "UI",
  },
  {
    imgSrc: cssIcon,
    label: "CSS",
    desc: "UI",
  },
  {
    imgSrc: javascriptIcon,
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: tailwindIcon,
    label: "Tailwind",
    desc: "Framework",
  },
  {
    imgSrc: reactIcon,
    label: "React",
    desc: "Framework",
  },
];

const MyToolKit = () => {
  return (
    <section className="container py-10 md:py-20">
      <h2 className="font-title font-medium text-black text-sm-h2 md:text-md-h2 lg:text-lg-h2">
        My Toolkit
      </h2>
      <p className="font-description font-light text-black mt-3 md:mt-6 text-sm-p md:text-md-p lg:text-lg-p">
        From crafting seamless user experiences to adding playful animations,
        these are the essentials that help me turn imagination into reality.
      </p>

      <div
        className="mt-10 grid gap-3"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))" }}
      >
        {toolKitItem.map(({ imgSrc, label, desc }, key) => (
          <ToolKitCard key={key} imgSrc={imgSrc} label={label} desc={desc} />
        ))}
      </div>
    </section>
  );
};

export default MyToolKit;
