import React, { useState } from "react";
import MegaMenu from "./MegaMenu";
import { tutorialMenuData, interviewMenuData } from "../data/menuData";
import { useTheme } from "../contexts/ThemeContext";

const TPointIcon = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-blue-500"
  >
    <path
      d="M12 2L2 7L12 12L22 7L12 2Z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 17L12 22L22 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 12L12 17L22 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const { darkTheme, toggleTheme } = useTheme();

  const handleMouseEnter = (menu) => setActiveMenu(menu);
  const handleMouseLeave = () => setActiveMenu(null);

  return (
    <header className="bg-white dark:bg-[#2d2d2d] shadow-md dark:shadow-gray-700 sticky top-0 z-50 transition-all duration-300">
      <div className="w-full px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <TPointIcon />
            <span className="ml-2 text-xl font-bold text-gray-800 transition-colors duration-300 dark:text-white">
              Java8s
            </span>
          </div>

          {/* Middle: Navigation */}
          <nav className="items-center hidden ml-auto space-x-8 text-gray-600 dark:text-gray-300 md:flex">
            <div
              onMouseEnter={() => handleMouseEnter("tutorials")}
              onMouseLeave={handleMouseLeave}
              className="relative py-5"
            >
              <button className="flex items-center transition-colors duration-200 hover:text-gray-900 dark:hover:text-white">
                Tutorials
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeMenu === "tutorials" && (
                <MegaMenu data={tutorialMenuData} />
              )}
            </div>

            <div
              onMouseEnter={() => handleMouseEnter("interview")}
              onMouseLeave={handleMouseLeave}
              className="relative py-5"
            >
              <button className="flex items-center transition-colors duration-200 hover:text-gray-900 dark:hover:text-white">
                Interview
                <svg
                  className="w-5 h-5 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {activeMenu === "interview" && (
                <MegaMenu data={interviewMenuData} />
              )}
            </div>

            <a
              href="#"
              className="flex items-center transition-colors duration-200 hover:text-gray-900 dark:hover:text-white"
            >
              Compiler
              <svg
                className="w-5 h-5 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </nav>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 mr-4 transition-all duration-200 bg-gray-100 rounded-full hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Toggle dark/light mode"
          >
            {darkTheme ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-yellow-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>

          {/* Right: Color circles */}
          
          {/* <div className="flex items-center space-x-2">
            <div className="w-6 h-6 transition-colors duration-300 bg-green-500 border-2 border-gray-300 rounded-full dark:border-gray-600"></div>
            <div className="w-6 h-6 transition-colors duration-300 border-2 border-gray-300 rounded-full dark:border-gray-600 bg-cyan-500"></div>
            <div className="w-6 h-6 transition-colors duration-300 bg-blue-500 border-2 border-gray-300 rounded-full dark:border-gray-600"></div>
            <div className="w-6 h-6 transition-colors duration-300 bg-purple-500 border-2 border-gray-300 rounded-full dark:border-gray-600"></div>
          </div> */}
          

          
        </div>
      </div>
    </header>
  );
};

export default Header;
