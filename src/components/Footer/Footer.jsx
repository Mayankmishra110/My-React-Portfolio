import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import Github from "@iconscout/react-unicons/icons/uil-github";
import LinkedIN from "@iconscout/react-unicons/icons/uil-linkedin"

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kmmay15@gmail.com</span>
        <div className="f-icons">
        <a href='https://www.instagram.com/l_e_o_for_life/'>

<Insta color="white" size={"3rem"} />
</a>
<a href=" https://twitter.com/mayankkrmishra0  "> 
<Twitter color="white" size={"3rem"} />
</a>
<a href="https://github.com/Mayankmishra110">
<Github color="white" size={"3rem"} />
</a>
<a href="https://www.linkedin.com/in/mayankmishracse">
<LinkedIN color="white" size={"3rem"} />
</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
