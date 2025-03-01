import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const UiuProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="VisualDesign"
        title="UIU Straw x OldHouseFace: Nostalgic Taiwanese Visual"
        background="/Projects/Uiu/UiuBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="UIU Straw x OldHouseFace: Nostalgic Taiwanese Visual" />

      {/* InformationBox */}
      <InformationBox
        category="VisualDesign"
        problem="UIU Straw needed a visual narrative that connected its brand with Taiwan’s rich architectural heritage to create a deeper cultural appeal."
        solution="Led a nostalgic-themed photoshoot, sourcing vintage props to enhance storytelling. Designed product pages and launch ads to showcase the collaboration’s unique cultural essence."
        tools={["Adobe Photoshop", "Adobe Illustrator"]}
        roles={["Visual Designer", "Shoot Coordinator"]}
        date="April 14, 2022 → April 30, 2022"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="UiuProject" />
      </div>
    </div>
  );
};

export default UiuProject;