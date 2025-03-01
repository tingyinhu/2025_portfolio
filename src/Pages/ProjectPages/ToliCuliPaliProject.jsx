import React from "react";
import Banner from "../../Components/sections/Projects/Banner";
import Breadcrumbs from "../../Components/sections/Projects/Breadcrumbs";
import InformationBox from "../../Components/sections/Projects/InformationBox";
import Content from "../../Components/sections/Projects/Content";

const ToliCuliPaliProject = ({ project }) => {
  return (
    <div className="w-full">
      {/* Banner */}
      <Banner
        category="VisualDesign"
        title="Toli Culi Pali: Elegant Utensil Set for Fine Dining"
        background="/Projects/ToliCuliPali/ToliCuliPaliBanner.webp"
      />

      {/* Breadcrumbs */}
      <Breadcrumbs projectTitle="Toli Culi Pali: Elegant Utensil Set for Fine Dining" />

      {/* InformationBox */}
      <InformationBox
        category="VisualDesign"
        problem="The challenge was to introduce a new utensil set in a way that highlighted both its aesthetic appeal and functional design."
        solution="The launch campaign focused on showcasing the product’s six vibrant macaron colors and ergonomic design, emphasizing a sense of dining ritual."
        tools={["Adobe Photoshop", "Adobe Illustrator"]}
        roles={["Visual Designer", "Shoot Coordinator"]}
        date="January 10, 2022 → February 17, 2022"
      />

      {/* Content */}
      <div className="container mx-auto">
        <Content projectName="ToliCuliPaliProject" />
      </div>
    </div>
  );
};

export default ToliCuliPaliProject;