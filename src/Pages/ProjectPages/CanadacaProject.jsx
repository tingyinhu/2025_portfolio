import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const CanadacaProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="CaseStudy"
        title="Canada.ca Redesign: Enhancing UIUX for Government Services"
        background="/Projects/Canadaca/CanadacaBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Canada.ca Redesign: Enhancing UIUX for Government Services" />

      {/* InformationBox */}
      <InformationBox
        category="CaseStudy"
        problem="Users struggle with navigation and information retrieval on government websites, especially non-citizens and those with diverse language backgrounds."
        solution="Through user research and testing, we identified key pain points and redesigned the interface to enhance accessibility, improve navigation, and streamline essential tasks like filing taxes and checking benefits."
        tools={["Figma", "Rainbow Sheet", "SUS"]}
        roles={["UX Researcher", "UI Designer"]}
        date="February 11, 2025 → March 11, 2025"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="CanadacaProject" />
      </div>
    </main>
  );
};

export default CanadacaProject;
