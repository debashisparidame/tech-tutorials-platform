import React from "react";
import TutorialCard from "./TutorialCard";

const TutorialSection = ({ title, items }) => {
  return (
    <section>
      <div className="flex items-center px-4 mb-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
          {title}
        </h2>
        <div className="h-1 w-16 bg-green-400 ml-4 rounded"></div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {items.map((item, index) => (
          <TutorialCard key={index} name={item.name} icon={item.icon} />
        ))}
      </div>
    </section>
  );
};

export default TutorialSection;
