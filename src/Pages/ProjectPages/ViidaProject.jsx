import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const ViidaProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="WebDesign"
        title="VIIDA: Shopify Website for Lifestyle Productst"
        background="/Projects/Viida/ViidaBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="VIIDA: Shopify Website for Lifestyle Products" />

      {/* InformationBox */}
      <InformationBox
        category="WebDesign"
        problem="VIIDA needed a global website that reflected its minimalist style while effectively showcasing a diverse product range—from kids' tableware to award-winning adult products."
        solution="Built a global Shopify website using FoxKit for a simple, functional theme and PageFly for advanced, visually appealing layouts that clearly present their products."
        tools={["Shopify", "FoxKit", "PageFly", "Adobe suite"]}
        roles={["UI Designer", "Web Developer"]}
        date="June 1, 2022 → June 30, 2022"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="ViidaProject" />
      </div>
    </div>
  );
};

export default ViidaProject;
