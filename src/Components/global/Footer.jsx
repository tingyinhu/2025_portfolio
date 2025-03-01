import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-orange-outline py-10 px-6 md:flex md:justify-evenly">
      {/* Logo */}
      <img src="/favicon.svg" alt="Logo" className="w-10 h-10 mb-10" />

      {/* Discover More */}
      <div className="mb-10">
        <h3 className="font-title font-medium text-black mb-4 text-sm-h4 md:text-md-h4 lg:text-lg-h4">
          Discover More
        </h3>
        <ul>
          <li>
            <a
              href="/"
              className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p hover:text-orange"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="font-description font-light text-black text-sm-p md:text-md-p lg:text-lg-p hover:text-orange"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="font-description font-light text-sm-p md:text-md-p lg:text-lg-p hover:text-orange"
            >
              Portfolio
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="flex gap-4 mt-4 md:mt-0">
        <a href="https://www.linkedin.com/in/hutingyin/" target="_blank">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="text-white bg-blue p-2 rounded-full text-2xl hover:bg-blue-700"
          />
        </a>
        <a href="https://github.com/tingyinhu" target="_blank">
          <FontAwesomeIcon
            icon={faGithub}
            className="text-white bg-blue p-2 rounded-full text-2xl hover:bg-blue-700"
          />
        </a>
      </div>

      {/* Scroll-Up Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange text-white px-4 py-3.5 rounded-full shadow-lg transition-all duration-300 hover:bg-orange-600 hover:cursor-pointer"
        >
          <FontAwesomeIcon icon={faAngleUp} className="text-xl" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
