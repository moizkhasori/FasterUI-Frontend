import React from "react";
import "./pricing.scss";
import Button from "../General/Button/Button";
import { motion } from "framer-motion";

const Pricing = () => {
  return (
    <section className="pricing-section">
      <div className="pricing-wrapper">
      <div className="pricing-main">
          <PricingLeft />
          <PricingRight />
        </div>
      </div>
    </section>
  );
};

export default Pricing;

const PricingLeft = () => {
  return (
    <div className="pricing-main-left">
      <div className="pricing-main-left-up">
        <h1>Pricing</h1>
        <p>
          Take a look at some of our recent projects to see how we've helped
          businesses like yours succeed online.
        </p>
      </div>
      <motion.div
        whileHover={{
          scale: 1.001,
          boxShadow: "rgba(100, 100, 111, 0.05) 0px 7px 29px 0px",
          transition: { duration: 0.2, ease: "linear" },
        }}
        className="pricing-main-left-down"
      >
        <h2>Let's Schedule a Meeting</h2>
        <Button
          text={"Schedule Meeting"}
          type={"primary"}
          padding={"1.5rem 5rem"}
        />
      </motion.div>
    </div>
  );
};

const UnlimitedRequest = () => {
  return (
    <motion.div
      style={{ padding: "1rem", backgroundColor: "#fff", borderRadius: "0.5rem", }}
      whileHover={{
        backgroundColor: "#eaedf4",
        padding: "1rem",
        
        transition: { duration: 0.2, ease: "linear" },
      }}
      
      className="unlimited-request"
    >
      <img src="UnlimitedRequesttick.png" alt="" />
      <h6>Unlimited requests</h6>
    </motion.div>
  );
};

const PricingRight = () => {
  return (
    <motion.div
      whileHover={{
        scale: 1.001,
        boxShadow: "rgba(100, 100, 111, 0.05) 0px 7px 29px 0px",
        transition: { duration: 0.2, ease: "linear" },
      }}
      className="pricing-main-right"
    >
      <h3>Unlimted Services</h3>
      <p>
        Take a look at some of our recent projects to see how we've helped
        businesses like yours succeed online.
      </p>
      <div className="unlimited-request-div">
        {/* {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <UnlimitedRequest key={i} />
        ))} */}
        {[1,2,3].map((item,i) => (
          <div className="unlimited-request-div-line">
            <UnlimitedRequest key={i} />
            <UnlimitedRequest key={i+1} />
          </div>
        ))}
      </div>

      <PricingButton />
    </motion.div>
  );
};

const PricingButton = () => {
  return (
    <motion.button
      style={{ padding: "0 4rem", backgroundColor: "#F5F8FF" }}
      whileHover={{ padding: "0 5rem", backgroundColor: "#eaedf4" }}
      whileTap={{ scale: 0.98 }}
      className="price-button"
    >
      <div className="price-pricing-div">
        <h1>$3250</h1>
        <p>/mo</p>
      </div>
      <div className="arrow-pricing-div">
        <img src="priceArrow.png" alt="" />
      </div>
    </motion.button>
  );
};
