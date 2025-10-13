import React from "react";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import Hero from "./components/Hero";
import TutorialSection from "./components/TutorialSection";
import PromoSection from "./components/PromoSection";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
// import ThemeDebug from "./components/ThemeDebug";
import { ThemeProvider } from "./contexts/ThemeContext";
import { tutorialData } from "./data/tutorials";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen font-sans transition-colors duration-300 bg-white dark:bg-[#212121]">
        <Header />
        <SubHeader />
        <main className="w-full py-8">
          <Hero />
          <div className="px-4 mt-16 space-y-16">
            {tutorialData.map((section, index) => (
              <TutorialSection
                key={index}
                title={section.category}
                items={section.items}
              />
            ))}
          </div>
          <PromoSection />
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </ThemeProvider>
  );
}

export default App;
