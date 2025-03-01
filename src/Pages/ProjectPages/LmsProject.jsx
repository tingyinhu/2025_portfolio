import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const LmsProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="Branding"
        title="LMS Golf Wear: Branding for a Celebrity Collaboration"
        background="/Projects/Lms/LmsBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="LMS Golf Wear: Branding for a Celebrity Collaboration" />

      {/* InformationBox */}
      <InformationBox
        category="Branding"
        problem="LMS Golf Wear needed a strong and cohesive brand identity that resonated with both golf enthusiasts and fans of Christopher Lee."
        solution="By developing a consistent brand identity, I crafted a logo, apparel patterns, clothing tags, and a cohesive visual style that reflected the essence of LMS Golf Wear."
        tools={["Adobe Photoshop", "Adobe Illustrator", "CLO 3D"]}
        roles={["Fashion Designer", "Graphic Designer"]}
        date="August 1, 2020 → October 31, 2020"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="LmsProject" />
      </div>
    </main>
  );
};

export default LmsProject;