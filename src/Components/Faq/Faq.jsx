import React, { useState } from "react";
import "./faq.scss";
import { AccordianItem } from "./Accordian";

const faqQuestions = [
  {
    id: 1,
    question: "How can I contact Inkyy Team?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 2,
    question: "What services do you offer?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 3,
    question: "Do you provide website maintenance services?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 4,
    question: " How long does it take to design and develop a website?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
  {
    id: 5,
    question: "Do you require a deposit for projects?",
    answer:
      "You can reach us through our contact form on our website or by emailing us at hello@inkyy.com We typically respond within 24 hours.",
  },
];

const Faq = () => {
  const [activeAccordian, setActiveAccordian] = useState(null);

  const handleToggle = (index) => {
    if (activeAccordian === index) {
      return setActiveAccordian(null);
    }
    setActiveAccordian(index);
  };

  return (
    <div className="faq-section">
         <div className="faq-section-pic">
                <img src="faqPic.png" alt="" />
                {/* <img className="img2" src="faqPic.png" alt="" /> */}

            </div>
      <div className="faq-wrapper">
        <div className="faq-left">
            <div className="faq-left-heading">
                <h3>Frequently<br/>Asked<br/>Questions</h3>
            </div>
        </div>
        <div className="faq-right">
          {faqQuestions.map((item) => (
            <AccordianItem
              isActive={activeAccordian === item.id}
              toggle={() => handleToggle(item.id)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
