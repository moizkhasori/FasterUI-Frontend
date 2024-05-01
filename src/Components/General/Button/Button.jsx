import React from "react";
import "./button.scss";
import { motion } from "framer-motion";

const Button = ({ text, type, padding, width }) => {
  return (
    <motion.button
    style={{padding, width}}
    whileHover={{scale:1.02, transition:{ease:"easeIn", duration:0.3}}}
    whileTap={{scale:0.98}}
    className={type === "primary" ? "p-btn" : "s-btn"}>
      <span>{text}</span>
    </motion.button>
  );
};

export default Button;
