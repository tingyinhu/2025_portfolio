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
        title="VIIDA: Revamping E-Commerce with UI/UX Design"
        background="/Projects/Viida/ViidaBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="VIIDA: Shopify Website for Lifestyle Products" />

      {/* InformationBox */}
      <InformationBox
        category="WebDesign"
        problem="The previous VIIDA website, built on WordPress, had a low conversion rate due to cluttered content, an inconsistent layout, and a confusing product customization experience. These issues negatively impacted user trust and shopping flow."
        solution="I redesigned and migrated the site to Shopify, improving layout consistency, streamlining the navigation, and enhancing the customized naming feature to provide a more intuitive and efficient user experience."
        tools={["Shopify", "FoxKit", "PageFly", "Adobe suite"]}
        roles={["UIUX Designer", "Web Developer"]}
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
