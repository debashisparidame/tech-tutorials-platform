import React, { useState, useEffect } from "react";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Typewriter effect states
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "The 14+ Years of Trust with New Name Tpoint Tech";

  // Typewriter effect
  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (isTyping) {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Pause for 2 seconds at the end
          setTimeout(() => {
            setIsTyping(false);
            setCurrentIndex(0);
            setDisplayedText("");
          }, 2000);
        }
      } else {
        // Start typing again after clearing
        setTimeout(() => {
          setIsTyping(true);
        }, 500);
      }
    }, 100); // Typing speed: 100ms per character

    return () => clearInterval(typewriterInterval);
  }, [currentIndex, isTyping, fullText]);

  // Sample data for search suggestions - can be extended with any future data
  const searchData = [
    "Core Java Tutorial",
    "Data Structures and Algorithms",
    "Java Servlet Programming",
    "JSP Tutorial",
    "Spring Framework",
    "Spring Boot",
    "Microservices Architecture",
    "SQL Database",
    "Python Programming",
    "NumPy Tutorial",
    "Pandas Data Analysis",
    "Matplotlib Visualization",
    "Machine Learning",
    "Deep Learning",
    "React.js Tutorial",
    "Node.js Backend",
    "MongoDB Database",
    "REST API Development",
    "JavaScript ES6+",
    "HTML5 & CSS3",
    "Responsive Web Design",
    "Git Version Control",
    "Docker Containers",
    "AWS Cloud Services",
    "Kubernetes Orchestration",
  ];

  // Filter suggestions based on search query
  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = searchData.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 5)); // Show top 5 suggestions
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      console.log("Searching for:", query);
      // Here you can add actual search logic
      // For now, just alert the search term
      alert(`Searching for: ${query}`);
      setSearchQuery(query);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
    handleSearch(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-16 px-16 md:py-24 text-gray-800 dark:text-white transition-colors duration-300 relative z-[1]">
      <div className="mb-10 md:w-1/2 md:mb-0">
        {/* Typewriter Animated Text */}
        <div className="h-6 overflow-hidden">
          <p className="text-sm font-semibold tracking-wider text-black transition-colors duration-300 dark:text-white">
            {displayedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        <h1 className="my-4 text-4xl font-extrabold leading-tight text-gray-900 transition-colors duration-300 md:text-6xl dark:text-white">
          Welcome to java8s
        </h1>
        <p className="mb-8 text-lg text-gray-600 transition-colors duration-300 dark:text-gray-400">
          Get access to 100+ tutorials from top instructors around the world in
          one place.
        </p>

        {/* Enhanced Search Box with Suggestions */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search tutorials, technologies, courses..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => searchQuery.length > 0 && setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            className="w-full border rounded-full py-3 pl-6 pr-12 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-[#2d2d2d] border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button
            onClick={() => handleSearch()}
            className="absolute text-gray-500 transition-colors duration-200 -translate-y-1/2 right-3 top-1/2 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
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
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>

          {/* Search Suggestions Dropdown */}
          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-[#2d2d2d] border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {searchSuggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="px-4 py-3 text-gray-800 transition-colors duration-200 border-b border-gray-100 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white dark:border-gray-700 last:border-b-0"
                >
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-3 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                    {suggestion}
                  </div>
                </div>
              ))}
            </div>
          )}
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
