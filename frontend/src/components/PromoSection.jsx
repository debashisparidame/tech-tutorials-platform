import React from "react";

const PromoSection = () => {
  return (
    <div className="rounded-2xl p-8 md:p-12 my-24 flex flex-col md:flex-row items-center justify-between shadow-2xl transition-colors duration-300 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-gray-800 dark:to-black">
      <div className="relative mb-8 md:mb-0 md:mr-10">
        <img
          src="https://picsum.photos/id/10/300/200"
          alt="YouTube Promotion"
          className="rounded-xl shadow-lg transform -rotate-3 w-64 md:w-auto"
        />
        <div className="absolute -bottom-4 -right-4 p-4 rounded-lg shadow-md transition-colors duration-300 bg-gray-900 text-white dark:bg-white dark:text-black">
          <p className="text-xl font-bold">50K+</p>
          <p className="text-xs">SUBSCRIBERS</p>
        </div>
      </div>
      <div className="text-center md:text-left">
        <p className="text-sm font-bold text-blue-600 dark:text-blue-400 transition-colors duration-300">
          YOUTUBE CHANNEL
        </p>
        <h3 className="text-3xl md:text-4xl font-extrabold my-3 text-gray-900 dark:text-white transition-colors duration-300">
          Explore Latest Tutorials by Subscribing to <br /> Our YouTube Channel
        </h3>
        <a
          href="#"
          className="inline-flex items-center mt-6 font-bold py-2 px-6 rounded-lg transition-colors duration-300 bg-blue-600 hover:bg-blue-700 text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
          Join Now
        </a>
      </div>
    </div>
  );
};

export default PromoSection;
