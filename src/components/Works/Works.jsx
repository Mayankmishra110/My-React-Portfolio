import React, { useContext } from "react";
import "./Works.css";
import react from "../../img2/react.png";
import SpringBoot from "../../img2/SpringBoot.png";
import MERN from "../../img2/MERN.png";
import Node from "../../img2/Node.png";
import MongoDB from "../../img2/MongoDb.png";
import javascript from "../../img2/javascript.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
          Skills and Technologies
          </span>
          <span>Also used in Projects</span>
          <span style={{color: darkMode?'white': ''}}>
           <b>Languages: </b>C,Java,JavaScript,HTML,CSS,SQL
             <br/><br/>
             <b>Libraries/Framework: </b>React.JS,Node.JS,Express.JS,Spring Boot,Hibernate, JPA.
             <br/><br/>
             <b>Tools/Technologies: </b>Git,Postman,Netlij IDEA,Maven,Eclipse.
             <br/> <br/>
             <b>Databases: </b>MySQL,MongoDb,NoSQL
             <br /><br/>
           </span>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={react} alt="" />
            
          </div>
          <div className="w-secCircle">
            <img src={javascript} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MERN} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Node} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={MongoDB} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={SpringBoot} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
