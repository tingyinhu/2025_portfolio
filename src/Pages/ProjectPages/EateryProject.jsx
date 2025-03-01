import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const EateryProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="WebDesign"
        title="Eatery: Responsive Website for a Modern Restaurant"
        background="/Projects/Eatery/EateryBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Eatery: Responsive Website for a Modern Restaurant" />

      {/* InformationBox */}
      <InformationBox
        category="WebDesign"
        problem="Eatery needed a visually appealing and fully responsive website to enhance user experience across all devices while integrating interactive features."
        solution="Designed a grid-based, responsive website with dynamic JavaScript elements, ensuring seamless navigation, engaging animations, and an elegant, consistent layout."
        tools={["HTML", "CSS", "JavaScript", "Figma"]}
        roles={["UI Designer", "Web Developer"]}
        date="November 25, 2024 → December 9, 2024"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="EateryProject" />
      </div>
    </main>
  );
};

export default EateryProject;
