import "./HeroImgStyles.css";
import React from "react";
import HeroImage from "../assets/hero-img.jpg";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="hero-img" src={HeroImage} alt="Sky" />
      </div>
    </div>
  );
};

export default HeroImg;
