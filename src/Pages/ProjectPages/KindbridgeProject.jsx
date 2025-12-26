import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const KindbridgeProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="Branding"
        title="Kindbridge: Freelance Multi-Brand Visual"
        background="/Projects/Kindbridge/KindbridgeBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="KindBridge: Freelance Multi-Brand Visual" />

      {/* InformationBox */}
      <InformationBox
        category="Branding"
        problem="Kindbridge and its sub-brands lacked brand alignment across assets, resulting in inconsistent visual communication across print and digital channels."
        solution="Created adaptable brochures, presentation decks, and webpage designs for each brand, ensuring consistent visuals while maintaining distinct brand identities across touchpoints."
        tools={["Figma", "Adobe Photoshop", "Adobe Illustrator", "Google Slides"]}
        roles={["Graphic Researcher", "UI Designer"]}
        date="August, 2025 → Now"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="KindbridgeProject" />
      </div>
    </main>
  );
};

export default KindbridgeProject;
