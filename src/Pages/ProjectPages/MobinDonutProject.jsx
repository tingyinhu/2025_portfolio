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
        title="Mobin Donuts: Crafting a Distinctive Brand Identity"
        background="/Projects/MobinDonut/MobinDonutBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Mobin Donuts: Crafting a Distinctive Brand Identity" />

      {/* InformationBox */}
      <InformationBox
        category="Branding"
        problem="Mobin Donut lacked a distinct identity to connect with its style-conscious, community-driven audience."
        solution="Crafted a minimalist, premium brand identity with storytelling that highlights local ingredients and shared experiences."
        tools={["Adobe Suite", "React", "Tailwind", "model viewer"]}
        roles={["UX Researcher", "UI Designer", "Web Developer"]}
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
