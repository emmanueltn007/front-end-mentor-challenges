import React from "react";
import HeaderSection from "./components/HeaderSection";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import DownloadingSection from "./components/DownloadingSection";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <>
      <HeaderSection />
			<HeroSection />
      <FeaturesSection />
      <DownloadingSection />
      <FAQSection />
    </>
  );
}

export default App;
