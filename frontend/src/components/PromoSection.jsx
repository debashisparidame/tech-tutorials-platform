import React, { useState, useEffect } from "react";
import {
  FaYoutube,
  FaUsers,
  FaVideo,
  FaHeart,
  FaRocket,
  FaCode,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";

const PromoSection = () => {
  const [subscribers, setSubscribers] = useState(0);
  const [videos, setVideos] = useState(0);
  const [likes, setLikes] = useState(0);

  // Animated counter effect
  useEffect(() => {
    const animateCounter = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    animateCounter(50000, setSubscribers);
    animateCounter(500, setVideos);
    animateCounter(100000, setLikes);
  }, []);

  const features = [
    {
      icon: <FaCode className="text-3xl" />,
      title: "Hands-on Coding",
      description: "Real-world projects & examples",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Learn by Doing",
      description: "Step-by-step tutorials",
    },
    {
      icon: <FaRocket className="text-3xl" />,
      title: "Career Growth",
      description: "Industry-ready skills",
    },
    {
      icon: <FaStar className="text-3xl" />,
      title: "Expert Content",
      description: "Professional instructors",
    },
  ];

  return (
    <div className="my-24 space-y-16">
      {/* Main YouTube Promo Card */}
      <div className="relative p-1 overflow-hidden shadow-2xl rounded-3xl bg-gradient-to-br from-red-600 via-pink-600 to-purple-700">
        <div className="p-8 bg-white dark:bg-gray-900 rounded-3xl md:p-12">
          <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
            {/* Left Side - Image and Stats */}
            <div className="relative flex-1 group">
              <div className="relative">
                {/* Animated Background Circles */}
                <div className="absolute transition-opacity duration-500 rounded-full -inset-4 bg-gradient-to-r from-red-500 to-pink-500 blur-2xl opacity-30 group-hover:opacity-50 animate-pulse"></div>

                {/* YouTube Thumbnail */}
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop"
                    alt="Coding Tutorial"
                    className="w-full max-w-md mx-auto transition-transform duration-500 transform shadow-2xl rounded-2xl group-hover:scale-105"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-6 transition-transform duration-300 transform bg-red-600 rounded-full shadow-2xl cursor-pointer group-hover:scale-110 hover:bg-red-700">
                      <FaYoutube className="text-5xl text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute flex w-full max-w-sm gap-4 px-4 transform -translate-x-1/2 -bottom-6 left-1/2">
                <div className="flex-1 p-3 bg-white shadow-lg dark:bg-gray-800 rounded-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 animate-bounce-slow">
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text">
                    {subscribers.toLocaleString()}+
                  </p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Subscribers
                  </p>
                </div>
                <div
                  className="flex-1 p-3 bg-white shadow-lg dark:bg-gray-800 rounded-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 animate-bounce-slow"
                  style={{ animationDelay: "0.2s" }}
                >
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                    {videos}+
                  </p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Videos
                  </p>
                </div>
                <div
                  className="flex-1 p-3 bg-white shadow-lg dark:bg-gray-800 rounded-xl backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90 animate-bounce-slow"
                  style={{ animationDelay: "0.4s" }}
                >
                  <p className="text-2xl font-bold text-transparent bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text">
                    {likes.toLocaleString()}+
                  </p>
                  <p className="text-xs font-semibold text-gray-600 dark:text-gray-400">
                    Likes
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 mt-8 text-center lg:text-left lg:mt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-red-100 rounded-full dark:bg-red-900 animate-pulse">
                <FaYoutube className="text-xl text-red-600 dark:text-red-400" />
                <span className="text-sm font-bold text-red-600 dark:text-red-400">
                  JOIN OUR YOUTUBE FAMILY
                </span>
              </div>

              <h2 className="mb-4 text-4xl font-extrabold leading-tight text-transparent md:text-5xl bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text">
                Master Programming with
                <br />
                <span className="text-red-600 dark:text-red-400">
                  Real-World Projects
                </span>
              </h2>

              <p className="mb-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                Join thousands of developers learning Java, Python, Spring Boot,
                and more. Get access to premium tutorials, live coding sessions,
                and expert guidance!
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col justify-center gap-4 mb-8 sm:flex-row lg:justify-start">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 transform shadow-lg group bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 rounded-xl hover:shadow-2xl hover:-translate-y-1"
                >
                  <FaYoutube className="text-2xl transition-transform group-hover:scale-110" />
                  Subscribe Now
                  <span className="absolute inset-0 transition-opacity bg-white opacity-0 rounded-xl group-hover:opacity-20"></span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-gray-900 transition-all duration-300 transform bg-gray-100 shadow-lg dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-white rounded-xl hover:shadow-xl hover:-translate-y-1"
                >
                  <FaVideo className="text-xl" />
                  Watch Tutorials
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-6 text-sm text-gray-600 lg:justify-start dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaUsers className="text-blue-600" />
                  <span>50K+ Students</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-600" />
                  <span>100K+ Likes</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaStar className="text-yellow-500" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-6 transition-all duration-300 transform bg-white border border-gray-100 shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl hover:-translate-y-2 dark:border-gray-700"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl group-hover:opacity-10"></div>

            <div className="relative">
              <div className="inline-block p-4 mb-4 text-white transition-transform duration-300 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl group-hover:scale-110">
                {feature.icon}
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Add custom animation to global CSS or Tailwind config
const style = document.createElement("style");
style.textContent = `
  @keyframes bounce-slow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  .animate-bounce-slow {
    animation: bounce-slow 3s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default PromoSection;
