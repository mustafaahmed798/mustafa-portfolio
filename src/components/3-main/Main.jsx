import React, { useState } from "react";
import "./main.css";
import { allProjects } from "./allProjects";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [isActive, setIsActive] = useState("all");
  const [arr, setArr] = useState(allProjects);

  const handleClick = (btnCat) => {
    setIsActive(btnCat);
    const newArr = allProjects.filter((item) => {
      return item.category === btnCat;
    });
    setArr(newArr);
  };

  return (
    <main className="main flex">
      <section className="left-section flex">
        <button
          className={isActive === "all" ? "active" : null}
          onClick={() => {
            setIsActive("all");
            setArr(allProjects);
          }}
        >
          All Projects
        </button>
        {/* <button
          className={isActive === "css" ? "active" : null}
          onClick={() => {
            handleClick("css");
          }}
        >
          HTML & CSS
        </button> */}
        <button
          className={isActive === "java" ? "active" : null}
          onClick={() => {
            handleClick("java");
          }}
        >
          JavaScript
        </button>
        <button
          className={isActive === "react" ? "active" : null}
          onClick={() => {
            handleClick("react");
          }}
        >
          React js
        </button>
      </section>
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(0)" }}
                animate={{ transform: "scale(1)" }}
                transition={{
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                }}
                key={item.imgpath}
                className="card"
              >
                <img
                  style={{
                    borderRadius: "5px",
                    marginTop: "8px",
                    height: "150px",
                  }}
                  width={250}
                  src={item.imgpath}
                  alt=""
                />
                <div style={{ width: "250px" }} className="box">
                  <h2 className="title">{item.projectTitle}</h2>
                  <p className="sub-title">{item.describe}</p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a
                        href={item.proLink}
                        target="_blank"
                        alt=""
                        rel="noreferrer"
                      >
                        <div className="icon-link"></div>
                      </a>
                      <a
                        href={item.proURL}
                        target="_blank"
                        alt=""
                        rel="noreferrer"
                      >
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a className="link flex" href="/">
                      more
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-long-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
