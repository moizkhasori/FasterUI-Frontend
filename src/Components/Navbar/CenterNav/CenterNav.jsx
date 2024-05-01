import React, { useState } from "react";
import "./centernav.scss";
import { motion } from "framer-motion";

const navLinks = [
  { id: "home", text: "Home" },
  { id: "about", text: "About" },
  { id: "how-it-works", text: "How It Works" },
  { id: "services", text: "Services" },
];

const CenterNav = () => {
  const [activeTab, setActiveTab] = useState(navLinks[0].id);

  const handleActiveTab = (navText) => {
    setActiveTab(navText);
  };

  return (
    <nav className="center-nav">
      {navLinks.map((navText) => (
        <button
          className="nav-button"
          key={navText.id}
          onClick={() => handleActiveTab(navText.id)}
        >
          <motion.span
            className={
              activeTab === navText.id ? "nav-text nav-text-active" : "nav-text nav-text-unactive"
            }
            animate={{ fontWeight: activeTab === navText.id ? 600 : 400 }}
          >
            {navText.text}
          </motion.span>
        </button>
      ))}
    </nav>
  );
};

export default CenterNav;
