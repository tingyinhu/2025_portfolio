import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

import HomeIcon from "../../Assets/icon/HomeIcon.svg";
import AboutIcon from "../../Assets/icon/AboutIcon.svg";
import PortfolioIcon from "../../Assets/icon/PortfolioIcon.svg";
import LanguageSwitcher from "../ui/LanguageSwitcher";

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const sidebarItems = [
    { id: "home", label: t("sidebar.home"), icon: HomeIcon, path: "/" },
    { id: "about", label: t("sidebar.about"), icon: AboutIcon, path: "/about" },
    { id: "portfolio", label: t("sidebar.portfolio"), icon: PortfolioIcon, path: "/portfolio" },
  ];

  const SidebarItem = ({ label, icon, path }) => {
    const isActive = location.pathname === path;

    return (
      <Link
        to={path}
        onClick={() => setMobileMenuOpen(false)}
        className="relative flex items-center gap-3 px-8 py-2 lg:gap-1 lg:flex-col lg:items-center"
      >
        <div className="relative">
          {/* SVG Icon */}
          <svg className="h-6 w-6">
            <defs>
              <linearGradient
                id={`gradient-${label}`}
                x1="50%"
                y1="50%"
                x2="80%"
                y2="80%"
              >
                <stop offset="0%" style={{ stopColor: "#FF5A00", stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: "#FFC300", stopOpacity: 1 }} />
              </linearGradient>
            </defs>

            {!isActive && <image href={icon} width="24" height="24" />}

            {isActive && (
              <>
                <mask id={`mask-${label}`}>
                  <image
                    href={icon}
                    width="24"
                    height="24"
                    style={{ filter: "brightness(0) invert(1)" }}
                  />
                </mask>
                <rect
                  width="24"
                  height="24"
                  fill={`url(#gradient-${label})`}
                  mask={`url(#mask-${label})`}
                />
              </>
            )}
          </svg>
        </div>
        <span
          className={`font-title font-light text-[14px] ${
            isActive ? "text-orange" : "text-black"
          }`}
        >
          {label}
        </span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-1 z-20 bg-white lg:hidden">
        <FontAwesomeIcon
          icon={isMobileMenuOpen ? faXmark : faBars}
          className="text-2xl cursor-pointer"
          onClick={toggleMenu}
        />
        <img src="/logo.svg" alt="Logo" className="h-18 w-auto" />
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full bg-beige transition-transform duration-300 overflow-y-auto
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0 lg:w-auto w-screen z-10`}
      >
        <div className="flex flex-col items-start space-y-6 lg:items-center mt-25">
          {sidebarItems.map((item) => (
            <SidebarItem key={item.id} {...item} />
          ))}
        </div>
        <div className="flex flex-col lg:items-center mt-50">
          <LanguageSwitcher />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
