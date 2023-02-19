import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
// import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Aspiring</span>
        <span>Services</span>
        <span style={{color: darkMode?'white': ''}}>
          <b>Software Engineer/Software Developer<br/>
          Full Stack web Developer in MERN / Spring + React.JS + SQL</b>
           </span>
        <a href="https://github.com/Mayankmishra110/My-Resume">
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
              emoji= {HeartEmoji}
              heading= {'MERN Full Stack Developer'}
              detail= {"React.Js, Node.Js, Express.Js, MongoDB"}
              />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <div style={{top:"7rem", left: "10rem"}}>
              <Card
              emoji= {Glasses}
              heading= {'Data Structures & Algorithms '}
              detail= {"Solved more than 300 questions on Leetcode,GFG,etc."}
              />
           </div>
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
              emoji= {humble}
              heading= {'Backend in Java'}
              detail= {"Spring Boot, Hibernate, JDBC, Restful APIs, Exception Handling, Multithreading, Collection Framework "}
              />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
