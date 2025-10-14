import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

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

const Footer = () => {
  return (
    <footer className="transition-colors duration-300 bg-gray-100 dark:bg-[#1c1c1c] text-gray-600 dark:text-gray-400">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: About & Contact */}
          <div className="space-y-4">
            <div className="flex items-center">
              <TPointIcon />
              <span className="ml-2 text-xl font-bold text-gray-900 transition-colors duration-300 dark:text-white">
                Java8s
              </span>
            </div>
            <p className="text-sm">
              We provides tutorials and interview questions of all technology like java tutorial, data science, java frameworks.
            </p>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
                Contact Info
              </h4>
              <p className="text-sm">
                Plot No-741, 2nd Floor,Jayadev Vihar, 751013 , Bhubaneswar, Odisha
              </p>
              <p className="text-sm">info@silansoftware.com</p>
              <p className="text-sm">+91-89842 89279</p>
            </div>
            <div>
              <h4 className="mb-2 font-semibold text-gray-900 transition-colors duration-300 dark:text-white">
                Follow Us
              </h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Tutorials */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wider text-gray-900 transition-colors duration-300 dark:text-white">
              Tutorials
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Data Structures
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  C Programming
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  C++ Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  C# Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  PHP Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  HTML Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  JavaScript Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  jQuery Tutorial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Spring Tutorial
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Interview Questions */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wider text-gray-900 transition-colors duration-300 dark:text-white">
              Interview Questions
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Microsoft
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Amazon
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Adobe
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Intuit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Accenture
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Cognizant
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Capgemini
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Wipro
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  TCS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Infosys
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Online Compiler */}
          <div>
            <h4 className="mb-4 font-semibold tracking-wider text-gray-900 transition-colors duration-300 dark:text-white">
              Online Compiler
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Java
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-gray-900 dark:hover:text-white"
                >
                  Python
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between pt-8 mt-8 text-sm transition-colors duration-300 border-t border-gray-300 sm:flex-row dark:border-gray-800">
          <div className="flex mb-4 space-x-4 sm:mb-0">
            <a
              href="#"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              About Us
            </a>
            <a
              href="#"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Contact Us
            </a>
            <a
              href="#"
              className="transition-colors hover:text-gray-900 dark:hover:text-white"
            >
              Privacy Policy
            </a>
          </div>
          <p>&copy; Copyright © 2025 Java8s Powered by <a href="https://silansoftware.com/" className="text-green-600">Silan Software Pvt. Ltd.</a> All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;