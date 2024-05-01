import React from "react";
import "./whatwedo.scss";
import Card from "./Card";

const gridArray = [
  {
    logoUrl: "sun1.png",
    heading: "Web Design",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "",
  },
  {
    logoUrl: "star2.png",
    heading: "UI/UX Design",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "",
  },
  {
    logoUrl: "monitor3.png",
    heading: "Responsive Design",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "",
  },
  {
    logoUrl: "purse4.png",
    heading: "E-commerce Solutions",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "ecomPic.png",
  },
  {
    logoUrl: "webflow5.png",
    heading: "Webflow",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "webflowPic.png",
  },
  {
    logoUrl: "custom6.png",
    heading: "Custom Development",
    description:
      "From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.",
    imgUrl: "webflowPic.png",
  },
];

const WhatWeDo = () => {
  return (
    <div className="whatwedo">
      <div className="whatwedo-wrapper">
        <h1>What We Do</h1>
        <div className="whatwedo-grid">
          {gridArray.map((item, index) => (
            <Card
                key={index}
              logoUrl={item.logoUrl}
              heading={item.heading}
              description={item.description}
              customId={`grid-${index + 1}`}
              imgUrl={item.imgUrl}
              type={((index+1 === 4 || index+1 === 5) ? "large" : "small")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

