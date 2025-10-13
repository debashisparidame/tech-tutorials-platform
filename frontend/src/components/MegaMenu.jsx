import React from "react";

const MegaMenu = ({ data }) => {
  return (
    <div className="absolute top-full left-0 w-screen max-w-7xl -translate-x-1/2 ml-[calc(50%-1rem)] bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-700 shadow-lg rounded-b-lg px-4 p-8 z-50 transition-all duration-300">
      <button className="absolute top-4 right-8 text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
        {data.map((category, index) => (
          <div key={index}>
            <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-white transition-colors duration-300">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
