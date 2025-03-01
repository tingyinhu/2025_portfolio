import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const categoryColors = {
  Branding: "text-white bg-orange",
  "CaseStudy": "text-white bg-yellow",
  "VisualDesign": "text-white bg-blue",
  "WebDesign": "text-white bg-green",
};

const buttonColors = {
  Branding: "bg-orange",
  "CaseStudy": "bg-yellow",
  "VisualDesign": "bg-blue",
  "WebDesign": "bg-green",
};

const ProjectCard = ({ project }) => {
  const { title, description, tools, category, image } = project;
  const tagColor = categoryColors[category] || "text-white bg-orange";
  const btnColor = buttonColors[category] || "bg-orange";

  return (
    <div className="border-1 border-orange-outline rounded-2xl overflow-hidden">
      {/* Project Image */}
      <img src={image} alt={title} className="aspect-5/2 object-cover mb-3" />

      <div className="p-4">
        {/* Tools Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tools.map((tool, index) => (
            <span
              key={index}
              className={`font-description text-[12px] px-3 py-1 rounded-full ${tagColor}`}
            >
              {tool}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="font-title font-medium text-black mb-2 text-sm-h4 md:text-md-h4 lg:text-lg-h4">
          {title}
        </h3>

        {/* Description - Limit to 3 lines */}
        <p className="font-description font-light text-sm-p md:text-md-p lg:text-lg-p text-black line-clamp-2">
          {description}
        </p>

        {/* Bottom Section */}
        <div className="flex justify-end mt-4">
          <a href={project.link} rel="noopener noreferrer">
            <button
              className={`font-button text-[12px] md:text-[14px] text-white rounded-full p-3 ${btnColor} cursor-pointer`}
            >
              Read<FontAwesomeIcon icon={faArrowRight} className="px-1" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
