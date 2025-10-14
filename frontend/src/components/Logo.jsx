import React from "react";
import { Link } from "react-router-dom";

const LogoIcon = ({ className = "text-blue-500" }) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
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

export const Logo = ({
  size = "md",
  clickable = true,
  iconColor = "text-blue-500",
  className = "",
}) => {
  const sizes = {
    sm: { icon: 24, text: "text-lg" },
    md: { icon: 32, text: "text-xl" },
    lg: { icon: 48, text: "text-3xl" },
  };

  const { icon, text } = sizes[size];

  const logoContent = (
    <div className={`flex items-center ${className}`}>
      <LogoIcon className={iconColor} />
      <span
        className={`ml-2 ${text} font-bold text-gray-800 dark:text-white transition-colors duration-300`}
      >
        Java8s
      </span>
    </div>
  );

  if (clickable) {
    return (
      <Link
        to="/"
        className="transition-transform duration-200 hover:scale-105"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
};

export default Logo;
