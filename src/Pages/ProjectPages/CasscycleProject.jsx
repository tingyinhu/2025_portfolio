import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const CasscycleProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="CaseStudy"
        title="CassCycle: Enhancing the 2nd Shopping Experience"
        background="/Projects/CassCycle/CassCycleBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="CassCycle: Enhancing the 2nd Shopping Experience" />

      {/* InformationBox */}
      <InformationBox
        category="CaseStudy"
        problem="Secondhand shoppers struggle with finding products easily, time-consuming communication, and securing sales confirmations."
        solution="Designed a platform that enhances search, simplifies listings, and improves transaction reliability for a seamless shopping experience."
        tools={["Figma", "Adobe Illustrator"]}
        roles={["UX Researcher", "UI Designer"]}
        date="October 1, 2024 → December 10, 2024"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="CasscycleProject" />
      </div>
    </main>
  );
};

export default CasscycleProject;
