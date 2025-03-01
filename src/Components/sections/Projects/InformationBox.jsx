import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faLightbulb,
  faTools,
  faUser,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

const categoryColors = {
  Branding: {
    text: "text-orange",
    bg: "bg-orange text-white",
  },
  CaseStudy: {
    text: "text-yellow",
    bg: "bg-yellow text-white",
  },
  VisualDesign: {
    text: "text-blue",
    bg: "bg-blue text-white",
  },
  WebDesign: {
    text: "text-green",
    bg: "bg-green text-white",
  },
};

const InformationBox = ({
  category,
  problem,
  solution,
  tools,
  roles,
  date,
}) => {
  const colors = categoryColors[category] || {
    text: "text-gray-500",
    bg: "bg-gray-500 text-white",
  };

  return (
    <div className="grid gap-4 md:grid-cols-[200px_1fr] text-black ring-1 ring-orange-outline rounded-2xl p-10 my-10 md:space-y-4">
      {/* Problem */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className={`w-6 h-6 mr-5 ${colors.text}`}
        />
        <h3 className="font-title font-medium text-sm-h4 md:text-sm-h4 lg:text-lg-h4 text-black">
          Problem
        </h3>
      </div>
      <p className="font-description font-light text-sm-p text-black md:text-md-p lg:text-lg-p">
        {problem}
      </p>

      {/* Solution */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faLightbulb}
          className={`w-6 h-6 mr-5 ${colors.text}`}
        />
        <h3 className="font-title font-medium text-sm-h4 md:text-sm-h4 lg:text-lg-h4 text-black">
          Solution
        </h3>
      </div>
      <p className="font-description font-light text-sm-p text-black md:text-md-p lg:text-lg-p">
        {solution}
      </p>

      {/* Tools */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faTools}
          className={`w-6 h-6 mr-5 ${colors.text}`}
        />
        <h3 className="font-title font-medium text-sm-h4 md:text-sm-h4 lg:text-lg-h4 text-black">
          Tools
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, index) => (
          <span
            key={index}
            className={`font-description text-[12px] md:text-[14px] px-3 py-1.5 rounded-full ${colors.bg}`}
          >
            {tool}
          </span>
        ))}
      </div>

      {/* My Roles */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faUser}
          className={`w-6 h-6 mr-5 ${colors.text}`}
        />
        <h3 className="font-title font-medium text-sm-h4 md:text-sm-h4 lg:text-lg-h4 text-black">
          My Roles
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {roles.map((role, index) => (
          <span
            key={index}
            className={`font-description text-[12px] md:text-[14px] px-3 py-1.5 rounded-full ${colors.bg}`}
          >
            {role}
          </span>
        ))}
      </div>

      {/* Date */}
      <div className="flex items-center">
        <FontAwesomeIcon
          icon={faCalendarAlt}
          className={`w-6 h-6 mr-5 ${colors.text}`}
        />
        <h3 className="font-title font-medium text-sm-h4 md:text-sm-h4 lg:text-lg-h4 text-black">
          Date
        </h3>
      </div>
      <p>{date}</p>
    </div>
  );
};

export default InformationBox;
