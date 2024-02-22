import React from "react";
import "./intro.css";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
const Intro = () => {
  return (
    <motion.main
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0, duration: 2 }}
      className="intro flex"
    >
      <motion.div
        initial={{ transform: "scale(0.5)", rotate: "-10deg" }}
        animate={{ transform: "scale(1.1)", rotate: "0deg" }}
        transition={{ delay: 0, duration: 1 }}
        className="left"
      >
        <img src="/mustafa1.png" alt="" id="introImg" />
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0.5)", rotate: "-10deg" }}
        animate={{ transform: "scale(1.1)", rotate: "0deg" }}
        transition={{ delay: 0, duration: 1 }}
        className="right"
      >
        <h1 className="talk">
          <span className="hello">Hello, I'm </span>
          <Typewriter
            options={{
              strings: ["Mustafa Ahmed", "Frontend Developer | React js"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </motion.div>
    </motion.main>
  );
};

export default Intro;
