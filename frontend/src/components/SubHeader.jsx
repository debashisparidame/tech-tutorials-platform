import React, { useState } from "react";
import { FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiSpringboot, SiMysql } from "react-icons/si";
import { BiChevronDown } from "react-icons/bi";

const SubHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (menu) => setActiveDropdown(menu);
  const handleMouseLeave = () => setActiveDropdown(null);

  const pythonSubItems = [
    { name: "NumPy", icon: <FaPython /> },
    { name: "Pandas", icon: <FaPython /> },
    { name: "Matplotlib", icon: <FaPython /> },
    { name: "Machine Learning", icon: <FaPython /> },
    { name: "Deep Learning", icon: <FaPython /> },
  ];

  return (
    <div className="bg-green-700 dark:bg-gray-600 border-b border-green-600 dark:border-gray-500 sticky top-16 z-[500] overflow-visible">
      <div className="w-full px-4 overflow-visible md:px-20">
        <div className="flex items-center justify-center h-12 space-x-4 overflow-visible md:space-x-6 whitespace-nowrap">
          {/* Core Java */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <FaJava className="text-xl" />
            <span className="ml-2 text-sm font-medium">Core Java</span>
          </a>

          {/* DSA */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <FaDatabase className="text-xl" />
            <span className="ml-2 text-sm font-medium">DSA</span>
          </a>

          {/* Java Servlet */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <FaJava className="text-xl" />
            <span className="ml-2 text-sm font-medium">Java Servlet</span>
          </a>

          {/* JSP */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <FaJava className="text-xl" />
            <span className="ml-2 text-sm font-medium">JSP</span>
          </a>

          {/* Java Spring Core */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <SiSpringboot className="text-xl" />
            <span className="ml-2 text-sm font-medium">Java Spring Core</span>
          </a>

          {/* Java Spring Boot */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <SiSpringboot className="text-xl" />
            <span className="ml-2 text-sm font-medium">Java Spring Boot</span>
          </a>

          {/* Microservices */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <SiSpringboot className="text-xl" />
            <span className="ml-2 text-sm font-medium">Microservices</span>
          </a>

          {/* SQL */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <SiMysql className="text-xl" />
            <span className="ml-2 text-sm font-medium">SQL</span>
          </a>

          {/* Python with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("python")}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#"
              className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
            >
              <FaPython className="text-xl" />
              <span className="ml-2 text-sm font-medium">Python</span>
              <BiChevronDown className="ml-1 text-lg" />
            </a>

            {/* Python Dropdown */}
            {activeDropdown === "python" && (
              <div className="absolute top-full left-0 mt-0.5 w-56 bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl py-2 z-[9999]">
                {pythonSubItems.map((item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 transition-colors duration-200 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <span className="mr-3 text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          {/* Data Science */}
          <a
            href="#"
            className="flex items-center text-white transition-colors duration-200 hover:text-gray-200 dark:text-white dark:hover:text-gray-200"
          >
            <SiSpringboot className="text-xl" />
            <span className="ml-2 text-sm font-medium">Data Science</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
