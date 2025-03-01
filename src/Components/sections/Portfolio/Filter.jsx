import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import ProjectCard from "../../ui/ProjectCard";
import projectsData from "../../../Data/ProjectCard.json";
import BrandingIcon from "../../../Assets/icon/BrandingIcon.svg";
import CaseStudyIcon from "../../../Assets/icon/CaseStudyIcon.svg";
import VisualDesignIcon from "../../../Assets/icon/VisualIcon.svg";
import WebDesignIcon from "../../../Assets/icon/WebIcon.svg";

// Define categories
const categories = [
  { id: "all", name: "All", color: "pink", icon: null },
  { id: "Branding", name: "Branding", color: "orange", icon: BrandingIcon },
  {
    id: "CaseStudy",
    name: "Case Study",
    color: "yellow",
    icon: CaseStudyIcon,
  },
  {
    id: "VisualDesign",
    name: "Visual Design",
    color: "blue",
    icon: VisualDesignIcon,
  },
  { id: "WebDesign", name: "Web Design", color: "green", icon: WebDesignIcon },
];

const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get category from URL (e.g., /portfolio?category=branding)
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(urlCategory);

  // Sync state with URL when URL changes
  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  // Update URL when a category is selected
  const handleFilterChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      navigate("/portfolio"); // Remove category from URL
    } else {
      navigate(`/portfolio?category=${categoryId}`); // Update URL
    }
  };

  return (
    <section>
      {/* Filter Buttons */}
      <div className="w-full overflow-x-auto pb-2">
        <div className="flex gap-2 md:gap-4 w-max">
          {categories.map((category) => {
            const isActive = activeCategory === category.id;

            return (
              <Button
                key={category.id}
                size="secondary"
                color={category.color}
                outline={!isActive}
                icon={
                  category.icon && (
                    <img
                      src={category.icon}
                      alt={`${category.name} icon`}
                      className="w-5 h-5"
                    />
                  )
                }
                onClick={() => handleFilterChange(category.id)}
              >
                {category.name}
              </Button>
            );
          })}
        </div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projectsData
          .filter(
            (project) =>
              activeCategory === "all" || project.category === activeCategory
          )
          .map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
      </div>
    </section>
  );
};

export default Filter;
