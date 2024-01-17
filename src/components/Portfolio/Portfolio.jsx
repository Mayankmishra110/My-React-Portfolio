import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
// import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Java from "../../img2/java.png";
import Mern2 from "../../img2/Mern2.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Mern2} alt="https://github.com/Mayankmishra110/Netflix-GPT" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="https://github.com/Mayankmishra110/My-React-Portfolio" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Java} alt="https://github.com/Mayankmishra110/Book-My-Show" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Mern2} alt="https://github.com/Mayankmishra110/My-React-Portfolio" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
