import React from "react";
import "./footer.scss";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-img-div">
        <img src="gradiant.png" alt="" />
      </div>
      <motion.div
        whileHover={{
          
          boxShadow: "rgba(100, 100, 111, 0.4) 0px 7px 29px 0px",
          transition: { duration: 0.2, ease: "linear" },
        }}
        className="footer-wrapper"
      >
        <div className="footer-part1">
          <img src="logo.png" alt="" />
          <h3>FasterUI</h3>
        </div>
        <div className="footer-part2">
          <div className="footer-part2-p">
            <p>
              Ready to elevate your online presence? Contact us today to discuss
              your project and discover how we can bring your vision to life.
            </p>
          </div>
          <div className="footer-part2-links">
            {["Home", "About", "How it Works", "Services"].map((item, i) => (
              <a href={`#${item}`} key={i}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-part3">
          <div className="footer-part3-text">
            <img src="heart.png" alt="" />
            <h5>Made with love by Moiz</h5>
          </div>
          <div className="footer-part3-links">
            {["ig.png", "linkedin.png", "tt.png", "dribble.png"].map(
              (src, i) => (
                <img src={src} alt="" key={i} />
              )
            )}
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
