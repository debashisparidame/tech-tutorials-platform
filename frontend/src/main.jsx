import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Apply initial theme before rendering
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || !savedTheme) {
  document.documentElement.classList.add("dark");
  document.body.style.backgroundColor = "#212121";
} else {
  document.documentElement.classList.remove("dark");
  document.body.style.backgroundColor = "#ffffff";
}

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
