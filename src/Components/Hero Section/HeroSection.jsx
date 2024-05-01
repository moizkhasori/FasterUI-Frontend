import React from "react";
import "./hero.scss";
import {motion} from "framer-motion"

const HeroSection = () => {
  return (
    <section className="hero-page">
      <div className="hero-wrapper">
        <h1>Awesome UI Dark Template for Webflow Agency</h1>
        <motion.button
          whileHover={{
            scale: 1.02,
            transition: { ease: "easeIn", duration: 0.3 },
          }}
          whileTap={{ scale: 0.98 }}
          className={"p-btn"}
        >
          <span>Get in Touch</span>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
