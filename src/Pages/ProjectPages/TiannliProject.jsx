import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const TiannliProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="WebDesign"
        title="TIANNLI: E-Commerce Website for Premium Dried Fruits"
        background="/Projects/Tiannli/TiannliBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="TIANNLI: E-Commerce Website for Premium Dried Fruits" />

      {/* InformationBox */}
      <InformationBox
        category="WebDesign"
        problem="TIANNLI, a dried fruit brand rooted in Dadaocheng's rich heritage, needed an e-commerce platform that authentically showcased its identity while ensuring a smooth shopping experience."
        solution="I designed a website that harmonizes tradition with modern aesthetics, enhancing brand storytelling and usability to engage customers effectively."
        tools={["Shopline", "HTML", "CSS", "Adobe suite"]}
        roles={["UI Designer", "Web Developer"]}
        date="May 7, 2024 → August 31, 2024"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="TiannliProject" />
      </div>
    </div>
  );
};

export default TiannliProject;
