import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Breadcrumbs = ({ projectTitle }) => {
  return (
    <div className="flex items-center text-gray-400 text-sm-p my-5 md:text-md-p lg:text-lg-p font-description font-light">
      {/* File Icon + Portfolio Link */}
      <Link to="/portfolio" className="flex items-center text-orange hover:underline">
        <FontAwesomeIcon icon={faFolderOpen} className="mr-2 text-orange" />
        Portfolio
      </Link>

      {/* Arrow Icon */}
      <FontAwesomeIcon icon={faChevronRight} className="mx-2 text-[14px] text-black" />

      {/* Project Title */}
      <span className="font-description font-light text-black truncate">
        {projectTitle}
      </span>
    </div>
  );
};

export default Breadcrumbs;
