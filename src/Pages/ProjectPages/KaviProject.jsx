import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const KaviProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="VisualDesign"
        title="KAVi: Redefining Portable Coffee Brewing"
        background="/Projects/Kavi/KaviBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="KAVi: Redefining Portable Coffee Brewing" />

      {/* InformationBox */}
      <InformationBox
        category="VisualDesign"
        problem="Coffee enthusiasts lacked a compact solution that combined brewing and portability in one device."
        solution="Developed visuals and content that highlight KAVi’s dual functionality, making it easy for customers to see its value for both home and travel."
        tools={["Adobe Photoshop", "Adobe Illustrator", "Adobe Premiere"]}
        roles={["Visual Designer", "Shoot Coordinator"]}
        date="August 1, 2022 → September 30, 2022"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="KaviProject" />
      </div>
    </main>
  );
};

export default KaviProject;