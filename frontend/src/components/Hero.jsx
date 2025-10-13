import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-16 md:py-24 text-gray-800 dark:text-white transition-colors duration-300 relative z-[1]">
      <div className="mb-10 md:w-1/2 md:mb-0">
        <p className="text-sm font-semibold tracking-wider text-green-600 transition-colors duration-300 dark:text-green-400">
          Silan Software
        </p>
        <h1 className="my-4 text-4xl font-extrabold leading-tight text-gray-900 transition-colors duration-300 md:text-6xl dark:text-white">
          Welcome to java8s
        </h1>
        <p className="mb-8 text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
          Get access to 100+ tutorials from top instructors around the world in
          one place.
        </p>
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-full py-3 pl-6 pr-12 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2d2d2d] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button className="absolute text-gray-500 transition-colors duration-200 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
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
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="relative flex justify-center md:w-1/2">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-3xl -z-1"></div>
        <div className="relative">
          <img
            src="https://picsum.photos/id/1027/250/350"
            alt="Instructor 1"
            className="z-10 transition duration-300 transform shadow-2xl rounded-2xl -rotate-6 hover:rotate-0 hover:scale-105"
          />
          <img
            src="https://picsum.photos/id/1011/300/400"
            alt="Instructor 2"
            className="absolute transition duration-300 transform -translate-y-1/2 shadow-2xl rounded-2xl top-1/2 left-1/4 rotate-3 hover:rotate-0 hover:scale-105"
          />
          <div className="absolute p-4 text-center transition-all duration-300 shadow-lg bottom-4 -right-10 bg-white/20 dark:bg-white/20 backdrop-blur-md rounded-xl">
            <p className="text-4xl font-bold text-gray-800 transition-colors duration-300 dark:text-white">
              100+
            </p>
            <p className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200">
              TUTORIALS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
