import React, { useState } from "react";
import "./card.scss";
import { motion, useAnimation } from "framer-motion";

const Card = ({ logoUrl, heading, description, imgUrl, customId, type }) => {
  return type === "small" ? (
    <SmallCard
      logoUrl={logoUrl}
      heading={heading}
      description={description}
      imgUrl={imgUrl}
      customId={customId}
      type={type}
    />
  ) : (
    <LargeCard
      logoUrl={logoUrl}
      heading={heading}
      description={description}
      imgUrl={imgUrl}
      customId={customId}
      type={type}
    />
  );
};

export default Card;

const SmallCard = ({ logoUrl, heading, description, customId, type }) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotate: 360,
      scale: 1.2,
      transition: { ease: "backOut", duration: 0.5 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 0,
      scale: 1,
      transition: { ease: "backOut", duration: 0.5 },
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.001,
        boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
        transition: { duration: 0.2, ease: "linear" },
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.2, ease: "backOut" },
      }}
      className={`grid-item ${type}-card`}
      id={customId}
    >
      <motion.div
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className="img-tag"
      >
        <motion.img animate={controls} src={logoUrl} alt="" />
      </motion.div>
      <h3>{heading}</h3>
      <p>{description}</p>
    </motion.div>
  );
};

const LargeCard = ({
  logoUrl,
  heading,
  description,
  imgUrl,
  customId,
  type,
}) => {
  const controls = useAnimation();

  const handleHoverStart = () => {
    controls.start({
      rotate: 360,
      scale: 1.2,
      transition: { ease: "backOut", duration: 0.5 },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 0,
      scale: 1,
      transition: { ease: "backOut", duration: 0.5 },
    });
  };

  return (
    <motion.div
      whileHover={{
        scale: 1.001,
        boxShadow: "rgba(100, 100, 111, 0.1) 0px 7px 29px 0px",
        transition: { duration: 0.2, ease: "linear" },
      }}
      whileTap={{
        scale: 0.99,
        transition: { duration: 0.2, ease: "backOut" },
      }}
      className={`grid-item ${type}-card`}
      id={customId}
    >
      <div className="large-card-left">
        <motion.div
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          className="img-tag"
        >
          <motion.img animate={controls} src={logoUrl} alt="" />
        </motion.div>
        <h3>{heading}</h3>
        <p>{description}</p>
      </div>
      <div className="large-card-right">
        <img src={imgUrl} alt="" />
      </div>
    </motion.div>
  );
};
