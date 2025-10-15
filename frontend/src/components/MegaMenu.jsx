import React from "react";

const MegaMenu = ({ data, isOpen, onClose }) => {
  if (!isOpen || !data) return null;

  return (
    <>
      {/* Backdrop - Click to close */}
      <div 
        className="fixed inset-0 top-[128px] bg-black/20 dark:bg-black/40 z-[998]"
        onClick={onClose}
        style={{ 
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      />
      
      {/* MegaMenu Content */}
      <div 
        className="fixed left-0 right-0 w-full bg-white dark:bg-[#2d2d2d] border-b border-gray-200 dark:border-gray-700 shadow-lg z-[999] px-6 py-10 overflow-y-auto"
        style={{ 
          top: '128px',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          maxHeight: 'calc(100vh - 128px)'
        }}>
        {/* Close Button - More Prominent */}
      <button 
        onClick={onClose}
        className="absolute z-10 p-2 text-white transition-all duration-200 bg-red-500 rounded-full shadow-lg top-4 right-6 hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700 hover:shadow-xl"
        aria-label="Close menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Container for content */}
      <div className="mx-auto max-w-7xl">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {data.map((category, index) => (
            <div key={index} className="group">
              {/* Category Header */}
              <div className="pb-2 mb-4 border-b-2 border-green-500 dark:border-green-400">
                <h3 className="flex items-center text-lg font-bold text-gray-800 transition-colors duration-300 dark:text-white">
                  <span className="w-2 h-2 mr-3 bg-green-500 rounded-full dark:bg-green-400"></span>
                  {category.title}
                </h3>
              </div>

              {/* Category Items */}
              <ul className="space-y-3">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <a
                      href="#"
                      className="flex items-center px-3 py-2 text-sm text-gray-600 transition-all duration-200 rounded-md hover:text-green-600 dark:text-gray-400 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 hover:pl-4"
                    >
                      <svg
                        className="w-3 h-3 mr-2 text-green-500 transition-opacity duration-200 opacity-0 dark:text-green-400 hover:opacity-100"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                      <span className="font-medium">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* View All Link */}
              <div className="pt-3 mt-4 border-t border-gray-200 dark:border-gray-600">
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-semibold text-green-600 transition-colors duration-200 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300"
                >
                  View All {category.title}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Section */}
      </div>
    </div>
    </>
  );
};

export default MegaMenu;
