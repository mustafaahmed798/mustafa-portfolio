import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex foot">
      <ul>
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
      <p>© Copyright 2023, All Rights Reserved by Mustafa Ahmed</p>
    </footer>
  );
};

export default Footer;
