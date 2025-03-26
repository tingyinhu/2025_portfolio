import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const MobinDonutProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="Branding"
        title="Mobin Donuts: Branding to Development"
        background="/Projects/MobinDonut/MobinDonutBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Mobin Donuts: Branding to Development" />

      {/* InformationBox */}
      <InformationBox
        category="Branding"
        problem="Mobin Donut lacked a cohesive brand and digital presence to engage its style-conscious audience."
        solution="Developed a premium brand identity and a responsive website with storytelling, a 3D model viewer, and a mock API for dynamic content, ensuring a seamless user experience."
        tools={["Adobe Suite", "React", "Tailwind CSS", "Model Viewer", "Mock API"]}
        roles={["Brand Designer", "UI Designer", "Front-End Developer"]}
        date="October 1, 2024 → December 10, 2024"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="MobinDonutProject" />
      </div>
    </div>
  );
};

export default MobinDonutProject;
