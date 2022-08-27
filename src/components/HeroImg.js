import "./HeroImgStyles.css";
import React from "react";
// my background image
import IntroImage from "../assets/pink-sky.jpg";

import { Link } from "react-router-dom";

const IntroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImage} alt="Image of pink sky" />
      </div>
      <div className="content">
        <p>Hi I'm Rukhsana</p>
        <h1>A Full Stack Developer.</h1>
      </div>
      <div className="content">
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className=" btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default IntroImg;
