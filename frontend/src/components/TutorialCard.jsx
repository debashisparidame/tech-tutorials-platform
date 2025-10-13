import React from "react";

const TutorialCard = ({ name, icon }) => {
  return (
    <a
      href="#"
      className="group flex flex-col items-center justify-center p-6 rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-[#2d2d2d] hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-transparent"
    >
      <div className="w-20 h-20 rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 bg-gray-100 dark:bg-white">
        <img
          src={icon}
          alt={`${name} logo`}
          className="h-12 w-12 object-contain"
        />
      </div>
      <p className="text-center font-semibold text-gray-800 dark:text-white transition-colors duration-300">
        {name}
      </p>
    </a>
  );
};

export default TutorialCard;
