import React from "react";
import ClearSimplePricing from "./components/Clear&SimplePricing";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowWeWork from "./components/HowWeWork";
import OurBeautifulWorks from "./components/OurBeautifulWorks";
import OurCapabilities from "./components/OurCapabilities";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <OurCapabilities />
      <WhoWeAre />
      <WhyChooseUs />
      <OurBeautifulWorks />
      <HowWeWork />
      <ClearSimplePricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
