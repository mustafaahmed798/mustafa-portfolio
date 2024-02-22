import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu icon-menu flex"
        onClick={() => setShowModal(true)}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="main"
              spy={true}
              smooth={true}
              offset={-25}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="tech"
              spy={true}
              smooth={true}
              offset={-28}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              style={{ cursor: "pointer" }}
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );

          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode flex"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                className="icon-close"
                onClick={() => setShowModal(false)}
              />
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="/"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                onClick={() => setShowModal(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                onClick={() => setShowModal(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="main"
                spy={true}
                smooth={true}
                offset={-25}
                duration={500}
                onClick={() => setShowModal(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="tech"
                spy={true}
                smooth={true}
                offset={-28}
                duration={500}
                onClick={() => setShowModal(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                style={{ cursor: "pointer" }}
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-30}
                duration={500}
                onClick={() => setShowModal(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
