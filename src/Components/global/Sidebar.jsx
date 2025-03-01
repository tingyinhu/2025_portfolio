import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFaceSmileWink,
  faFolderOpen,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const sidebarItems = [
  { id: "home", label: "Home", icon: faHouse, path: "/" },
  { id: "about", label: "About", icon: faFaceSmileWink, path: "/about" },
  {
    id: "portfolio",
    label: "Portfolio",
    icon: faFolderOpen,
    path: "/portfolio",
  },
];

const Sidebar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); 

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const SidebarItem = ({ label, icon, path }) => {
    const isActive = location.pathname === path; 

    return (
      <Link
        to={path}
        onClick={() => setMobileMenuOpen(false)}
        className={`flex items-center gap-3 px-8 py-2 lg:gap-1 lg:flex-col lg:items-center ${
          isActive ? "text-orange" : "text-black"
        }`}
      >
        <FontAwesomeIcon
          icon={icon}
          className={`text-[24px] ${isActive ? "text-orange" : "text-black"}`}
        />
        <span className="font-title font-light text-[14px] ">{label}</span>
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
            <SidebarItem
              key={item.id}
              label={item.label}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
