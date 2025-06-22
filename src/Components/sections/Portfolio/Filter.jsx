import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Button from "../../ui/Button";
import ProjectCard from "../../ui/ProjectCard";
import projectsData from "../../../Data/ProjectCard.json";

import BrandingIcon from "../../../Assets/icon/BrandingIcon.svg";
import CaseStudyIcon from "../../../Assets/icon/CaseStudyIcon.svg";
import VisualDesignIcon from "../../../Assets/icon/VisualIcon.svg";
import WebDesignIcon from "../../../Assets/icon/WebIcon.svg";

const Filter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Extract `category` from URL or fallback to "all"
  const params = new URLSearchParams(location.search);
  const urlCategory = params.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState(urlCategory);

  useEffect(() => {
    setActiveCategory(urlCategory);
  }, [urlCategory]);

  const handleFilterChange = (categoryId) => {
    setActiveCategory(categoryId);
    if (categoryId === "all") {
      navigate("/portfolio");
    } else {
      navigate(`/portfolio?category=${categoryId}`);
    }
  };

  const categories = [
    { id: "all", name: t("portfolio.all"), color: "pink", icon: null },
    { id: "Branding", name: t("portfolio.branding"), color: "orange", icon: BrandingIcon },
    { id: "CaseStudy", name: t("portfolio.caseStudy"), color: "yellow", icon: CaseStudyIcon },
    { id: "VisualDesign", name: t("portfolio.visualDesign"), color: "blue", icon: VisualDesignIcon },
    { id: "WebDesign", name: t("portfolio.webDesign"), color: "green", icon: WebDesignIcon },
  ];

  const filteredProjects = projectsData.filter(
    (project) =>
      activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section>
      {/* Category Buttons */}
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

      {/* Projects */}
      {filteredProjects.length === 0 ? (
        <p className="text-gray-500 text-sm mt-10">{t("portfolio.noProjects")}</p>
      ) : (
        <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Filter;
