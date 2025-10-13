import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-16 md:py-24 text-gray-800 dark:text-white transition-colors duration-300 relative z-[1]">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <p className="text-sm font-semibold tracking-wider text-green-600 dark:text-green-400 transition-colors duration-300">
          THE 14+ YEARS OF TRUST WITH NEW N
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold my-4 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
          Welcome to java8s
        </h1>
        <p className="text-lg mb-8 text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Get access to 100+ tutorials from top instructors around the world in
          one place.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full py-3 pl-6 pr-12 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2d2d2d] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white transition-colors duration-200">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-1"></div>
        <div className="relative">
          <img
            src="https://picsum.photos/id/1027/250/350"
            alt="Instructor 1"
            className="rounded-2xl shadow-2xl transform -rotate-6 transition hover:rotate-0 hover:scale-105 duration-300 z-10"
          />
          <img
            src="https://picsum.photos/id/1011/300/400"
            alt="Instructor 2"
            className="rounded-2xl shadow-2xl absolute top-1/2 -translate-y-1/2 left-1/4 transform rotate-3 transition hover:rotate-0 hover:scale-105 duration-300"
          />
          <div className="absolute bottom-4 -right-10 bg-white/20 dark:bg-white/20 backdrop-blur-md p-4 rounded-xl text-center shadow-lg transition-all duration-300">
            <p className="text-4xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
              100+
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-200 transition-colors duration-300">
              TUTORIALS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
