import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const FoodLoopProject = ({ project }) => {
  return (
    <main className="w-full">
      {/* Banner */}
      <Banner
        category="CaseStudy"
        title="FoodLoop: Reducing Food Waste with Smart Discounts"
        background="/Projects/FoodLoop/FoodLoopBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="FoodLoop: Reducing Food Waste with Smart Discounts" />

      {/* InformationBox */}
      <InformationBox
        category="CaseStudy"
        problem="A lot of good food gets thrown away because stores don’t want to lose money by lowering prices too much, and shoppers worry it’s not fresh even if it’s safe."
        solution="The platform helps stores track food that's about to expire, automatically lowers prices or bundles items to sell more without losing money, and donates leftovers to charities — all while keeping inventory easy to manage."
        tools={["Figma", "Adobe Illustrator"]}
        roles={["UX Researcher", "UI Designer"]}
        date="April 1, 2025 → April 15, 2025"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="FoodloopProject" />
      </div>
    </main>
  );
};

export default FoodLoopProject;
