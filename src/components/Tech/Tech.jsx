import React, { useState } from "react";
import "./tech.css";
import { AnimatePresence, motion } from "framer-motion";
import { TechData } from "./TechData";

const Tech = () => {
  const [arr, setArr] = useState(TechData);
  return (
    <main className="tech">
      <h1 className="flex head">
        <div className="dev icon-cogs"></div>
        <span style={{ textDecoration: "underline rgba(255, 170, 0, 0.658)" }}>
          These are the technologies I've worked with{" "}
        </span>{" "}
        <div className="dev icon-circle-up"></div>
      </h1>
      <div className="flex lang">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{ type: "spring", damping: 10, stiffness: 100 }}
                key={item.id}
                className="card"
              >
                <img
                  style={{ borderRadius: "5px" }}
                  width={250}
                  src={item.techImg}
                  alt=""
                />
                <div style={{ width: "250px" }} className="box">
                  <h2 className="title">{item.title}</h2>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Tech;
