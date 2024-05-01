import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./accordian.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";

export const AccordianItem = ({ question, answer, isActive, toggle }) => {
  return (
    <motion.div
      whileHover={{ padding: "0 1rem" }}
      className="accordian"
      onClick={toggle}
    >
      <AccordianQuestion isActive={isActive} question={question} />
      <AccordianAnswer isActive={isActive} answer={answer} />
    </motion.div>
  );
};

const AccordianQuestion = ({ isActive, question }) => {
  return (
    <div className="accordian-question">
      <h3>{question}</h3>

      {isActive ? (
        <AccordianQuestionIcon>
          <AiOutlineMinus />
        </AccordianQuestionIcon>
      ) : (
        <AccordianQuestionIcon>
          <AiOutlinePlus />
        </AccordianQuestionIcon>
      )}
    </div>
  );
};

const AccordianQuestionIcon = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
};

const AccordianAnswer = ({ isActive, answer }) => {
  return (
    <AnimatePresence initial={false}>
      {isActive && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ type: "spring", duration: 0.4, bounce: 0 }}
        >
          <motion.p className="accordian-answer">{answer}</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
