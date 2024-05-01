import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from "./Components/Hero Section/HeroSection";
import WhatWeDo from "./Components/WhatWeDo/WhatWeDo";
import "./app.scss";
import Pricing from "./Components/Pricing/Pricing";
import Faq from "./Components/Faq/Faq";
import GetInTouch from "./Components/GetInTouch/GetInTouch";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="landing-page">

      <div className="animation-img-div">
        <img className="animation-img" src="Mask group.png" alt="" />
      </div>

      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <Pricing />
      <Faq />
      <GetInTouch />
      <Footer />
      {/* <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "red",
          opacity: "10%",
        }}
      ></div> */}
    </div>
  );
};

export default App;
