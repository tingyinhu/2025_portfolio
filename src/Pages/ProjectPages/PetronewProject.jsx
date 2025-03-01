import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const PetronewProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="WebDesign"
        title="Petronew: Online Shop for Pet Health Supplements"
        background="/Projects/Petronew/PetronewBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Petronew: Online Shop for Pet Health Supplements" />

      {/* InformationBox */}
      <InformationBox
        category="WebDesign"
        problem=" Petronew, a pet joint supplement brand, needed a strong identity and an engaging online presence while staying budget-friendly."
        solution="Built a cost-effective website, designed branding, and created visuals for social media, ads, and product pages."
        tools={["1 Shop", "Adobe Photoshop", "Adobe Illustrator", "Bootstrap"]}
        roles={["UI Designer", "Web Developer"]}
        date="November 27, 2023 → December 1, 2023"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="PetronewProject" />
      </div>
    </div>
  );
};

export default PetronewProject;